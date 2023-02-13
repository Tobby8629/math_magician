import React from 'react';

const Calculator = () => {
  const digits = ['AC', '+/-', '%', '\u00f7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const random = Math.ceil(Math.random * 1000);
  return (
    <div className="calculator">
      <div className="digits">
        <div className="input" />
        <div className="grid">
          {digits.map((digit) => (
            <div className="digit" key={random}>
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
