import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import { useEffect, useState } from "react";
import { DEFAULT_COUNT, LIMIT_COUNT } from "./Constant";
import IconButton from "./IconButton";

export default function Card() {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const locked = count >= LIMIT_COUNT;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        setCount((prev) => {
          if (prev < LIMIT_COUNT) return prev + 1;
          return prev;
        });
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count number={count} />
      <ResetButton setCount={setCount} />
      <CountButtons>
        <IconButton type="minus" locked={locked} setCount={setCount} />
        <IconButton type="plus" locked={locked} setCount={setCount} />
      </CountButtons>
    </div>
  );
}
