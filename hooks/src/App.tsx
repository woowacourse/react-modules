import React from "react";
import {
  useCardCompany,
  useCardCVC,
  useCardExpirationDate,
  useCardNumbers,
  useCardOwner,
  useCardPassword,
} from "soosoo-react-payments-hooks";

// import useCardCompany from "./lib/useCardCompany/useCardCompany";
// import useCardCVC from "./lib/useCardCVC/useCardCVC";
// import useCardExpirationDate from "./lib/useCardExpirationDate/useCardExpirationDate";
// import useCardNumbers from "./lib/useCardNumbers/useCardNumbers";
// import useCardOwner from "./lib/useCardOwner/useCardOwner";
// import useCardPassword from "./lib/useCardPassword/useCardPassword";

function App() {
  const { cardCompany, isCardCompanyValid } = useCardCompany();
  const { cardCVC, isCardCVCValid } = useCardCVC();
  const { month, year, isCardExpirationDateValid } = useCardExpirationDate();
  const { cardNumbers, cardBrand, isCardNumbersValid } = useCardNumbers();
  const { cardOwner, isCardOwnerValid } = useCardOwner();
  const { cardPassword, isCardPasswordValid } = useCardPassword();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          margin: "30px 0",
        }}
      >
        <h1 style={{ fontSize: "30px", marginBottom: "60px" }}>쑤쑤의 눈물겨운 페이먼츠 훅~</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            autoFocus
            style={{
              width: "400px",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "7px 10px",
            }}
            value={cardNumbers.value}
            onBlur={cardNumbers.onBlur}
            onChange={cardNumbers.onChange}
          />
          <label style={{ color: "red" }}>{cardNumbers.error.message}</label>
          <h2 style={{ fontSize: "30px" }}>{cardBrand}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
