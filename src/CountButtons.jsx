import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  const decreaseCount = () => {
    setCount((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  return (
    <div className="button-container">
      <button className="count-btn" onClick={decreaseCount}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        className="count-btn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
