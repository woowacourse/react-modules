import { useCvc, useExpiration, usePassword, useCardNumber } from '@seo_dev/react-card-hooks';

function App() {
  const { cardNumber, cardCompany, errorState: cardError, handleCardNumberChange } = useCardNumber();
  const { expiration, errorState: expirationError, handleExpirationChange } = useExpiration();
  const { cvc, errorState: cvcError, handleCvcChange } = useCvc();
  const { password, errorState: passwordError, handlePasswordChange } = usePassword();

  return (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      <h2>카드 번호</h2>
      <p>카드사: {cardCompany}</p>
      <input value={cardNumber} onChange={(e) => handleCardNumberChange(e.target.value)} placeholder="카드 번호" />
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
