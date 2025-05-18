# @dev-dino22/payments-hooks

카드 결제 관련 입력 필드를 쉽게 구현할 수 있도록 도와주는 커스텀 훅 모음입니다.

사용자는 카드 번호, 유효 기간, 카드사 선택, CVC, 비밀번호 입력 시  
**상태 관리**와 **에러 판별**, **에러 메시지 처리**를 손쉽게 할 수 있습니다.

## 📦 Install

```js
npm install @dev-dino22/payments-hooks
```

---

## ✨ 제공 훅 목록

- `useCardNumbersInput` – 카드 번호 입력 관리 및 브랜드/유효성 체크
- `useCardExpDateInput` – 유효 기간 (월/년) 입력 관리
- `useCardCompanyInput` – 카드사 선택값 관리
- `useCardCVCInput` – CVC 입력 관리
- `useCardPasswordInput` – 비밀번호 입력 관리

---

## 🔧 공통 반환값

각 훅은 다음과 같은 공통 값을 반환합니다:

| 반환값                         | 설명                                             |
| ------------------------------ | ------------------------------------------------ |
| `onChangeHandler`              | 입력 이벤트 핸들러                               |
| `에러 메시지` (`errorMessage`) | 유효성 검증 실패 시 보여줄 메시지                |
| `입력값 상태`                  | 입력된 실제 값 (예: `cardNumbers`, `cardCVC` 등) |

---

## 🪪 License

MIT
