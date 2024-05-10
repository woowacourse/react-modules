import useCardNumber from "./useCardNumber";

function UseCardNumberTestComponent() {
  const {
    inputValue,
    validationResult,
    cardBrand,
    handleCardNumberChange,
    handleCardNumberBlur,
    handleCardNumberEnter,
    handleCardNumberFocus,
  } = useCardNumber({ cardNumber: "" });

  return (
    <>
      <h1>useCardNumber</h1>
      <p>카드 브랜드: {cardBrand}</p>
      <input
        type="text"
        name="cardNumber"
        value={inputValue.cardNumber}
        onChange={handleCardNumberChange}
        onBlur={handleCardNumberBlur}
        onKeyDown={handleCardNumberEnter}
        onFocus={handleCardNumberFocus}
      />
      <p>에러 메세지: {validationResult.errorMessage}</p>
    </>
  );
}

export default UseCardNumberTestComponent;
