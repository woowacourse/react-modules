import useCardBrand from "./lib/hooks/CardBrand";
import useCardNumber from "./lib/hooks/CardNumber";

function App() {
  const cardNumber = useCardNumber();
  const { cardBrand, formattedCardNumber, errorState } = useCardBrand(
    cardNumber.value
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <input
        style={{ width: "500px", height: "50px" }}
        placeholder="1"
        type="text"
        value={formattedCardNumber}
        onChange={(e) => {
          cardNumber.onchange(e.target.value);
        }}
      />

      {/* <button disabled={!errorState.isValid}>123</button> */}
    </div>
  );
}

export default App;
