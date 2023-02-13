import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const digits = ['AC', '+/-', '%', '\u00f7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [solution, setsolution] = useState({ total: null, next: null, operation: null });
  return (
    <div className="calculator">
      <div className="digits">

        <div className="input">
          {solution.total}
          {solution.operation}
          {solution.next}
        </div>

        <div className="grid">
          {digits.map((digit) => (
            <div
              className="digit"
              key={digit}
              onClick={(e) => setsolution(calculate(solution, e.target.textContent))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => setsolution(calculate(solution, e.target.textContent))}
            >
              {digit}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Calculator;
