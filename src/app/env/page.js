import React from "react";

function ENV() {
  console.log("**********************");
  console.log(process.env);
  return (
    <>
      <h3>ENV</h3>
      <p>node environment is {process.env.NODE_ENV}</p>
      <p>custom env is {process.env.CUSTOM}</p>
    </>
  );
}

export default ENV;
