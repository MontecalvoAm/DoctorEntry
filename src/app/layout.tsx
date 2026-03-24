import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CaptchaProvider } from "@/context/CaptchaContext";

export const metadata: Metadata = {
  title: "VisayasMed Hospital | Doctor Data Entry",
  description: "Official portal for doctor registration at VisayasMed Hospital.",
  icons: {
    icon: "/vmed-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CaptchaProvider>
            <main>{children}</main>
          </CaptchaProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
