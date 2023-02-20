import React from 'react';

const mathquote = 'mathematics is not about numbers, equations ,computations or algorithms: is about understanding ';
const Quotes = () => (
  <div className="quotes">
    <h2>Math Quotes</h2>
    <p>
      {mathquote}
      -
      <span className="bold">william paul thurson</span>
    </p>
  </div>
);

export default Quotes;
