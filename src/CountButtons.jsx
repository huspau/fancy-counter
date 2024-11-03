import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons(props) {
  const { increment, decrement } = props;
  return (
    <div className="button-container">
      <button className="count-btn" onClick={decrement}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={increment}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
