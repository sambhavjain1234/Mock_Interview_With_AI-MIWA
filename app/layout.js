import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata = {
  title: "MIWA",
  description: "Mock Interview With AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        //className={inter.className}
      >
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
