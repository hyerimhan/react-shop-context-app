import React from "react";

export default function Error({ message }) {
  let errorMessage = message || "에러입니다.";
  return (
    <div style={{ backgroundColor: "red", color: "#fff" }}>{errorMessage}</div>
  );
}
