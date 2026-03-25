/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Akshat Shukla Portfolio",
  description:
    "Portfolio of Akshat Shukla, software engineer passionate about web development, artificial intelligence, and cutting-edge systems. Explore my projects, skills, and professional experience.",
  keywords: [
    "Akshat Shukla",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "artificial intelligence",
    "software development",
    "cloud computing",
    "Python",
    "TypeScript",
    "C++",
    "software engineer",
  ],
  authors: [{ name: "Akshat Shukla", url: "https://github.com/Akshats25/" }],
  creator: "Akshat",
  publisher: "Akshat",
  openGraph: {
    title: "Akshat Shukla Portfolio",
    description:
      "Discover the portfolio of Akshat Shukla: web apps with Next.js, AI projects using Python, and full-stack development.",
    url: "https://raseraa0.github.io",
    siteName: "Akshat Shukla Portfolio",
    images: [
      {
        url: "https://raseraa0.github.io/preview.png", // Replace with your real image URL
        width: 1856,
        height: 928,
        alt: "Preview of Akshat Shukla's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.png", //TODO etre sur licon marche
  },
  metadataBase: new URL("https://raseraa0.github.io"),
};

export default metadataInfos;