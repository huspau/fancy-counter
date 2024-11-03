import { LIMIT_COUNT } from "./Constant";

export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>PRO</b> for &gt;{LIMIT_COUNT}
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
