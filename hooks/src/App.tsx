import './App.css';
import Input from './Input';
import InputField from './InputField';
import { useCardNumbers } from './lib';

function App() {
  const cardNumbersResult = useCardNumbers();
  return (
    <section className="section">
      <div className="sectionContainer">
        <InputField
          feedbackMessage={cardNumbersResult.validationResults.errorMessage}
          title="결제할 카드 번호를 입력해주세요."
          description="본인 명의의 카드만 결제 가능합니다."
          label={`
            카드 번호${
              cardNumbersResult.network !== ''
                ? ` (${cardNumbersResult.network})`
                : ''
            }`}
        >
          <Input
            type="text"
            name="cardNumber"
            value={cardNumbersResult.cardNumberFormatter(
              cardNumbersResult.cardNumbers
            )}
            handleInputChange={(e) =>
              cardNumbersResult.handleCardNumbersChange(e, false)
            }
            isValidInput={cardNumbersResult.validationResults.isValid}
          />
        </InputField>
      </div>
    </section>
  );
}

export default App;
