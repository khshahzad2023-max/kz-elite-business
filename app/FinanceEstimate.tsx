"use client";

import { useMemo, useState } from "react";

export default function FinanceEstimate() {
  const [price, setPrice] = useState(5000);
  const [deposit, setDeposit] = useState(0);
  const [years, setYears] = useState(4);
  const [rate, setRate] = useState(7.78);
  const [method, setMethod] = useState<"flat"|"reducing">("flat");

  const result = useMemo(() => {
    const principal = Math.max(0, price - deposit);
    const n = years * 12;
    const annual = rate / 100;
    const monthlyRate = annual / 12;
    const payment = method === "flat"
      ? (principal * (1 + annual * years)) / n
      : monthlyRate === 0 ? principal / n : principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -n));
    return { principal, monthly: payment, total: payment * n, interest: payment * n - principal };
  }, [price, deposit, years, rate, method]);

  return <div className="kz-fin-estimator">
    <h3>Illustrative Car Finance Calculator</h3>
    <div className="kz-fin-estimator-grid">
      <label>Car Price (OMR)<input type="number" min={0} max={1000000} step={100} value={price} onChange={e=>setPrice(Math.max(0,Number(e.target.value)||0))}/></label>
      <label>Down Payment (OMR)<input type="number" min={0} max={price} step={100} value={deposit} onChange={e=>setDeposit(Math.max(0,Math.min(price,Number(e.target.value)||0)))}/></label>
      <label>Finance Term<select value={years} onChange={e=>setYears(Number(e.target.value))}>
        {[1,2,3,4,5,6,7].map(y=><option key={y} value={y}>{y} {y===1?"year":"years"}</option>)}
      </select></label>
      <label>Illustrative Annual Rate (%)<input type="number" min={0} max={30} step={0.01} value={rate} onChange={e=>setRate(Math.min(30,Math.max(0,Number(e.target.value)||0)))}/></label>
      <label>Interest Calculation<select value={method} onChange={e=>setMethod(e.target.value as "flat"|"reducing")}>
        <option value="flat">Flat annual rate</option>
        <option value="reducing">Reducing balance annual rate</option>
      </select></label>
    </div>
    <div className="kz-fin-estimator-result">{result.monthly.toFixed(3)} OMR / month</div>
    <p>Amount financed: {result.principal.toFixed(3)} OMR • Estimated interest: {result.interest.toFixed(3)} OMR • Total repayments: {result.total.toFixed(3)} OMR.</p>
    <p><strong>Estimate only.</strong> The 7.78% starting example is not a current lender offer or confirmed rate. Actual finance costs, term eligibility, approval, insurance and fees depend on the provider. Flat and reducing-balance annual rates are not directly equivalent.</p>
  </div>;
}
