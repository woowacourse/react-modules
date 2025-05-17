# 💳 React Card Form Hooks

React에서 **신용카드 결제 폼**을 쉽고 안전하게 구현할 수 있도록 도와주는 **커스텀 훅 컬렉션**입니다.  
입력값에 따른 상태 관리, 카드사 자동 감지, 유효성 검사를 모두 내부에서 처리하여 **UI 개발에만 집중**할 수 있도록 돕습니다.

---

## ✨ 주요 기능

- 카드 번호 자동 포맷팅 (카드사별 구분)
- 카드사 자동 감지 (Visa, MasterCard, AMEX, Diners, UnionPay 등)
- 입력 상태 및 유효성 검사 자동 관리
- UX에 최적화된 단순 API (`onChange`, `value`, `errorMessage`)

---

## 📦 설치

```bash
npm install react-card-form-hooks
# 또는
yarn add react-card-form-hooks
```

## 🪄 제공 훅 목록

| Hook              | 설명                                           |
| ----------------- | ---------------------------------------------- |
| `useCardNumber()` | 카드 번호 입력 상태, 카드사 감지, 포맷팅, 검증 |
| `useCvc()`        | CVC(보안코드) 3자리 숫자 입력 및 유효성 검사   |
| `useExpiration()` | MM/YY 유효기간 입력 및 월 범위/만료일 검사     |
| `usePassword()`   | 카드 비밀번호 앞 2자리 입력 및 유효성 검사     |

---

## 🧪 사용 예시

```tsx
import { useCardNumber, useCvc, useExpiration, usePassword } from 'react-card-form-hooks';

function CardForm() {
  const { value: cardNumber, company, errorState: cardError, handleChange: handleCardNumberChange } = useCardNumber();

  const { value: cvc, errorState: cvcError, handleChange: handleCvcChange } = useCvc();

  const { expiration, errorState: expirationError, handleExpirationChange } = useExpiration();

  const { value: password, errorState: passwordError, handleChange: handlePasswordChange } = usePassword();

  return (
    <form>
      <h3>카드 번호</h3>
      <input value={cardNumber} onChange={(e) => handleCardNumberChange(e.target.value)} />
      {company && <p>카드사: {company}</p>}
      {cardError.errorMessage && <p style={{ color: 'red' }}>{cardError.errorMessage}</p>}

      <h3>유효기간</h3>
      <input value={expiration.month} onChange={(e) => handleExpirationChange(e, 'month')} placeholder="MM" />
      <input value={expiration.year} onChange={(e) => handleExpirationChange(e, 'year')} placeholder="YY" />
      {expirationError.errorMessage && <p style={{ color: 'red' }}>{expirationError.errorMessage}</p>}

      <h3>CVC</h3>
      <input value={cvc} onChange={(e) => handleCvcChange(e.target.value)} placeholder="CVC" />
      {cvcError.errorMessage && <p style={{ color: 'red' }}>{cvcError.errorMessage}</p>}

      <h3>비밀번호 앞 2자리</h3>
      <input value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
      {passwordError.errorMessage && <p style={{ color: 'red' }}>{passwordError.errorMessage}</p>}
    </form>
  );
}
```

---

## 💳 카드사 자동 감지 및 포맷팅

| 카드사     | 시작 숫자              | 자리 수 | 예시                  |
| ---------- | ---------------------- | ------- | --------------------- |
| Visa       | 4                      | 16자리  | `4111-1111-1111-1111` |
| MasterCard | 51\~55                 | 16자리  | `5243-1234-5678-9012` |
| AMEX       | 34, 37                 | 15자리  | `3412-345678-90123`   |
| Diners     | 36                     | 14자리  | `3612-345678-9012`    |
| UnionPay   | 622126~622925, 624~626 | 16자리  | `6221-2612-3456-7890` |

---

## 🔍 각 훅 상세 설명

### `useCardNumber()`

- 상태: `cardNumber: string`, `company: CardCompany`
- 자동 포맷팅 및 카드사 감지
- 유효성 검사: 숫자 여부, 길이 검사
- 반환값:

  - `value`: 포맷된 카드 번호
  - `company`: 카드사 (Visa, AMEX, Diners 등)
  - `errorState`: `{ errorState: boolean, errorMessage: string }`
  - `handleChange`: 입력 핸들러

---

### `useCvc()`

- 3자리 숫자만 허용
- 유효하지 않으면 `숫자만 입력해주세요`, `3자리 숫자를 입력해주세요` 등 반환

---

### `useExpiration()`

- 상태: `{ month: string, year: string }`
- 유효성: MM 형식, YY 형식, 미래 날짜인지 검사
- 만료된 카드에 대한 메시지 제공

---

### `usePassword()`

- 앞 두 자리만 입력 가능
- 숫자가 아니거나 2자리가 아닐 경우 에러 메시지 출력

---

## ✅ 사용 목적

- 결제 페이지나 카드 정보 입력 UI를 빠르게 만들고 싶은 경우
- 반복적인 유효성 검사 및 포맷 로직을 제거하고 싶을 때
- UX 향상(자동 포맷, 카드사 감지 등)을 위한 최적의 구조 제공

---

## 📄 라이선스

MIT License
© 2025 youdame
