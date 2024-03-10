import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { AuthContextProvider } from "./_utils/auth-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farmers Web Application",
  description: "My Farmers Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <AuthContextProvider> */}
      <body className={inter.className}>{children}</body>
      {/* </AuthContextProvider> */}
    </html>
  );
}
