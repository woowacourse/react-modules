import { useCardNumber, useCvc, useExpiration, usePassword } from '@seo_dev/react-card-hooks';
import { useEffect } from 'react';

function App() {
  const { cardNumber, errorState: cardError, handleCardNumberChange } = useCardNumber();
  const { expiration, errorState: expirationError, handleExpirationChange } = useExpiration();
  const { cvc, errorState: cvcError, handleCvcChange } = useCvc();
  const { password, errorState: passwordError, handlePasswordChange } = usePassword();

  useEffect(() => {
    console.log('Card Number Valid:', !cardError.errorState);
    console.log('Expiration Valid:', !expirationError.errorState);
    console.log('CVC Valid:', !cvcError.errorState);
    console.log('Password Valid:', !passwordError.errorState);
  }, [cardError, expirationError, cvcError, passwordError]);

  return (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      <h2>카드 번호</h2>
      <input value={cardNumber.first} onChange={(e) => handleCardNumberChange(e, 'first')} placeholder="첫 번째 4자리" />
      <input value={cardNumber.second} onChange={(e) => handleCardNumberChange(e, 'second')} placeholder="두 번째 4자리" />
      <input value={cardNumber.third} onChange={(e) => handleCardNumberChange(e, 'third')} placeholder="세 번째 4자리" />
      <input value={cardNumber.fourth} onChange={(e) => handleCardNumberChange(e, 'fourth')} placeholder="네 번째 4자리" />
      <p style={{ color: 'red' }}>{cardError.errorMessage}</p>

      <h2>유효기간</h2>
      <input value={expiration.month} onChange={(e) => handleExpirationChange(e, 'month')} placeholder="MM" />
      <input value={expiration.year} onChange={(e) => handleExpirationChange(e, 'year')} placeholder="YY" />
      <p style={{ color: 'red' }}>{expirationError.errorMessage}</p>

      <h2>CVC</h2>
      <input value={cvc} onChange={(e) => handleCvcChange(e)} placeholder="CVC" />
      <p style={{ color: 'red' }}>{cvcError.errorMessage}</p>

      <h2>비밀번호 앞 두 자리</h2>
      <input value={password} onChange={(e) => handlePasswordChange(e)} placeholder="비밀번호 앞 2자리" />
      <p style={{ color: 'red' }}>{passwordError.errorMessage}</p>
    </div>
  );
}

export default App;
