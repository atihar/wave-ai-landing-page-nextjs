import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wave AI",
  description: "Wave: AI-powered transcription and summarization for audio and calls in any language. Capturing and understanding crucial information, wherever you are.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><SmoothScrolling>{children}</SmoothScrolling></body>
    </html>
  );
}
