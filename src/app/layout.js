import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}
        {/* Search box */}

        {children}
      </body>
    </html>
  );
}
