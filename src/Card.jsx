import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import React, { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () =>
    setCount((count) => {
      if (count > 0) {
        return count - 1;
      }
      return count;
    });
  const reset = () => setCount(0);

  return (
    <div className="card">
      <Title />
      <Count number={count} />
      <ResetButton reset={reset} />
      <CountButtons increment={increment} decrement={decrement} />
    </div>
  );
}
