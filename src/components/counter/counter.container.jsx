import React, { useState } from 'react';

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter((prev) => prev - 1);
  const increment = () => setCounter((prev) => prev + 1);

  return { counter, increment, decrement };
};

export default CounterContainer;
