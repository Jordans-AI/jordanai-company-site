# WhatsApp Open Graph Image Fix

**Date**: November 25, 2025
**Issue**: WhatsApp preview collapsing when sharing jordan-ai.com URL

## Problem

WhatsApp would start loading the preview image, then collapse to show no image. The preview worked correctly on:
- iMessage ✓
- Facebook Debugger ✓
- Twitter/X ✓

But failed specifically on WhatsApp.

## Root Causes

### 1. Image Format - RGBA with Transparency
WhatsApp rejects OG images with alpha channels (RGBA format), even if the transparency isn't visually apparent. The original image was PNG with RGBA color mode.

### 2. Wrong Dimensions
Original logo was portrait orientation (1024×1536) instead of WhatsApp's preferred landscape format (1200×630).

### 3. Deployment Failure
Initial fix failed to deploy because the `canvas` package (used for image generation) requires native build dependencies (Python, Cairo, node-gyp) that weren't available in the Alpine Linux Docker container.

## Solution Steps

### Step 1: Generate Proper OG Image
Created a 1200×630 landscape image with:
- Solid background using brand color (#F8F7F4)
- Centered logo scaled to fit nicely
- Proper social media dimensions

### Step 2: Remove Alpha Channel
Converted PNG from RGBA to RGB format:
```bash
# Used sips (macOS) to strip alpha channel via JPEG intermediary
sips -s format jpeg og-image.png --out temp.jpg
sips -s format png temp.jpg --out og-image-rgb.png
```

**Why this works**: Converting through JPEG format strips the alpha channel since JPEG doesn't support transparency. The result is a PNG with RGB color mode.

### Step 3: Fix Docker Build
Moved `canvas` package from `dependencies` to `devDependencies`:
```json
{
  "devDependencies": {
    "canvas": "^3.2.0"
  }
}
```

**Reason**: Canvas is only needed for the generation script (`create-og-image.js`), not for the running Next.js application. This avoids native compilation requirements in production Docker builds.

### Step 4: Update Metadata
Updated [app/layout.tsx](../app/layout.tsx) to reference new image:
```typescript
openGraph: {
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Jordan-AI Logo",
    },
  ],
}
```

### Step 5: Clear WhatsApp Cache
WhatsApp maintains a separate cache from Facebook's debugger. To force refresh:
- Use URL with query parameter: `https://jordan-ai.com?v=2`
- Wait 24-48 hours for natural cache expiration (if not urgent)

## Verification

After deployment, verify the image format:
```bash
# Check HTTP response
curl -I https://jordan-ai.com/og-image.png

# Check image format
curl -s https://jordan-ai.com/og-image.png | file -
# Should show: PNG image data, 1200 x 630, 8-bit/color RGB
```

## Key Learnings

1. **WhatsApp is stricter than other platforms** - it rejects RGBA images even when Facebook Debugger accepts them

2. **Separate caches** - Facebook Debugger and WhatsApp use different caching systems; clearing one doesn't clear the other

3. **Query parameters bypass cache** - Adding `?v=2` to the URL forces WhatsApp to treat it as a new link

4. **RGB vs RGBA matters** - Always use RGB (no alpha) for OG images when WhatsApp support is required

5. **DevDependencies for build tools** - Native build dependencies (like canvas) should be dev-only to avoid production deployment issues

## Files Modified

- [app/layout.tsx](../app/layout.tsx) - Updated OG metadata
- [public/og-image.png](../public/og-image.png) - New 1200×630 RGB image
- [create-og-image.js](../create-og-image.js) - Image generation utility (dev-only)
- [package.json](../package.json) - Moved canvas to devDependencies

## Prevention

For future OG images:
1. Always use RGB format (no alpha channel)
2. Use 1200×630 dimensions for broad compatibility
3. Test with actual WhatsApp sharing (not just debuggers)
4. Keep image generation tools in devDependencies

## References

- [Open Graph Protocol](https://ogp.me/)
- [WhatsApp Link Previews](https://faq.whatsapp.com/539178204845146)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
