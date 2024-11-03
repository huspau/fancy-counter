import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import { useState } from "react";
import { DEFAULT_COUNT, LIMIT_COUNT } from "./Constant";

export default function Card() {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const locked = count >= LIMIT_COUNT;

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count number={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} locked={locked} />
    </div>
  );
}
