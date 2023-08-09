import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//
//
//

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h5>main navbar</h5>
        <ul>
          <Link href="/" className="link">
            home
          </Link>
          <Link href="/signup" className="link">
            signup
          </Link>
          <Link href="/signup/34" className="link">
            signup34
          </Link>
          <Link href="/signin" className="link">
            signin
          </Link>
          <Link href="/products" className="link">
            products
          </Link>
          <Link href="/product" className="link">
            product
          </Link>
          <Link href="/users" className="link">
            users
          </Link>
          <Link href="/user" className="link">
            user
          </Link>
        </ul>
        <hr />
        {children}
      </body>
    </html>
  );
}
