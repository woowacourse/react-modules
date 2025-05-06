# 🧩 React Card Validation Hooks

- 신용카드 정보를 입력받을 때 사용할 수 있는 커스텀 훅 모음입니다.  
   각 훅은 **CVC**, **카드 번호**, **유효기간(MM/YY)**에 대한 유효성 검사 기능을 제공합니다.
  ⚠️ 이 훅들은 우아한테크코스 과정에서 개인 학습 목적으로 제작되었습니다.

---

## 🔧 포함된 훅

- **`useCardCVC`**  
  카드의 CVC 번호 입력값(3자리 숫자)에 대한 유효성 검사를 제공합니다.  
  숫자만 입력되었는지, 정확히 3자리인지 검사하며, 오류 메시지도 함께 반환됩니다.

- **`useCardNumber`**  
  카드 번호를 4칸으로 나누어 입력할 때 사용할 수 있는 훅입니다.  
  각 칸이 숫자 4자리인지 확인하고, 개별 유효성 상태와 전체 에러 메시지를 제공합니다.

- **`useExpirationDate`**  
  MM/YY 형식의 카드 유효기간을 검사하는 훅입니다.  
  월은 01~12 사이의 2자리 숫자, 연도는 2자리 숫자인지 각각 검증하며, 필드별 유효 상태를 제공합니다.

## 📦 설치

```bash
npm install @your-namespace/card-validation-hooks
# or
yarn add @your-namespace/card-validation-hooks
```
