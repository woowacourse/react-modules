import { useCardNumbers } from '../lib';

const useCardNumbersProps = {
  validationErrorMessages: {
    empty: '카드 번호를 입력해주세요.',
    number: '숫자만 사용 가능해요.',
    length: '4개 숫자를 써주세요.',
  },
  validations: {
    cardNumberLength: [4, 3, 4, 4],
  },
};

export default function CardNumbers() {
  const { numbers, handleChange, handleBlur, errorMessage, error } = useCardNumbers(useCardNumbersProps);

  return (
    <div>
      {Array.from({ length: 4 }, (_, index) => (index === 1 ? 3 : 4)).map((value, index) => (
        <input
          maxLength={value}
          name={`${error[index]}`}
          value={numbers[index]}
          type="text"
          onChange={(e) => handleChange(e, index)}
          onBlur={(e) => handleBlur(e, index)}
        />
      ))}

      <div>오류:{errorMessage}</div>
    </div>
  );
}
