import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { OrderContext } from "../../context/OrderContext";

export default function CompletePage({ setStep }) {
  const [orderData, , resetOrderCounts] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData) => {
    try {
      const res = await axios.post(`http://localhost:4000/order`, orderData);
      setOrderHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  const handleClick = () => {
    resetOrderCounts();
    setStep(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>주문이 성공했습니다.</h2>
      <h3>지금까지 모든 주문</h3>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th>number</th>
            <th>price</th>
          </tr>
          {orderTable}
        </tbody>
      </table>
      <br />
      <button className="rainbow rainbow-1" onClick={handleClick}>
        첫페이지로
      </button>
    </div>
  );
}
