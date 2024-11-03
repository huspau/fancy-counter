export default function Count({ number }) {
  return (
    <>
      <CountTitle />
      <p>{number}</p>
    </>
  );
}

function CountTitle() {
  return <h2>Current Count is:</h2>;
}
