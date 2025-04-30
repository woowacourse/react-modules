import "./App.css";
import useCvcNumber from "./lib/useCvcNumber";

function App() {
  const { cvc, error, validate } = useCvcNumber();

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value);
  };

  return (
    <>
      <h1>Hooks Modules</h1>
      <input type="text" value={cvc} onChange={handleCVC} maxLength={3} />
      <p>{error.errorMessage}</p>
    </>
  );
}

export default App;
