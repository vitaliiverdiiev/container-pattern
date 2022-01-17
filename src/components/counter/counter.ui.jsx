import React from 'react';
import CounterContainer from './counter.container';

const Counter = () => {
  const { counter, increment, decrement } = CounterContainer();
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
