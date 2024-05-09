import useCardNumbers from '@/lib/useCardNumbers.ts';
import useExpiryDate from '@/lib/useExpiryDate.ts';
import './App.css';

function App() {
  const { value, cardBrand, formatValue, onChange, onBlur, errorMessage } =
    useCardNumbers();

  const {
    values: { month, year },
    onChange: onChangeExpiryDate,
    onBlur: onBlurExpiryDate,
    errorMessages,
  } = useExpiryDate({
    month: '',
    year: '',
  });
  return (
    <>
      <h1>Hooks Modules</h1>
      <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      <p>
        {cardBrand} {formatValue}
      </p>
      <p>{errorMessage}</p>

      <label>expiryDate</label>
      <input
        value={month}
        onChange={onChangeExpiryDate}
        onBlur={onBlurExpiryDate}
        name="month"
      />

      <div>{errorMessages && errorMessages.month}</div>
      <input
        value={year}
        onChange={onChangeExpiryDate}
        onBlur={onBlurExpiryDate}
        name="year"
      />
      <div>{errorMessages && errorMessages.year}</div>
    </>
  );
}

export default App;
