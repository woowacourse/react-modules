import './App.css';

import {
  useCardBrand,
  useCardCVC,
  useCardExpireDate,
  useCardPassword,
  useCardNumbers
} from '@ohgus/payment-hooks';

function App() {
  const {
    cvc,
    errorMessage: cvcErrorMessage,
    handleCvcChange,
    handleCvcBlur
  } = useCardCVC();

  const { errorMessage: brandErrorMessage, handleBrandSelect } = useCardBrand([
    '신한카드',
    '국민카드',
    '농협카드'
  ]);

  const {
    expireDate,
    errorMessage: expireDateErrorMessage,
    handleExpireDateChange,
    handleExpireDateBlur
  } = useCardExpireDate();

  const {
    password,
    errorMessage: passwordErrorMessage,
    handlePasswordChange,
    handlePasswordBlur
  } = useCardPassword();

  const {
    cardNumbers,
    formattedCardNumbers,
    cardType,
    cardNumberMaxLength,
    errorMessage: cardNumberErrorMessage,
    handleCardNumberChange,
    handleCardNumberBlur
  } = useCardNumbers();

  return (
    <div>
      <h1>Hooks Modules</h1>
      <div>
        <h2>카드 브랜드</h2>
        <select name="cardBrand" onChange={handleBrandSelect}>
          <option value="">카드 브랜드 선택</option>
          <option value="신한카드">신한카드</option>
          <option value="국민카드">국민카드</option>
          <option value="농협카드">농협카드</option>
        </select>
      </div>
      <div>
        <h2>CVC</h2>
        <input
          id="cvc"
          type="text"
          maxLength={3}
          value={cvc}
          onChange={handleCvcChange}
          onBlur={handleCvcBlur}
        />
        {cvcErrorMessage && <p>{cvcErrorMessage}</p>}
      </div>
      <div>
        <h2>만료일</h2>
        <label htmlFor="month">만료월</label>
        <input
          id="month"
          type="text"
          maxLength={2}
          value={expireDate.month}
          onChange={(e) => handleExpireDateChange(e, 'month')}
          onBlur={(e) => handleExpireDateBlur(e, 'month')}
        />
        <label htmlFor="year">만료년</label>
        <input
          id="year"
          type="text"
          maxLength={2}
          value={expireDate.year}
          onChange={(e) => handleExpireDateChange(e, 'year')}
          onBlur={(e) => handleExpireDateBlur(e, 'year')}
        />
        {expireDateErrorMessage && <p>{expireDateErrorMessage}</p>}
      </div>
      <div>
        <h2>비밀번호</h2>
        <input
          type="password"
          value={password}
          maxLength={2}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
      </div>
      <div>
        <h2>카드 번호</h2>
        <input
          type="text"
          value={cardNumbers}
          maxLength={cardNumberMaxLength}
          onChange={handleCardNumberChange}
          onBlur={handleCardNumberBlur}
        />
        <p>카드 타입: {cardType}</p>
        <p>카드 번호: {formattedCardNumbers}</p>
        {cardNumberErrorMessage && <p>{cardNumberErrorMessage}</p>}
      </div>
    </div>
  );
}

export default App;
