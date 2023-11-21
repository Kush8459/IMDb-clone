import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

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
          <Navbar />
          {/* Search box */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
