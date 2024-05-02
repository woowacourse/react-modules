import "./App.css";

import {
  useCardBrand,
  useCardCVC,
  useCardExpiryDate,
  useCardNumbers,
} from "@cys4585/card-validation";

import React from "react";

const cardBrands = ["신한카드", "현대카드", "카카오뱅크"];

function App() {
  const { CVC, validationResult, handleUpdateCVC } = useCardCVC("");
  const {
    expiryDate,
    validationResult: expiryDateValidationResult,
    handleUpdateExpiryDate,
  } = useCardExpiryDate({
    month: "",
    year: "",
  });
  const {
    brand,
    validationResult: brandValidationResult,
    handleUpdateBrand,
  } = useCardBrand("", cardBrands);
  const {
    cardNumbers,
    validationResult: cardNumbersValidationResult,
    validStates,
    handleUpdateCardNumbers,
  } = useCardNumbers(["", "", "", ""]);

  const handleChangeCardBrand = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleUpdateBrand(event.target.value);
  };

  return (
    <>
      <h1>Hooks Modules</h1>
      <section>
        <h2>useCVC</h2>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCVC(event.target.value)
          }
        />
        <p>CVC: {CVC}</p>
        <p>isValid: {validationResult.isValid.toString()}</p>
        <p>errorMessage: {validationResult.errorMessage}</p>
      </section>

      <section>
        <h2>useExpiryDate</h2>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateExpiryDate({
              month: event.target.value,
              year: expiryDate.year,
            })
          }
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateExpiryDate({
              month: expiryDate.month,
              year: event.target.value,
            })
          }
        />
        <p>
          ExpiryDate: {expiryDate.month} / {expiryDate.year}
        </p>
        <p>isValid: {expiryDateValidationResult.isValid.toString()}</p>
        <p>errorMessage: {expiryDateValidationResult.errorMessage}</p>
      </section>

      <section>
        <h2>useCardBrand</h2>
        <select onChange={handleChangeCardBrand}>
          {cardBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <p>brand: {brand}</p>
        <p>isValid: {brandValidationResult.isValid.toString()}</p>
        <p>errorMessage: {brandValidationResult.errorMessage}</p>
      </section>

      <section>
        <h2>useCardNumbers</h2>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCardNumbers(0, event.target.value)
          }
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCardNumbers(1, event.target.value)
          }
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCardNumbers(2, event.target.value)
          }
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCardNumbers(3, event.target.value)
          }
        />

        <p>cardNumbers: {cardNumbers.join(", ")}</p>
        <p>validStates: {validStates.join(", ")}</p>
        <p>isValid: {cardNumbersValidationResult.isValid.toString()}</p>
        <p>errorMessage: {cardNumbersValidationResult.errorMessage}</p>
      </section>
    </>
  );
}

export default App;
