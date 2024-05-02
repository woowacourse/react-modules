import { useCardNumbers, useCardExpirationDate, useCardCompany, useCardOwner, useCardCVC, useCardPassword } from 'nakta-react-payments-hooks';
import React from 'react';

function App() {
  const { cardNumbers, cardBrand, isCardNumbersValid } = useCardNumbers();
  const { cardCompany, isCardCompanyValid } = useCardCompany();
  const { month, year, isCardExpirationDateValid } = useCardExpirationDate();
  const { cardOwner, isCardOwnerValid } = useCardOwner();
  const { cardCVC, isCardCVCValid } = useCardCVC();
  const { cardPassword, isCardPasswordValid } = useCardPassword();

  return (
    <>
      <h1>Hooks Modules</h1>
    </>
  );
}

export default App;
