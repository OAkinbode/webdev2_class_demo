import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UseContextProvider from "@/components/useContextProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farmer's Web Application",
  description: "My Farmers Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UseContextProvider>
        <body className={inter.className}>{children}</body>
      </UseContextProvider>
    </html>
  );
}
