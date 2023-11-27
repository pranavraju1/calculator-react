import React, { useState } from "react";
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [flag,setFlag] = useState('');
  // console.log(num1);
  // console.log(num2);

  const handleOperation = (opration) => {
    if (!num1) {
      setMessage("num1 is empty");
    } else if (!num2) {
      setFlag(false)
      setMessage("num2 is empty");
    } else {
      setFlag(true)
      setMessage("success");
      switch (opration) {
        case "+":
          setAnswer(num1 + num2);
          break;
        case "-":
          setAnswer(num1 - num2);
          break;
        case "/":
          setAnswer(num1 / num2);
          break;
        case "x":
          setAnswer(num1 * num2);
          break;
      }
    }
  };
  return (
    <div className="main">
      <div className="card">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          React Calculator
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="NUM1"
              onChange={(e) => setNum1(parseInt(e.target.value))}
            ></input>
            <input
              type="text"
              placeholder="NUM2"
              onChange={(e) => setNum2(parseInt(e.target.value))}
            ></input>
          </form>
        </div>
        <div className="opperations">
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleOperation("/")}>/</button>
          <button onClick={() => handleOperation("x")}>x</button>
        </div>
        {
          flag && <div style={{ color: "green" }}>{message}</div>
        }
        {
          (!flag) && <div style={{ color: "red" }}>{message}</div>
        }
        <div>{answer}</div>
      </div>
    </div>
  );
};

export default App;
