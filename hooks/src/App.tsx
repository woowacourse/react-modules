import "./App.css";
import { useCardNumber, useCvcNumber, useExpirationDate, usePassword } from "./lib";

function App() {
  const cardNumber = useCardNumber(" - ");
  const expirationDate = useExpirationDate(" / ");
  const cvcNumber = useCvcNumber();
  const password = usePassword();

  const cardInformation = {
    카드번호: cardNumber,
    유효기간: expirationDate,
    cvc: cvcNumber,
    비밀번호: password,
  };

  return (
    <main>
      <h2 className="cardType">카드 타입: {cardNumber.cardType}</h2>
      {Object.entries(cardInformation).map(([label, field]) => (
        <div key={label} className="form-group">
          <label className="form-label">{label}</label>
          <input
            className={`form-input ${field.error && "form-input-error"}`}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
          <p className="form-error-message">{field.errorMessage}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
