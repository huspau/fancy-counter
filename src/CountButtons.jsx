export default function CountButtons(props) {
  const {increment, decrement} = props;
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
