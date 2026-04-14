import { Metadata, Viewport } from "next";

const MAIN_TITLE = "Huy Dang — Software Engineer";
const MAIN_DESCRIPTION =
  "Huy Dang is a software engineer building user-facing applications and the systems behind them.";

export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://huydang.vercel.app/"),
  title: {
    default: MAIN_TITLE,
    template: `%s | Huy Dang`,
  },
  description: MAIN_DESCRIPTION,
  keywords: [
    "Huy Dang",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Web Application Development",
    "System Design",
    "Interface Design",
    "Mumbai",
  ],
  authors: [{ name: "Huy Dang", url: "https://huydang.vercel.app/" }],
  creator: "Huy Dang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huydang.vercel.app/",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    siteName: "Huy Dang",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Huy Dang - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    creator: "@huydang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
  },
  alternates: {
    canonical: "https://huydang.vercel.app/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const sharedViewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
};
