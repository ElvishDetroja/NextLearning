"use client";
import Script from "next/script";

function Scripts() {
  return (
    <Script
      src="/location.js"
      onLoad={() => {
        console.log("onLoad");
      }}
    />
  );
}

export default Scripts;
