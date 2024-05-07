import useCardNumbers from './lib/useCardNumbers.ts';
import './App.css';

function App() {
  const { value, cardBrand, formatValue, onChange, onBlur, errorMessage } =
    useCardNumbers();
  return (
    <>
      <h1>Hooks Modules</h1>
      <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      <p>
        {cardBrand} {formatValue}
      </p>
      <p>{errorMessage}</p>
    </>
  );
}

export default App;
