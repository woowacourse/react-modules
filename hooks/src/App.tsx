import "./App.css";
import useCardCVC from "./lib/useCardCVC";

function App() {
  const { handleCVCValidate, isValid, errorMessage } = useCardCVC();

  const handleBlur = (e) => {
    handleCVCValidate(e.target.value);
  };

  console.log(isValid, errorMessage);
  return (
    <div>
      {errorMessage}
      <input onBlur={handleBlur}></input>
    </div>
  );
}

export default App;
