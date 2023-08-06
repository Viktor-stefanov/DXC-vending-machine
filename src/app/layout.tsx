import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "DXC Vending Machine",
  description: "A simple vending machine implementation in next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          
          {children}</ThemeRegistry>
      </body>
    </html>
  );
}
