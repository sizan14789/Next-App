import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Wrapper from "@/components/AuthProvider/wrapper";

export const metadata = {
  title: "Lamamia",
  description: "Landing site",
};

export const roboto = Roboto({ weight: ['100', '400', '700', '900'], subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </Wrapper>
      </body>
    </html>
  );
}
