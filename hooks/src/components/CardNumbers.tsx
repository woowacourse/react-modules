import { useCardNumbers } from '../lib';

export default function CardNumbers() {
  const { cardNumbers, handleChange, handleBlur, errorMessage } = useCardNumbers<HTMLInputElement>({
    initialValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    validations: {
      onChange: {
        number: '숫자만 사용 가능해요.',
      },
      onBlur: {
        empty: '카드 번호를 입력해주세요.',
        length: '4개 숫자를 써주세요.',
      },
    },
  });

  return (
    <div>
      {Object.keys(cardNumbers).map((name) => (
        <input
          key={name}
          maxLength={4}
          name={`${name}`}
          value={cardNumbers[name]}
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}
      <div>오류:{errorMessage}</div>
    </div>
  );
}
