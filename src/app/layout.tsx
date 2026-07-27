import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { geistMono, geistSans, incognito, pixelifySans } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import MotionConfigWrapper from "@/components/motion-config";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import env from "@/config/env";
import FloatingAvatar from "@/components/floating-avatar";
import { BackgroundAudio } from "@/components/shared/background-audio";
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "portfolio",
    "developer portfolio",
    "creative",
    "fullstack",
    "nextjs",
  ],

  openGraph: {
    images: [
      {
        url: "/og-image.png",
        alt: "Gurbaj's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable,
        )}
      >
        <Providers>
          <MotionConfigWrapper>
            <BackgroundAudio />
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </Providers>

      </body>
    </html>
  );
}
