"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

//
//
//

function Home() {
  //
  const router = useRouter();
  //
  return (
    <>
      <h1>this is homepage</h1>
      <button
        onClick={() => {
          console.log("button press");
        }}
      >
        Click Me to console
      </button>

      <br />

      <Link href="https://google.com">go to google with link</Link>

      <br />

      <button
        onClick={() => {
          router.push("/products");
        }}
      >
        go to Products with router
      </button>
    </>
  );
}

export default Home;
