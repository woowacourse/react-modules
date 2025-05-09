# Hooks

## 기능 요구사항

- [x] utils/isPositiveInteger
- [x] utils/isLengthEqual

```javascript
const ERROR_MESSAGE = {
  INVALID_NUMBER: '숫자만 입력 가능합니다.',
  INVALID_MONTH: '유효한 월(MM)의 범위를 입력해주세요.(01~12)',
  generateInvalidLengthMsg: (number: number) => `${number}자리를 입력해주세요.`,
  generateInvalidYearMsg: (year: number) =>
    `유효한 연도(YY)를 입력해주세요.(${year}년 이상)`,
  generateInvalidBetweenMsg: (min: number, max: number) =>
    `${min}자리 이상 ${max}자리 이내로 입력해주세요.`,
};
```

- [x] useCardNumber
- [x] useExpirationDate
- [x] useCvc
- [x] usePassword

## 테스트 RTL

- [x] useCardNumber
- [x] useExpirationDate
- [x] useCvc
- [x] usePassword

## 카드사 식별

```
Visa: 4로 시작하는 16자리 숫자

MasterCard: 51~55로 시작하는 16자리 숫자

Diners: 36으로 시작하는 14자리 숫자
예시: 3612 345678 9012

AMEX: 34, 37로 시작하는 15자리 숫자
예시 (34로 시작): 3412 345678 90123
예시 (37로 시작): 3712 345678 90123

유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
622126~622925로 시작하는 경우: 6221 2612 3456 7890
624~626로 시작하는 경우: 6240 1234 5678 9012
6282~6288로 시작하는 경우: 6282 1234 5678 9012
```

- [ ] 카드사 식별 로직 구현 useCardBrand
- [ ] 카드 번호 포멧팅 기능 적용
