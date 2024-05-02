# ryan-card-info-hooks

## 간단한 설명

`ryan-card-info-hooks`은 카드 정보와 관련된 입력값의 유효성 검증을 위한 hook을 모아둔 패키지입니다. 이 패키지는 카드 번호, 소유자 이름, 발급사, 보안 코드 등의 정보를 다루며, 각 입력값에 대한 유효성을 확인할 수 있습니다.

## 설치 방법

```bash
npm install ryan-card-info-hooks
```

## 사용 예시

아래는 `ryan-card-info-hooks` 패키지를 사용하는 간단한 예시입니다.

```jsx
import {
  useCardholderName,
  useCardIssuer,
  useCardNumber,
  useCVC,
  useExpiryDate,
  usePasswordPrefix,
} from "ryan-card-info-hooks";

const MyComponent = () => {
  const { cardholderName, setCardholderName, errorStatus: nameError } = useCardholderName();
  const { cardIssuer, setCardIssuer, errorStatus: issuerError } = useCardIssuer();
  const { cardNumber, setCardNumber, errorStatus: cardNumberErrors } = useCardNumber();
  const { cvc, setCVC, errorStatus: cvcError } = useCVC();
  const {
    expiryMonth,
    setExpiryMonth,
    expiryMonthErrorStatus,
    expiryYear,
    setExpiryYear,
    expiryYearErrorStatus,
  } = useExpiryDate();
  const { passwordPrefix, setPasswordPrefix, errorStatus: prefixError } = usePasswordPrefix();

  // 실제 컴포넌트에서 각 hook을 사용하여 카드 정보를 입력받고,
  // 유효성 검증 결과에 따라 에러 메시지를 표시하거나 다른 동작을 수행할 수 있습니다.

  return <div>{/* 각 입력 필드 및 에러 메시지를 표시하는 JSX */}</div>;
};
```

## hook 설명

- `useCardholderName`: 카드 소유자 이름을 관리하는 hook입니다. cardholderName 상태와 setCardholderName 함수를 통해 값을 설정하고, errorStatus를 통해 유효성 검증 결과를 확인할 수 있습니다.
- `useCardIssuer`: 카드 발급사를 관리하는 hook입니다. cardIssuer 상태와 setCardIssuer 함수를 통해 값을 설정하고, errorStatus를 통해 유효성 검증 결과를 확인할 수 있습니다.
- `useCardNumber`: 카드 번호를 관리하는 hook입니다. cardNumber 배열 상태와 setCardNumber 함수를 통해 값을 설정하고, 각 입력란의 errorStatus 배열을 통해 유효성 검증 결과를 확인할 수 있습니다.
- `useCVC`: 카드 보안 코드를 관리하는 hook입니다. cvc 상태와 setCVC 함수를 통해 값을 설정하고, errorStatus를 통해 유효성 검증 결과를 확인할 수 있습니다.
- `useExpiryDate`: 카드 만료 날짜를 관리하는 hook입니다. expiryMonth와 expiryYear 상태, 각각 setExpiryMonth와 setExpiryYear 함수를 통해 값을 설정하고, 유효성 검증 결과를 확인할 수 있습니다.
- `usePasswordPrefix`: 카드 비밀번호 앞 두 자리를 관리하는 hook입니다. passwordPrefix 상태와 setPasswordPrefix 함수를 통해 값을 설정하고, errorStatus를 통해 유효성 검증 결과를 확인할 수 있습니다.

## 개발 및 기여

이 패키지는 [GitHub 저장소](https://github.com/Parkhanyoung/react-modules/tree/main)에서 관리되고 있습니다. 기여를 환영합니다!

## 라이센스

이 패키지는 MIT 라이센스 하에 배포됩니다.
