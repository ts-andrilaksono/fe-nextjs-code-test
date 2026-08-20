import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE Assignment",
  description: "Frontend take-home / live-coding assignment",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
