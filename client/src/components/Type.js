import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Type({ orderType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let res = await axios.get(`http://localhost:3000/${orderType}`);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

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
