## 세오의 React CARD HOOKS 라이브러리

신용카드 결제 정보를 쉽게 입력하고 검증할 수 있도록 돕는 React용 커스텀 훅 모음입니다.
**CVC, 카드번호, 만료일, 비밀번호 입력 필드 유효성 검사 및 상태 관리**를 자동으로 처리해줍니다.

## 제공 훅 목록

| Hook              | 기능                                              |
| ----------------- | ------------------------------------------------- |
| `useCardNumber()` | 카드 번호 입력 상태 및 유효성 검사 및 카드사 검사 |
| `useCvc()`        | CVC 입력 상태 및 유효성 검사 (3자리 숫자)         |
| `useExpiration()` | 만료월/년 입력 상태 및 유효성 검사                |
| `usePassword()`   | 카드 비밀번호 앞 2자리 입력 상태 및 유효성 검사   |

---

## 설치

```
npm install @seo_dev/react-card-hooks
# 또는
yarn add @seo_dev/react-card-hooks
```

---

## 사용 예시

```tsx
import { useCardNumber, useCvc, useExpiration, usePassword } from '@seo_dev/react-card-hooks';

function CardForm() {
  const { cardNumber, cardCompany, errorState: cardError, handleCardNumberChange } = useCardNumber();
  const { cvc, errorState: cvcError, handleCvcChange } = useCvc();
  const { expiration, errorState: expError, handleExpirationChange } = useExpiration();
  const { password, errorState: pwError, handlePasswordChange } = usePassword();

  return (
    <form>
      <div>
        <p>카드사: {cardCompany}</p>
        <input value={cardNumber} onChange={(e) => handleCardNumberChange(e.target.value)} />
        {cardError.errorMessage && <p>{cardError.errorMessage}</p>}
      </div>

      <div>
        <input value={cvc} onChange={handleCvcChange} />
        {cvcError.errorMessage && <p>{cvcError.errorMessage}</p>}
      </div>

      <div>
        <input value={expiration.month} onChange={(e) => handleExpirationChange(e, 'month')} />
        <input value={expiration.year} onChange={(e) => handleExpirationChange(e, 'year')} />
        {expError.errorMessage && <p>{expError.errorMessage}</p>}
      </div>

      <div>
        <input value={password} onChange={handlePasswordChange} />
        {pwError.errorMessage && <p>{pwError.errorMessage}</p>}
      </div>
    </form>
  );
}
```

---

## 각 훅 상세 설명

### `useCardNumber()`

- 상태 구조: `string`
- 에러 메시지: `'숫자만 입력해주세요.'`
- 각 카드사별 포맷팅 및 카드사 반환

| 카드사       | 조건                                                                                                                              | 예시                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `visa`       | 4로 시작하는 16자리 카드 번호                                                                                                     | 4234 5678 9123 4567 |
| `masterCard` | 51~55로 시작하는 16자리 카드 번호                                                                                                 | 5123 4567 8901 2345 |
| `AMEX`       | 34,37로 시작하는 15자리 카드 번호                                                                                                 | 3412 345678 90123   |
| `Diners`     | 36으로 시작하는 14자리 카드 번호                                                                                                  | 3612 345678 9012    |
| `UnionPay`   | 622126 ~ 622925로 시작하는 16자리 카드 번호<br/>624 ~ 626로 시작하는 16자리 카드 번호<br/>6282 ~ 6288로 시작하는 16자리 카드 번호 | 6241 2345 6789 0123 |

---

### `useCvc()`

- 상태: 단일 문자열
- 3자리 숫자만 허용
- 잘못된 입력 시 에러 메시지 제공

---

### `useExpiration()`

- 상태 구조: `{ month, year }`
- 유효한 월(1~12), 2자리 연도, 현재 이후 날짜인지 검사
- 상세 에러 메시지 제공

---

### `usePassword()`

- 상태: 단일 문자열 (앞 두 자리만 입력)
- 숫자 외 입력 또는 자리 수 부족 시 에러 메시지 제공

---

## 사용 목적

- 프론트엔드에서 결제 페이지 구현 시, 각 입력 필드에 대한 상태관리 및 유효성 검사를 간편하게 처리하고 싶을 때

---

## 라이선스

MIT License

© 2025 jin123457
