import "./App.css";
import { useCardValidation } from "./lib";

function App() {
  const { card, cvc, expiry, password, network } = useCardValidation();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.onCardNumberChange(e);
    network.onChange(e);
  };

  return (
    <div className="App">
      <h1>카드 정보 입력</h1>
      <div className="card-form">
        <div className="input-group">
          <label htmlFor="cardNumber">카드 번호</label>
          <input
            id="cardNumber"
            type="text"
            value={card.cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
          />
          {card.errorMessage && <p className="error">{card.errorMessage}</p>}
          {network.cardNetwork !== "DEFAULT" && (
            <p className="card-network">{network.cardNetwork}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="text"
            value={cvc.CVCNumber}
            onChange={cvc.onCVCNumberChange}
            placeholder="123"
          />
          {cvc.errorMessage && <p className="error">{cvc.errorMessage}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="expiry">유효기간</label>
          <input
            id="expiry"
            type="text"
            value={expiry.expiryDateNumber}
            onChange={expiry.onExpiryDateNumberChange}
            placeholder="MM/YY"
          />
          {expiry.errorMessage && (
            <p className="error">{expiry.errorMessage}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password.passwordNumber}
            onChange={password.onPasswordNumberChange}
            placeholder="비밀번호 앞 2자리"
          />
          {password.errorMessage && (
            <p className="error">{password.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
