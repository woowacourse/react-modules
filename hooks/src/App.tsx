import useCardNumber from './lib/useCardNumber/useCardNumber';

const App = () => {
  const initialCardNumber = '1234567890123456';
  const initialError = '';

  const {
    cardNumber,
    formattedCardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
    cardBrand,
    requiredFields,
    fieldLengthArr,
  } = useCardNumber(initialCardNumber, initialError);

  return (
    <div>
      {Array.from({ length: requiredFields }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          value={formattedCardNumber[idx] || ''}
          onChange={(e) => handleCardNumberChange({ idx, value: e.target.value })}
          maxLength={fieldLengthArr[idx]}
          style={{ marginRight: '10px', padding: '5px', width: '80px' }}
        />
      ))}
      <div style={{ marginTop: '20px' }}>
        <div>
          <strong>카드 번호:</strong> {cardNumber}
        </div>
        <div>
          <strong>카드 타입:</strong> {cardBrand}
        </div>
        <div>
          <strong>포맷팅 된 카드 번호:</strong> {JSON.stringify(formattedCardNumber)}
        </div>
        {cardNumberError.some((error) => error) && (
          <div style={{ color: 'red' }}>
            <strong>오류:</strong> {cardNumberError.find((error) => error)}
          </div>
        )}
        <div>
          <strong>유효한 카드:</strong> {isCardNumberValid() ? 'YES' : 'NO'}
        </div>
      </div>
    </div>
  );
};

export default App;
