# 📦 페이먼츠 커스텀 훅

### install

```
npm install nakta-react-payments-hooks
```

## useCardNumbers

### props

- `initialValue`: 카드번호 초기값

### return

- `value`: 카드번호가 포맷팅된 형태 제공
- `number`: 포맷팅되지 않은 숫자형태의 카드번호
- `brand`: 카드 브랜드(visa, mastercard, diners, amex, unionpay) 상태값
- `isValid`: 카드 번호 입력 유효성 상태값
- `onChange`: 각 입력 값에 대한 `onChange` 이벤트 핸들러. `event`와 `index`를 인자로 받습니다.
- `onBlur`: 각 입력 값에 대한 `onBlur` 이벤트 핸들러. `event`와 `index`를 인자로 받습니다.

### 사용 예시

```tsx
function App() {
  const cardNumber = useCardNumber();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        style={{ border: `1px solid ${cardNumber.error.state ? 'red' : 'black'}`, outline: 'none' }}
        type='text'
        value={cardNumber.value}
        onChange={cardNumber.onChange}
        onBlur={cardNumber.onBlur}
      />

      <p>
        <span>{cardNumber.number}</span>
      </p>
      {cardNumber.error.state && <span style={{ color: 'red' }}>{cardNumber.error.message}</span>}
      {cardNumber.brand !== '' && <span style={{ color: 'purple' }}>{cardNumber.brand}</span>}
      {cardNumber.isValid && <span style={{ color: 'blue' }}>유효한 번호</span>}
    </>
  );
}
```

## useCardCardCompany

### props

- `initialValue`: 카드사 상태 초기값 설정

### return

- `value`: 카드사 상태값
- `isValid`: 카드사 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: `onChange` 이벤트 핸들러
- `onBlur`: `onBlur` 이벤트 핸들러

### 사용 예시

```tsx
function App() {
  const cardCompany = useCardCompany();

  return (
    <>
      <h1>Hooks Modules</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input readOnly onBlur={cardCompany.onBlur} style={{ border: '3px solid black', padding: '4px' }} value={cardCompany.value} />

        <label htmlFor='BC카드'>BC카드</label>
        <input hidden onChange={cardCompany.onChange} id='BC카드' type='radio' value='BC카드' name='cardcompany' />

        <label htmlFor='국민카드'>국민카드</label>
        <input hidden onChange={cardCompany.onChange} id='국민카드' type='radio' value='국민카드' name='cardcompany' />

        <label htmlFor='카카오뱅크'>카카오뱅크</label>
        <input hidden onChange={cardCompany.onChange} id='카카오뱅크' type='radio' value='카카오뱅크' name='cardcompany' />

        <label htmlFor='신한카드'>신한카드</label>
        <input hidden onChange={cardCompany.onChange} id='신한카드' type='radio' value='신한카드' name='cardcompany' />
      </div>
      <p style={{ color: 'red' }}>{cardCompany.error.message}</p>
      {cardCompany.isValid && <p style={{ color: 'purple' }}>유효한 입력</p>}
    </>
  );
}
```

## useCardExpirationDate

### props

- `initialValue`: 월, 년도 상태 객체 초기값 설정
  - month: 월 입력
  - year: 년도 입력

### return

- `month`: 월 입력 상태
  - value
  - error
  - isValid
  - onChange
  - onBlur
- `year`: 년도 입력 상태
  - value
  - error
  - isValid
  - onChange
  - onBlur
- `expirationDateError`: 월, 년도 입력 유효성 상태값(유효기간 만료 여부)
- `isExpirationDateValid`: 각 입력값 유효성 상태값
- `expirationDateErrorMessage`: 에러 메시지

### 사용 예시

```tsx
function App() {
  const { month, year, expirationDateErrorMessage, isExpirationDateValid } = useCardExpirationDate({ month: '', year: '' });

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        style={{ border: `1px solid ${month.error.state ? 'red' : 'black'}` }}
        maxLength={2}
        type='text'
        value={month.value}
        onChange={month.onChange}
        onBlur={month.onBlur}
      />
      <input
        style={{ border: `1px solid ${year.error.state ? 'red' : 'black'}` }}
        maxLength={2}
        type='text'
        value={year.value}
        onChange={year.onChange}
        onBlur={year.onBlur}
      />
      <span>{month.value}</span>
      <span>{year.value}</span>
      {expirationDateErrorMessage && <p style={{ color: 'red' }}>{expirationDateErrorMessage}</p>}
      {isExpirationDateValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
    </>
  );
}
```

## useCardOwner

### props

- `initialValue`: 카드 소유자 상태 초기값 설정

### return

- `value`: 카드 소유자 상태값
- `isValid`: 카드 소유자 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: `onChange` 이벤트 핸들러
- `onBlur`: `onBlur` 이벤트 핸들러

### 사용 예시

```tsx
function App() {
  const cardOwner = useCardOwner();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        style={{ border: `1px solid ${cardOwner.error.state ? 'red' : 'black'}` }}
        type='text'
        value={cardOwner.value.toUpperCase()}
        onChange={cardOwner.onChange}
        onBlur={cardOwner.onBlur}
      />
      <span>{cardOwner.value.toUpperCase()}</span>
      {cardOwner.error.state && <p style={{ color: 'red' }}>{cardOwner.error.message}</p>}
      {cardOwner.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
    </>
  );
}
```

## useCardCVC

### props

- `initialValue`: CVC번호 상태 초기값 설정

### return

- `value` : CVC번호 상태값
- `isValid`: CVC번호 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: onChange 이벤트 핸들러
- `onBlur`: onBlur 이벤트 핸들러

### 사용 예시

```tsx
function App() {
  const cardCVC = useCardCVC();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        style={{ border: `1px solid ${cardCVC.error.state ? 'red' : 'black'}` }}
        type='text'
        maxLength={3}
        value={cardCVC.value}
        onChange={cardCVC.onChange}
        onBlur={cardCVC.onBlur}
      />
      <span>{cardCVC.value.toUpperCase()}</span>
      {cardCVC.error.state && <p style={{ color: 'red' }}>{cardCVC.error.message}</p>}
      {cardCVC.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
    </>
  );
}
```

## usePassword

### props

- `initialValue`: 비밀번호 상태 초기값 설정

### return

- `value`: 비밀번호 상태값
- `isValid`: 비밀번호 입력 유효성 상태값
- `error`: 에러 상태값
- `onChange`: onChange 이벤트 핸들러
- `onBlur`: onBlur 이벤트 핸들러

### 사용 예시

```tsx
function App() {
  const cardPassword = useCardPassword();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        style={{ border: `1px solid ${cardPassword.error.state ? 'red' : 'black'}` }}
        type='text'
        maxLength={2}
        value={cardPassword.value}
        onChange={cardPassword.onChange}
        onBlur={cardPassword.onBlur}
      />
      <span>{cardPassword.value.toUpperCase()}</span>
      {cardPassword.error.state && <p style={{ color: 'red' }}>{cardPassword.error.message}</p>}
      {cardPassword.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
    </>
  );
}
```
