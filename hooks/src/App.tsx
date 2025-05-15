import "./App.css";
import { useCardNumber, useCvcNumber, useExpirationDate, usePassword } from "./lib";
import parseCardNumber from "./lib/utils/ParseCardNumber";

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

  const chunks = parseCardNumber(cardNumber.value, [4, 4, 4, 4]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;

    const chunks = parseCardNumber(cardNumber.value, [4, 4, 4, 4]);
    chunks[index] = newValue;

    const merged = chunks.join("");
    cardNumber.onChange(merged);
  };

  return (
    <main>
      <input value={chunks[0]} onChange={(e) => handleChange(e, 0)} />
      <input value={chunks[1]} onChange={(e) => handleChange(e, 1)} />
      <input value={chunks[2]} onChange={(e) => handleChange(e, 2)} />
      <input value={chunks[3]} onChange={(e) => handleChange(e, 3)} />

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
