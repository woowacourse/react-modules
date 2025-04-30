import "./App.css";
// import useCvcNumber from "./lib/useCvcNumber";
import usePassword from "./lib/usePassword";

function App() {
  const { password, error, validate } = usePassword();

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value);
  };

  return (
    <>
      <h1>Hooks Modules</h1>
      <input type="text" value={password} onChange={handlePassword} />
      <p>{error.errorMessage}</p>
    </>
  );
}

export default App;
