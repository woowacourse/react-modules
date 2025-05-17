import './App.css';
import { useCardNumber } from './lib';

function App() {
  const rules = [
    {
      cardBrand: 'CARDBRAND',
      startNumbers: ['0'],
      lengthArray: [4, 4, 4, 4],
      message: '4-4-4-4 형태의 16자리로 입력해주세요',
    },
  ];
  const { onChange, formatted, cardBrand, isError, errorMessage } =
    useCardNumber(rules);
  return (
    <>
      <input
        value={formatted?.join(' ')}
        style={{
          border: `1px solid ${isError ? 'red' : 'black'}`,
          height: '30px',
          fontSize: '20px',
          paddingLeft: '10px',
        }}
        maxLength={19}
        onChange={onChange}
      />
      <p>카드사: {cardBrand}</p>
      {errorMessage ? (
        <span
          style={{
            color: `${isError ? 'red' : 'black'}`,
          }}
        >
          {errorMessage}
        </span>
      ) : null}
    </>
  );
}

export default App;
