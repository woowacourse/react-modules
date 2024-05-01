# Hooks Module

## 페이먼츠 커스텀 훅
- 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.
- 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.
- 필수적으로 만들어야 하는 커스텀 훅은 페이먼츠 앱에서 다루었던 카드 정보에 대한 부분이다.
- 아래는 참고 예시이며, 이전 단계에서 만들었던 커스텀 훅의 네이밍을 유지해도 된다.

```
useCardValidation
useCardNumber
useCardHolder
useExpiryDate
useCVC
useCardType
```

- 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다. 
- useCardNumber hook을 만든다면 카드 번호 유효성 검사 결과를 불리언 값으로 반환해야 한다. 
- 만약 유효성 검사에 실패한 경우, 에러 정보를 문자열 형태로 반환할 수 있어야 한다.

```ts
type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};
```
