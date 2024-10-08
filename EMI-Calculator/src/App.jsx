import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    principalLoanAmount: 0,
    interestRate: 0,
    loanLength: 0,
  });

  const [emi, setEmi] = useState(0);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   The standard math equation for calculating your monthly mortgage payment is:

  // P(r(1+r)^n/((1+r)^n)-1))

  const handleCalculateEMI = () => {
    const principalLoanAmount = formData.principalLoanAmount;
    const interestRate = formData.interestRate;
    const loanLength = formData.loanLength;

    const monthlyPayment =
      principalLoanAmount *
        (1 + interestRate / 12) ** loanLength *
        (1 + interestRate / 12) ** (loanLength - 1) -
      principalLoanAmount;

    setEmi(monthlyPayment);
    console.log("emi", formData);
  };

  return (
    <>
      <h1>EMI Calculator</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Principal loan amount"
          onChange={handleFormData}
          name="principalLoanAmount"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Interest rate - %"
          onChange={handleFormData}
          name="interestRate"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Length of loan - years"
          onChange={handleFormData}
          name="loanLength"
        />{" "}
        <br />
        <button onClick={handleCalculateEMI}>Calculate EMI</button>
        <p>Your Monthly Mortgage payment will be : ${emi}</p>
      </div>
    </>
  );
}

export default App;
