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
  const { onChange, formatted, cardBrand, isError, errorMessage } =
    useCardNumber();

  return (
    <>
      <input
        value={formatted?.join(' ')}
        style={{
          border: `1px solid ${isError ? 'red' : 'black'}`,
          height: '30px',
          fontSize: '20px',
          paddingLeft: '10px',
        }}
        maxLength={19}
        onChange={onChange}
      />
      <p>카드사: {cardBrand}</p>
      {errorMessage ? (
        <span
          style={{
            color: `${isError ? 'red' : 'black'}`,
          }}
        >
          {errorMessage}
        </span>
      ) : null}
    </>
  );
}
```

### 구성 요소

카드브랜드별 규칙인 rules를 받을 수 있습니다.

| 이름    | 타입   | 필수 | 설명                        |
| ------- | ------ | ---- | --------------------------- |
| `rules` | `Rule` | ❌   | `카드브랜드별 규칙인 rules` |

```
type Rule = {
  cardBrand?: 'Visa' | 'MasterCard' | 'Diners' | 'AMEX' | 'UnionPay' | string;
  startNumbers: string[];
  lengthArray: number[];
  message: string;
};
```

- `cardBrand`: 카드 브랜드
- `startNumbers`: 특정 카드 브랜드일때 시작하는 숫자 배열
- `lengthArray`: 글자 수 형식(ex. 4-4-4-4인 형식은 [4,4,4,4])
- `message`: 해당 카드 브랜드의 검증을 통과하지 못하면 표시되는 에러메시지

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
