"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ProductsLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/products/food" && <h5>products navbar</h5>}
      <Link href="/products/electronics" className="link">electronics</Link>
      <Link href="/products/food" className="link">food</Link>
      <Link href="/products/smartphones" className="link">smartphones</Link>
      <Link href="/products/nt" className="link">nt</Link>
      <hr />
      {children}
    </>
  );
}

export default ProductsLayout;