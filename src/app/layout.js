import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          {/* Search box */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
