import React from "react";

export default function Type({ orderType }) {
  return (
    <>
      <h2>주문 종류</h2>
      <p>개별 가격</p>
      <p>총 가격</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      ></div>
    </>
  );
}
