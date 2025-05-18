# @ohgus/payment-hooks

결제 폼 구현에 필요한 신용카드 입력 관련 상태 관리 및 유효성 검증을 도와주는 React 훅 라이브러리입니다.

## 설치 방법

```bash
npm install @ohgus/payment-hooks
```

## 제공하는 훅

이 라이브러리는 카드 결제에 필요한 다양한 입력 필드를 쉽게 관리할 수 있는 훅들을 제공합니다:

- `useCardNumbers`: 카드 번호 입력과 카드 타입 자동 감지
- `useCardExpireDate`: 카드 유효기간(월/년) 입력 관리
- `useCardCVC`: 카드 CVC 코드 입력 관리
- `useCardPassword`: 카드 비밀번호 입력 관리
- `useCardBrand`: 카드 브랜드 선택 관리

각 훅은 사용자 입력을 검증하고, 오류 메시지를 생성하며, 입력값을 적절한 형식으로 포맷팅합니다.

## useCardNumbers

카드 번호 입력을 관리하고 카드 타입을 자동으로 감지하는 훅입니다.

### 기본 사용법

```tsx
import { useCardNumbers } from '@ohgus/payment-hooks';

function CardForm() {
  const {
    cardNumbers,
    formattedCardNumbers,
    cardType,
    cardNumberMaxLength,
    errorMessage,
    handleCardNumberChange,
    handleCardNumberBlur,
  } = useCardNumbers();

  return (
    <div>
      <label htmlFor="card-number">카드 번호</label>
      <input
        id="card-number"
        type="text"
        value={formattedCardNumbers}
        onChange={handleCardNumberChange}
        onBlur={handleCardNumberBlur}
        maxLength={cardNumberMaxLength}
        placeholder="카드 번호를 입력하세요"
      />
      {cardType && <div>감지된 카드 타입: {cardType}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
```

### 카드 타입 감지 및 포맷팅

이 훅은 사용자가 입력한 카드 번호의 첫 몇 자리를 기반으로 카드 타입(Visa, Master, Amex 등)을 자동으로 감지합니다. 감지된 카드 타입에 따라 적절한 형식으로 카드 번호를 포맷팅합니다.

### 카드 타입 규칙

각 카드 브랜드별로 다음과 같은 규칙이 적용됩니다:

| 카드 타입 | 식별 번호     | 카드 길이 | 포맷 패턴 | 특이사항            |
| --------- | ------------- | --------- | --------- | ------------------- |
| Visa      | 4로 시작      | 16자리    | 4-4-4-4   | -                   |
| Master    | 51-55로 시작  | 16자리    | 4-4-4-4   | -                   |
| Amex      | 34, 37로 시작 | 15자리    | 4-6-5     | -                   |
| Diners    | 36으로 시작   | 14자리    | 4-6-4     | -                   |
| UnionPay  | 62로 시작     | 16자리    | 4-4-4-4   | 추가 검증 로직 있음 |

예를 들어, 사용자가 "4111"이라는 숫자를 입력하면 Visa 카드로 인식되고, "3415"라는 숫자를 입력하면 Amex 카드로 인식됩니다. 각 카드 타입에 맞는 길이 제한과 포맷이 자동으로 적용됩니다.

### 반환값

- `cardNumbers`: 원본 카드 번호 (공백 없이)
- `formattedCardNumbers`: 카드 타입에 맞게 포맷팅된 카드 번호 (예: "4111-2222-3333-4444")
- `cardType`: 감지된 카드 타입 (Visa, Master, Amex, Diners, UnionPay 중 하나 또는 null)
- `cardNumberMaxLength`: 현재 카드 타입의 최대 길이
- `errorMessage`: 유효성 검증 오류 메시지 (없으면 null)
- `handleCardNumberChange`: 카드 번호 입력 필드의 onChange 이벤트 핸들러
- `handleCardNumberBlur`: 카드 번호 입력 필드의 onBlur 이벤트 핸들러

### 검증 규칙

이 훅은 다음 사항을 검증합니다:

- 숫자만 입력 가능
- 카드 타입별 지정된 길이 충족 여부
- 입력이 완료되었는지 여부 (onBlur 시)

## useCardExpireDate

