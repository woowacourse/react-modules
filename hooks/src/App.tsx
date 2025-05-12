import useCardBrand from "./lib/hooks/CardBrand";
import useCardNumber from "./lib/hooks/CardNumber";

function App() {
  const cardNumber = useCardNumber();
  const cardBrand = useCardBrand(cardNumber.value);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <input
        style={{ width: "500px", height: "50px" }}
        placeholder="1"
        type="text"
        value={cardBrand.formattedValue}
        onChange={(e) => {
          cardNumber.onChange(e.target.value);
        }}
      />

      {/* <button disabled={!errorState.isValid}>123</button> */}
    </div>
  );
}

export default App;
