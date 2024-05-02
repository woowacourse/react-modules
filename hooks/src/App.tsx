import React from "react";
import {
  useCardCompany,
  useCardCVC,
  useCardExpirationDate,
  useCardNumbers,
  useCardOwner,
  useCardPassword,
} from "soosoo-react-payments-hooks";

function App() {
  const { cardCompany, isCardCompanyValid } = useCardCompany();
  const { cardCVC, isCardCVCValid } = useCardCVC();
  const { month, year, isCardExpirationDateValid } = useCardExpirationDate();
  const { cardNumbers, cardBrand, isCardNumbersValid } = useCardNumbers();
  const { cardOwner, isCardOwnerValid } = useCardOwner();
  const { cardPassword, isCardPasswordValid } = useCardPassword();

  return (
    <>
      <h1>Soosoo Hooks Modules</h1>
    </>
  );
}

export default App;
