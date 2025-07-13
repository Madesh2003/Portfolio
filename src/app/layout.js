import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./(components)/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Madesh - Portfolio",
  description: "A portfolio showcasing my work and skills.",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#110f0f]`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
