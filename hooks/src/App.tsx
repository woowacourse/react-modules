import { useCardNumberInput, useExpiryDateInput, useSingleInput } from "./lib";
import { CARD_INPUT } from "./lib/hooks/constants/cardValidationInfo";
import { useCardBrand } from "./lib/hooks/useCardBrand/useCardBrand";

const App = () => {
  const {
    cardNumberState,
    errorMessage: cardError,
    handleInputChange: handleCardInputChange,
  } = useCardNumberInput();

  const {
    expiryDateState,
    errorMessage: expiryError,
    handleInputChange: handleExpiryInputChange,
  } = useExpiryDateInput();

  const {
    singleState: cvcState,
    errorMessage: cvcError,
    handleInputChange: handleCVCInputChange,
  } = useSingleInput(CARD_INPUT.MAX_LENGTH.CVC);

  const cardNumberSegments = cardNumberState.map((segment) => segment.value);
  const cardBrand = useCardBrand(cardNumberSegments);

  return (
    <div>
      <div>
        <h2>Card Number</h2>
        {cardNumberState.map((input, index) => (
          <input
            key={index}
            maxLength={CARD_INPUT.MAX_LENGTH.CARD}
            value={input.value}
            onChange={(e) => handleCardInputChange(e, index)}
            style={{
              borderColor: input.isValid ? "black" : "red",
              marginRight: "8px",
            }}
          />
        ))}
        {!cardNumberState.every((input) => input.isValid) && (
          <p style={{ color: "red" }}>{cardError}</p>
        )}
      </div>
      <div>
        <h2>Expiry Date (MM / YY)</h2>
        {expiryDateState.map((input, index) => (
          <input
            key={index}
            type="text"
            maxLength={CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}
            value={input.value}
            onChange={(e) => handleExpiryInputChange(e, index)}
            style={{
              borderColor: input.isValid ? "black" : "red",
              marginRight: "8px",
            }}
            placeholder={index === 0 ? "MM" : "YY"}
          />
        ))}
        {!expiryDateState.every((input) => input.isValid) && (
          <p style={{ color: "red" }}>{expiryError}</p>
        )}
      </div>
      <div>
        <h2>CVC</h2>
        <input
          type="text"
          maxLength={CARD_INPUT.MAX_LENGTH.CVC}
          value={cvcState.value}
          onChange={handleCVCInputChange}
          style={{
            borderColor: cvcState.isValid ? "black" : "red",
          }}
        />
        {!cvcState.isValid && <p style={{ color: "red" }}>{cvcError}</p>}
      </div>
      <p>카드 브랜드: {cardBrand ?? "브랜드 없음"}</p>
    </div>
  );
};

export default App;
