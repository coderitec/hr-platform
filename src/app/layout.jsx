import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/navigation/Nav";

const robo = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});



export const metadata = {
  title: "HR Platform",
  description: "A platform for managing HR tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={robo.className}
      >
        <Nav />
        <div className="min-h-screen">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
