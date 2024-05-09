# ryan-card-info-hooks

## 간단한 설명

`ryan-card-info-hooks`은 카드 정보 관련 입력값의 유효성 검증을 위한 hook을 모아둔 패키지입니다. 이 패키지는 카드 번호, 소유자 이름, 발급사, 보안 코드 등의 정보를 다룰 수 있는 이벤트 핸들러와 각 입력값에 대한 유효성 검증 결과를 반환합니다.

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
  const { value: cardholderName, onChange, onBlur, errorStatus: nameError } = useCardholderName();
  const { value: cardIssuer, onChange, onBlur, errorStatus: issuerError } = useCardIssuer();
  const { value: cardNumber, onChange, onBlur, errorStatus: cardNumberError } = useCardNumber();
  const { value: cvc, onChange, onBlur, errorStatus: cvcError } = useCVC();
  const {
    month: { value: month },
    year: { value: year },
  } = useExpiryDate();
  const { passwordPrefix, setPasswordPrefix, errorStatus: prefixError } = usePasswordPrefix();

  // 실제 컴포넌트에서 각 hook을 사용하여 카드 정보를 입력받고,
  // 유효성 검증 결과에 따라 에러 메시지를 표시하거나 다른 동작을 수행할 수 있습니다.

  return <div>{/* 각 입력 필드 및 에러 메시지를 표시하는 JSX */}</div>;
};
```

## hook 설명

- `useCardholderName`: 카드 소유자 이름을 관리하는 hook입니다.
- `useCardIssuer`: 카드 발급사를 관리하는 hook입니다.
- `useCardNumber`: 카드 번호를 관리하는 hook입니다.
- `useCVC`: 카드 보안 코드를 관리하는 hook입니다.
- `useExpiryDate`: 카드 만료 날짜를 관리하는 hook입니다.
- `usePasswordPrefix`: 카드 비밀번호 앞 두 자리를 관리하는 hook입니다.

## 반환 인터페이스

```ts
interface UseCardholderNameReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface UseCardIssuerReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export interface UseCardNumberReturn {
  value: {
    raw: string;
    formatted: string[];
  };
  errorStatus: IErrorStatus;
  cardBrand: CardBrand;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface UseCVCReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface UseExpiryDateReturn {
  month: {
    value: string;
    errorStatus: IErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  year: {
    value: string;
    errorStatus: IErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
}

interface UsePasswordPrefixReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
```

## 개발 및 기여

이 패키지는 [GitHub 저장소](https://github.com/Parkhanyoung/react-modules)에서 관리되고 있습니다. 기여를 환영합니다!

## 라이센스

이 패키지는 MIT 라이센스 하에 배포됩니다.
