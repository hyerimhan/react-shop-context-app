import React, { useState } from "react";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";
import CompletePage from "./pages/CompletePage";

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: "4rem" }}>
      {step === 0 ? <OrderPage setStep={setStep} /> : null}
      {step === 1 ? <SummaryPage setStep={setStep} /> : null}
      {step === 2 ? <CompletePage setStep={setStep} /> : null}
    </div>
  );
}
