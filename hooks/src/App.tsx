import './App.css';
import { useCvcInput } from '@eunoia-jaxson/card-field-hooks';

function App() {
  const { cvc, handleCvcChange, cvcError } = useCvcInput();

  return (
    <div>
      <label htmlFor="cvc">cvc</label>
      <input
        type="text"
        name="cvc"
        value={cvc}
        onChange={(e) => handleCvcChange(e.target.value)}
        maxLength={3}
        placeholder="cvc 번호를 입력해주세요."
      />
      <p>{cvcError}</p>
    </div>
  );
}

export default App;
