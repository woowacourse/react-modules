# 페이먼츠 커스텀 훅

# lume_hooks

React 기반의 **카드 결제 정보 유효성 검증을 위한 커스텀 훅 모음 라이브러리**입니다.  
카드 번호, 비밀번호, CVC, 유효기간, 카드사 등 다양한 항목에 대한 입력값 검증과 상태 관리를 제공합니다.

---

## 🛠 설치

```bash
npm install lume_hooks
# 또는
yarn add lume_hooks
```

> **Peer dependencies**
>
> * `react` (`^18.0.0 || ^19.0.0`)
> * `react-dom`

---

## 🚀 사용 예시

```tsx
import {
  useCardNumber,
  useCardExpiryPeriod,
  useCardCVC,
  useCardPassword,
  useCardCompany,
} from 'lume_hooks';

function PaymentForm() {
  const { cardNumber, handleCardNumberChange } = useCardNumber();
  const { expiry, handleExpiryChange } = useCardExpiryPeriod();

  return (
    <form>
      <input
        name="cardNumber"
        value={cardNumber.first || ''}
        onChange={handleCardNumberChange}
      />
      <input
        name="expiry"
        value={expiry.month || ''}
        onChange={handleExpiryChange}
      />
    </form>
  );
}
```

---

## 📘 제공 훅 목록

| 훅 이름                  | 설명                     |
| --------------------- | ---------------------- |
| `useCardNumber`       | 카드 번호 4칸 입력 및 유효성 관리   |
| `useCardExpiryPeriod` | 카드 유효기간(월/년) 입력 관리     |
| `useCardCVC`          | CVC 번호 입력 및 숫자 제한      |
| `useCardPassword`     | 카드 비밀번호 앞 2자리 입력       |
| `useCardCompany`      | 카드 BIN 번호를 기반으로 카드사 판별 |

---

## 🔎 유틸 함수

| 함수 이름          | 설명                  |
| -------------- | ------------------- |
| `isOnlyDigits` | 숫자로만 구성되어 있는지 여부 확인 |

---

## ✅ 특징

* 각 입력 필드별로 분리된 커스텀 훅 → 관심사의 분리
* 타입스크립트 기반 안전한 타입 제공
* 간단한 API, 유효성 상태와 값 상태를 함께 반환
