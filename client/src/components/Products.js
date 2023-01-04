import React from "react";

export default function Products() {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "75%" }} alt="product" />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}></label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          defaultValue={0}
          min="0"
          name="quantity"
        />
      </form>
    </div>
  );
}
