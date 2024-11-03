import IconButton from "./IconButton";

export default function CountButtons({ setCount, locked }) {
  return (
    <div className="button-container">
      <IconButton type="minus" locked={locked} setCount={setCount} />
      <IconButton type="plus" locked={locked} setCount={setCount} />
    </div>
  );
}
