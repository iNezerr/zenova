import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zenova Oil - Abuja's Trusted Diesel Partner",
  description: "Zenova Oil delivers high-quality diesel fuel directly to businesses in Abuja, Nigeria, on time, every time. Get a free quote today.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/zenovaoil_logo.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/zenovaoil_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/zenovaoil_logo.ico',
  },
  openGraph: {
    title: "Zenova Oil - Abuja's Trusted Diesel Partner",
    description: "Premium diesel delivered to your door. Serving businesses across Abuja and the FCT.",
    url: "https://www.zenovaoil.com.ng",
    siteName: "Zenova Oil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenova Oil - Abuja's Trusted Diesel Partner",
    description: "Premium diesel delivered to your door. Serving businesses across Abuja and the FCT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
