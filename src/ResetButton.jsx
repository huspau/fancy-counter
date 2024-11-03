import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const resetLogic = (e) => {
    setCount(0);
    e.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={resetLogic}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
