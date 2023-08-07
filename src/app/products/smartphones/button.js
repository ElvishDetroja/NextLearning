"use client";

function Button({ item }) {
  return (
    <button
      onClick={() => {
        window.alert(`discount is ${item.discountPercentage}%`);
      }}
    >
      show discount
    </button>
  );
}

export default Button;
