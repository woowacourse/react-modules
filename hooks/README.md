# 📦 @kimyouk/modal-components

`@kimyouk/payments-validation` 는 카드 정보 입력(카드번호, cvc번호, 비밀번호 등)에 대한 다양한 검증을 위한 React 커스텀 훅 모음입니다.

## 설치

```
npm install @kimyouk/payments-validation
# 또는
yarn add @kimyouk/payments-validation
```

## 사용 예시

### 카드 번호 입력 필드 관리 - `useCardNumber`

```
function CardNumberInput() {
  const { cardNumber, isError, errorMessage, onChange } = useCardNumber();

  return (
    <>
      <input
        value={cardNumber[0]}
        style={{ border: `1px solid ${isError[0] ? 'red' : 'black'}` }}
        maxLength={4}
        onChange={(e) => onChange(e, 0)}
      />
      <input
        value={cardNumber[1]}
        style={{ border: `1px solid ${isError[1] ? 'red' : 'black'}` }}
        maxLength={4}
        onChange={(e) => onChange(e, 1)}
      />
      <input
        value={cardNumber[2]}
        style={{ border: `1px solid ${isError[2] ? 'red' : 'black'}` }}
        maxLength={4}
        onChange={(e) => onChange(e, 2)}
      />
      <input
        value={cardNumber[3]}
        style={{ border: `1px solid ${isError[3] ? 'red' : 'black'}` }}
        maxLength={4}
        onChange={(e) => onChange(e, 3)}
      />
      {errorMessage ? <span>${errorMessage}</span> : null}
    </>
  );
}
```

### 카드 유효기간 입력 필드 관리 - `useExpirationPeriod`

```
function CardExpiryInput() {
  const {
    expirationPeriod,
    isExpirationPeriodError,
    errorMessage,
    onChangeExpirationPeriod,
  } = useExpirationPeriod();

  return (
    <div>
      <label>유효기간 (MM / YY)</label>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          value={expirationPeriod.month}
          maxLength={2}
          style={{
            width: '3em',
            border: `1px solid ${isExpirationPeriodError.month ? 'red' : 'black'}`,
            padding: '4px',
          }}
          onChange={(e) => onChangeExpirationPeriod(e, 'month')}
          placeholder="MM"
        />
        <span>/</span>
        <input
          type="text"
          value={expirationPeriod.year}
          maxLength={2}
          style={{
            width: '3em',
            border: `1px solid ${isExpirationPeriodError.year ? 'red' : 'black'}`,
            padding: '4px',
          }}
          onChange={(e) => onChangeExpirationPeriod(e, 'year')}
          placeholder="YY"
        />
      </div>
      {errorMessage && (
        <span style={{ color: 'red', marginTop: '4px', display: 'block' }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
```

### 카드 cvc번호 입력 필드 관리 - `useCardCVC`

```
function CardCVCInput() {
  const { cardCVC, isCardCVCError, errorMessage, onChangeCVC } = useCardCVC();

  return (
    <div>
      <label htmlFor="cvc">CVC 코드</label>
      <input
        id="cvc"
        type="text"
        value={cardCVC}
        maxLength={3}
        style={{
          border: `1px solid ${isCardCVCError ? 'red' : 'black'}`,
          padding: '4px',
        }}
        onChange={onChangeCVC}
        placeholder="123"
      />
      {errorMessage && (
        <span style={{ color: 'red', marginLeft: '8px' }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default CardCVCInput;
```

### 카드 비밀번호 입력 필드 관리 - `useCardPassword`

```
function CardPasswordInput() {
  const {
    cardPassword,
    isCardPasswordError,
    errorMessage,
    onChangeCardPassword,
  } = useCardPassword();

  return (
    <div>
      <label htmlFor="password">카드 비밀번호 앞 2자리</label>
      <input
        id="password"
        type="password"
        value={cardPassword}
        maxLength={2}
        style={{
          border: `1px solid ${isCardPasswordError ? 'red' : 'black'}`,
          padding: '4px',
        }}
        onChange={onChangeCardPassword}
        placeholder="••"
      />
      {errorMessage && (
        <span style={{ color: 'red', marginLeft: '8px' }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
```

### 📝 라이선스

@kimyou1102 @ha-kuku
