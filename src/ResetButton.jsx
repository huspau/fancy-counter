import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton(props) {
  const { reset } = props;
  return (
    <button className="reset-btn" onClick={reset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