카드 유효기간(월/년) 입력을 관리하는 훅입니다.

### 기본 사용법

```tsx
import { useCardExpireDate } from '@ohgus/payment-hooks';

function ExpireDateInput() {
  const {
    expireDate,
    errorMessage,
    isValid,
    handleExpireDateChange,
    handleExpireDateBlur,
  } = useCardExpireDate();

  return (
    <div>
      <div>
        <label htmlFor="month">월</label>
        <input
          id="month"
          type="text"
          value={expireDate.month}
          onChange={(e) => handleExpireDateChange(e, 'month')}
          onBlur={(e) => handleExpireDateBlur(e, 'month')}
          maxLength={2}
          placeholder="MM"
        />
      </div>
      <div>
        <label htmlFor="year">년</label>
        <input
          id="year"
          type="text"
          value={expireDate.year}
          onChange={(e) => handleExpireDateChange(e, 'year')}
          onBlur={(e) => handleExpireDateBlur(e, 'year')}
          maxLength={2}
          placeholder="YY"
        />
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
```

### 반환값

- `expireDate`: 입력된 유효기간 객체 `{ month: string; year: string }`
- `errorMessage`: 유효성 검증 오류 메시지 (없으면 null)
- `isValid`: 각 필드의 유효성 상태 객체 `{ month: boolean; year: boolean }`
- `handleExpireDateChange`: 유효기간 입력 필드의 onChange 이벤트 핸들러
- `handleExpireDateBlur`: 유효기간 입력 필드의 onBlur 이벤트 핸들러

### 검증 규칙

이 훅은 다음 사항을 검증합니다:

- 숫자만 입력 가능
- 월은 1~12 사이의 값
- 년도는 현재 년도부터 향후 5년 이내
- 현재 년도인 경우 월이 현재 월보다 같거나 커야 함
- 각 필드는 2자리를 초과할 수 없음

## useCardCVC

카드 CVC(보안코드) 입력을 관리하는 훅입니다.

### 기본 사용법

```tsx
import { useCardCVC } from '@ohgus/payment-hooks';

function CVCInput() {
  const { cvc, errorMessage, handleCvcChange, handleCvcBlur } = useCardCVC();

  return (
    <div>
      <label htmlFor="cvc">보안코드(CVC)</label>
      <input
        id="cvc"
        type="text"
        value={cvc}
        onChange={handleCvcChange}
        onBlur={handleCvcBlur}
        maxLength={3}
        placeholder="CVC"
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
```

### 반환값

- `cvc`: 입력된 CVC 값
- `errorMessage`: 유효성 검증 오류 메시지 (없으면 null)
- `handleCvcChange`: CVC 입력 필드의 onChange 이벤트 핸들러
- `handleCvcBlur`: CVC 입력 필드의 onBlur 이벤트 핸들러

### 검증 규칙

이 훅은 다음 사항을 검증합니다:

- 숫자만 입력 가능
- 3자리 숫자여야 함

## useCardBrand

카드 브랜드 선택을 관리하는 훅입니다.

### 기본 사용법

```tsx
import { useCardBrand } from '@ohgus/payment-hooks';

function CardBrandSelect() {
  const cardBrands = ['신한', '국민', '우리', '하나', '롯데'];
  const { cardBrand, errorMessage, handleBrandSelect } =
    useCardBrand(cardBrands);

  return (
    <div>
      <label htmlFor="card-brand">카드 브랜드</label>
      <select
        id="card-brand"
        value={cardBrand || ''}
        onChange={handleBrandSelect}
      >
        <option value="" disabled>
          카드사를 선택하세요
        </option>
        {cardBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
```

### 입력값

- `cardBrands`: 선택 가능한 카드 브랜드 배열

### 반환값

- `cardBrand`: 선택된 카드 브랜드 (없으면 null)
- `errorMessage`: 유효성 검증 오류 메시지 (없으면 null)
- `handleBrandSelect`: 카드 브랜드 선택 필드의 onChange 이벤트 핸들러

### 검증 규칙

이 훅은 다음 사항을 검증합니다:

- 선택된 브랜드가 제공된 카드 브랜드 목록에 존재하는지 여부

## useCardPassword

