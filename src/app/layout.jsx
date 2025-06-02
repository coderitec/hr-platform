import { Roboto } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
