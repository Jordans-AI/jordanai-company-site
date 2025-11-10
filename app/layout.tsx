import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://jordan-ai.com'),
  title: "Jordan-AI | AI Solutions for Business Growth",
  description: "Empower your business with AI. Simplify, automate, and grow smarter with Jordan-AI's tailored automation and intelligence solutions.",
  openGraph: {
    title: "Jordan-AI | AI Solutions for Business Growth",
    description: "Empower your business with AI. Simplify, automate, and grow smarter with Jordan-AI's tailored automation and intelligence solutions.",
    url: "https://jordan-ai.com",
    siteName: "Jordan-AI",
    images: [
      {
        url: "/jordan-ai-logo.png",
        width: 1024,
        height: 1536,
        alt: "Jordan-AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan-AI | AI Solutions for Business Growth",
    description: "Empower your business with AI. Simplify, automate, and grow smarter with Jordan-AI's tailored automation and intelligence solutions.",
    images: ["/jordan-ai-logo.png"],
  },
  icons: {
    icon: "/jordan-ai-logo.png",
    apple: "/jordan-ai-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
