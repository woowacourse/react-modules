import { useCardNumbers } from '../lib';

export default function CardNumbers() {
  const { numbers, handleChange, handleBlur, errorMessage, error } = useCardNumbers({
    validationErrors: {
      empty: '카드 번호를 입력해주세요.',
      number: '숫자만 사용 가능해요.',
      length: '4개 숫자를 써주세요.',
    },
  });

  return (
    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <input
          maxLength={4}
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
