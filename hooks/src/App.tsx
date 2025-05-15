import './App.css';
import Input from './Input';
import InputField from './InputField';
import { useCardNumbers, useCVC } from './lib';
import useExpiryDate from './lib/expiryDate/useExpiryDate';

function App() {
  const cardNumbersResult = useCardNumbers();
  const expiryDateResult = useExpiryDate();
  const cvcResult = useCVC();

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
        <InputField
          feedbackMessage={
            expiryDateResult.validationResults.month.errorMessage
          }
          title="카드 유효기간을 입력해 주세요."
          description="월/년도(MM/YY)를 순서대로 입력해 주세요."
          label="유효기간"
        >
          <Input
            type="text"
            name="month"
            value={expiryDateResult.expiryDate.month}
            handleInputChange={expiryDateResult.handleExpiryDateChange}
            isValidInput={expiryDateResult.validationResults.month.isValid}
          />
          <Input
            type="text"
            name="year"
            value={expiryDateResult.expiryDate.year}
            handleInputChange={expiryDateResult.handleExpiryDateChange}
            isValidInput={expiryDateResult.validationResults.year.isValid}
          />
        </InputField>
        <InputField
          feedbackMessage={cvcResult.validationResult.errorMessage}
          title="CVC 번호를 입력해 주세요."
          label="CVC"
        >
          <Input
            type="text"
            name="cardCVC"
            value={cvcResult.CVC}
            handleInputChange={cvcResult.handleCVCChange}
            isValidInput={cvcResult.validationResult.isValid}
          />
        </InputField>
      </div>
    </section>
  );
}

export default App;
