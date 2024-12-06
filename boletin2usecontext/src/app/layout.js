"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProdiver } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import { LanguageProvider } from "./LanguageContext";
import { CartProvider } from "./CartContext";
import { PermissionsProvider } from "./PermissionsContext";
import { NotificationProvider } from "./NotificationContext";
import { SettingsProvider } from "./SettingsContext";
import { LoadingProvider } from "./LoadingContext";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProdiver>
          <AuthProvider>
            <LanguageProvider>
              <CartProvider>
                <PermissionsProvider>
                  <NotificationProvider>
                      <SettingsProvider>
                        <LoadingProvider>
                          {children}
                        </LoadingProvider>
                      </SettingsProvider>
                    </NotificationProvider>
                  </PermissionsProvider> 
              </CartProvider>
            </LanguageProvider>
          </AuthProvider>
        </ThemeProdiver>
      </body>
    </html>
  );
}