카드 비밀번호 앞 2자리 입력을 관리하는 훅입니다.

### 기본 사용법

```tsx
import { useCardPassword } from '@ohgus/payment-hooks';

function PasswordInput() {
  const { password, errorMessage, handlePasswordChange, handlePasswordBlur } =
    useCardPassword();

  return (
    <div>
      <label htmlFor="password">비밀번호 앞 2자리</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        maxLength={2}
        placeholder="**"
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
```

### 반환값

- `password`: 입력된 비밀번호 값
- `errorMessage`: 유효성 검증 오류 메시지 (없으면 null)
- `handlePasswordChange`: 비밀번호 입력 필드의 onChange 이벤트 핸들러
- `handlePasswordBlur`: 비밀번호 입력 필드의 onBlur 이벤트 핸들러

### 검증 규칙

이 훅은 다음 사항을 검증합니다:

- 숫자만 입력 가능
- 2자리 숫자여야 함

## 전체 폼 사용 예시

다음은 모든 훅을 조합하여 완전한 카드 결제 폼을 구현하는 예시입니다:

```tsx
import {
  useCardNumbers,
  useCardExpireDate,
  useCardCVC,
  useCardBrand,
  useCardPassword,
} from '@ohgus/payment-hooks';

function PaymentForm() {
  const {
    cardNumbers,
    formattedCardNumbers,
    cardType,
    errorMessage: cardNumberError,
    handleCardNumberChange,
    handleCardNumberBlur,
  } = useCardNumbers();

  const {
    expireDate,
    errorMessage: expireDateError,
    handleExpireDateChange,
    handleExpireDateBlur,
  } = useCardExpireDate();

  const {
    cvc,
    errorMessage: cvcError,
    handleCvcChange,
    handleCvcBlur,
  } = useCardCVC();

  const cardBrands = ['신한', '국민', '우리', '하나', '롯데'];
  const {
    cardBrand,
    errorMessage: brandError,
    handleBrandSelect,
  } = useCardBrand(cardBrands);

  const {
    password,
    errorMessage: passwordError,
    handlePasswordChange,
    handlePasswordBlur,
  } = useCardPassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직...
    console.log({
      cardNumbers,
      cardType,
      expireDate,
      cvc,
      cardBrand,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>카드 정보 입력</h2>

      {/* 카드 번호 */}
      <div>
        <label>카드 번호</label>
        <input
          value={formattedCardNumbers}
          onChange={handleCardNumberChange}
          onBlur={handleCardNumberBlur}
          placeholder="카드 번호를 입력하세요"
        />
        {cardType && <div>카드 타입: {cardType}</div>}
        {cardNumberError && <div className="error">{cardNumberError}</div>}
      </div>

      {/* 카드 유효기간 */}
      <div>
        <label>유효기간</label>
        <div>
          <input
            value={expireDate.month}
            onChange={(e) => handleExpireDateChange(e, 'month')}
            onBlur={(e) => handleExpireDateBlur(e, 'month')}
            placeholder="MM"
            maxLength={2}
          />
          /
          <input
            value={expireDate.year}
            onChange={(e) => handleExpireDateChange(e, 'year')}
            onBlur={(e) => handleExpireDateBlur(e, 'year')}
            placeholder="YY"
            maxLength={2}
          />
        </div>
        {expireDateError && <div className="error">{expireDateError}</div>}
      </div>

      {/* CVC */}
      <div>
        <label>보안코드(CVC)</label>
        <input
          value={cvc}
          onChange={handleCvcChange}
          onBlur={handleCvcBlur}
          placeholder="CVC"
          maxLength={3}
        />
        {cvcError && <div className="error">{cvcError}</div>}
      </div>

      {/* 카드 브랜드 */}
      <div>
        <label>카드사 선택</label>
        <select value={cardBrand || ''} onChange={handleBrandSelect}>
          <option value="" disabled>
            선택하세요
          </option>
          {cardBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        {brandError && <div className="error">{brandError}</div>}
      </div>

      {/* 카드 비밀번호 */}
      <div>
        <label>비밀번호 앞 2자리</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          placeholder="**"
          maxLength={2}
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>

      <button type="submit">결제하기</button>
    </form>
  );
}
```
