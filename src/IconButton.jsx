import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function IconButton({ type, locked, setCount }) {
  const countLogic = () => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else if (type === "minus") {
      setCount((prev) => {
        if (prev > 0) return prev - 1;
        return prev;
      });
    }
  };

  return (
    <button onClick={countLogic} className="count-btn" disabled={locked}>
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
    </button>
  );
}
