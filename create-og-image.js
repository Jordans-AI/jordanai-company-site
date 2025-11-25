const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function createOGImage() {
  // Create canvas with OG dimensions
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Fill background with brand color
  ctx.fillStyle = '#F8F7F4';
  ctx.fillRect(0, 0, 1200, 630);

  // Load and draw logo
  const logo = await loadImage(__dirname + '/public/jordan-ai-logo.png');

  // Calculate dimensions to fit logo nicely (max height 500px)
  const maxHeight = 500;
  const scale = maxHeight / logo.height;
  const width = logo.width * scale;
  const height = maxHeight;

  // Center the logo
  const x = (1200 - width) / 2;
  const y = (630 - height) / 2;

  ctx.drawImage(logo, x, y, width, height);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(__dirname + '/public/og-image.png', buffer);
  console.log('✅ OG image created: public/og-image.png (1200×630)');
}

createOGImage().catch(console.error);
