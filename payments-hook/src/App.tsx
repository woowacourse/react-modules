import './App.css';
import useFormattedCardNumbers from './useFormattedCardNumbers/useFormattedCardNumbers';
function App() {
  const {
    formattedCardNumbers,
    handleFormattedCardNumbersChange,
    isError,
    errorMessage,
  } = useFormattedCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        value={formattedCardNumbers}
        onChange={handleFormattedCardNumbersChange}
      />

      {isError && (
        <div className="error-message">
          {Object.values(errorMessage).map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
