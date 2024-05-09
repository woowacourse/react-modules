# Hooks Module

## useInput

사용자가 입력한 값을 상태 관리한다.

- 입력 값은 object이다.
- handleInputChange는 event를 인자로 받아 값을 업데이트 한다.
- updateByNameAndValue는 name과 value를 인자로 받아 값을 업데이트 한다.

# 각 form에 대한 Hook

## useCardBrand

신용카드 카드번호 입력에 따라 카드 브랜드와 카드번호 입력 최댓값을 찾는 커스텀 훅

- props로 cardNumber를 받아 각 카드 브랜드를 조건에 맞춰 찾는다.
- 카드 브랜드가 존재하지 않을 경우 cardBrand는 null이고 maxLength는 16(DefaultMaxCardNumber)이다.
- 카드 브랜드 종류: Visa, MasterCard, AMEX, Diners, UnionPay

## useCardNumber

신용카드 카드번호에 대한 커스텀 훅

- 카드번호는 입력한 값에 따라 카드 브랜드를 찾아, 해당 카드 브랜드에 맞는 입력 최댓값의 숫자만 들어올 수 있다.
- ex) 카드 브랜드가 AMEX일 경우, 입력 최댓값은 15이다.
- 유효한 값이 아닐 경우 에러가 발생한다.

## useCardHolder

신용카드 소유자 이름에 대한 커스텀 훅

- 입력한 카드 소유자 이름은 영어만 들어올 수 있다.
- 유효한 값이 아닐 경우 에러가 발생한다.

## useExpiryDate

신용카드 유효기간에 대한 커스텀 훅
입력한 유효기간이 currentDate 이전일 경우, 에러가 발생한다.

### 월

- 입력 값으로 1~12의 숫자만 들어올 수 있다.
- 입력 값으로 1 또는 01 모두 유효하다.
- 1만 입력 시 01로 바꿔준다.
- 유효한 값이 아닐 경우 에러가 발생한다.

### 년도

- 입력 값으로 2자리 숫자만 들어올 수 있다.
- 유효한 값이 아닐 경우 에러가 발생한다.

## useCVC

신용카드 CVC에 대한 커스텀 훅

- 입력 값으로 3자리 숫자만 들어올 수 있다.
- 유효한 값이 아닐 경우 에러가 발생한다.

## useCardType

신용카드 카드사에 대한 커스텀 훅

- 미리 정의된 카드사만 선택 할 수 있다.
- 유효한 값이 아닐 경우 에러가 발생한다.

## usePassword

신용카드 비밀번호에 대한 커스텀 훅

- 입력 값으로 2자리 숫자만 들어올 수 있다.
- 유효한 값이 아닐 경우 에러가 발생한다.

# 사용예시

```jsx
function Example() {
  const {
    inputValue,
    validationResult,
    cardBrand,
    handleCardNumberChange,
    handleCardNumberBlur,
    handleCardNumberEnter,
    handleCardNumberFocus,
  } = useCardNumber({ cardNumber: "" });

  console.log(validationResult);

  return (
    <>
      <h1>Hooks Modules</h1>
      <p>{cardBrand}</p>
      <input
        type="text"
        name="cardNumber"
        value={inputValue.cardNumber}
        onChange={(e) => handleCardNumberChange(e)}
        onBlur={(e) => handleCardNumberBlur(e)}
        onKeyDown={(e) => handleCardNumberEnter(e)}
        onFocus={(e) => handleCardNumberFocus(e)}
      />
    </p>
  );
}

export default Example;

```
