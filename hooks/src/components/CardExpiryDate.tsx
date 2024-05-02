import useExpiryDate from '../lib/useExpiryDate';

export default function CardExpiryDate() {
  const { expiryDate, handleChange, handleBlur, errorMessage, error } = useExpiryDate({
    validationErrors: {
      empty: '정보를 입력해 주세요.',
      number: '숫자를 입력해 주세요.',
      year: '유효하지 않은 연도입니다.',
      month: '유효하지 않은 달입니다.',
      date: '유효기간이 만료된 카드는 등록할 수 없습니다.',
    },
  });
  return (
    <div>
      <input
        maxLength={2}
        name={`${error.month}`}
        value={expiryDate.month}
        type="text"
        onChange={(e) => handleChange(e, 'month')}
        onBlur={(e) => handleBlur(e, 'month')}
      />
      <input
        value={expiryDate.year}
        maxLength={2}
        name={`${error.year}`}
        type="text"
        onChange={(e) => handleChange(e, 'year')}
        onBlur={(e) => handleBlur(e, 'year')}
      />
      <div>오류:{errorMessage}</div>
    </div>
  );
}
