import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "FE Assignment",
  description: "Frontend take-home / live-coding assignment",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
