# 🧩 hooks module

React 프로젝트에서 결제 폼을 만들 때 사용할 수 있는 커스텀 훅 모음입니다.  
카드 번호, 유효기간, CVC 등 다양한 입력 필드에 대해 **유효성 검사와 상태 관리 기능을 함께 제공합니다.**

## ✨ Features

- 카드 정보 입력 필드별 **상태** 및 **유효성 검증** 일괄 관리
- 카드 브랜드(VISA, MasterCard 등) 자동 감지
- 타입 안전한 TypeScript 기반
- `skipValidation` 옵션 제공으로 유연한 상태 업데이트 가능

---

## 📦 Installation

```bash
npm i @jae-o/hooks-module
```

## 🧪 제공 훅 목록

- useCardNumbers: 카드 번호 입력 (3~4칸) 상태 및 검증
- useExpiryDate: 유효기간 (MM/YY) 입력 및 검증
- useCVC: 카드 CVC 입력 및 검증

## 사용 예시: useCardNumbers

```tsx
import { useCardNumbers } from '@jae-o/hooks-module';

function CardInputForm() {
  const { cardNumbers, validationResults, cardBrand, handleCardNumbersChange } =
    useCardNumbers([
      { name: 'part1', length: 4 },
      { name: 'part2', length: 4 },
      { name: 'part3', length: 4 },
      { name: 'part4', length: 4 },
    ]);

  return (
    <div>
      {(['part1', 'part2', 'part3', 'part4'] as const).map((key) => (
        <input
          key={key}
          value={cardNumbers[key]}
          onChange={(e) => handleCardNumbersChange(key, e.target.value)}
        />
      ))}
      <p>Detected Brand: {cardBrand}</p>
      <p>Error: {validationResults.part1.errorMessage}</p>
    </div>
  );
}
```

## 📘 API Reference

### useCardNumbers

- 카드 번호 입력 필드(3~4칸)의 상태와 유효성 검사, 카드 브랜드 감지를 지원합니다.

| 반환값                         | 타입                                                                                                          | 설명                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `cardNumbers`                  | `Record<필드이름, string>`                                                                                    | 입력된 카드 번호 값들           |
| `validationResults`            | `Record<필드이름, { isValid: boolean; errorMessage: string }>`                                                | 각 필드별 유효성 검사 결과      |
| `cardBrand`                    | `'VISA' \| 'MASTERCARD' \| 'AMEX' \| 'DINERS' \| 'UNIONPAY' \| 'UNKNOWN'`                                     | 카드 브랜드 감지 결과           |
| `handleCardNumbersChange`      | `({ key, value, options }: { key: 필드이름; value: string; options?: { skipValidation?: boolean } }) => void` | 입력 변경 핸들러                |
| `getCardNumberValidationError` | `(key: 필드이름, value: string) => 에러타입 \| null`                                                          | 카드 번호 조각 유효성 검사 함수 |

> 옵션 설명

- skipValidation: true로 설정 시 유효성 오류가 있어도 값을 강제로 업데이트합니다. (자동완성, 서버 데이터 주입 시 유용)

### useExpiryDate

- 카드 유효기간(MM/YY) 입력을 관리하고, 만료 여부도 검증합니다.

| 반환값                         | 타입                                            | 설명                     |
| ------------------------------ | ----------------------------------------------- | ------------------------ |
| `expiryDate`                   | `{ month: string; year: string }`               | 월/연도 입력 값          |
| `validationResults`            | `Record<'month' \| 'year', ValidationResult>`   | 각 필드 유효성 결과      |
| `handleExpiryDateChange`       | `(key, value, options?) => void`                | 월 또는 연도 변경 핸들러 |
| `getExpiryDateValidationError` | `(key, value) => 에러타입 \| null`              | 포맷 검증 함수           |
| `getExpiryDateExpiredError`    | `(key, value, otherFields) => 에러타입 \| null` | 만료 여부 검증 함수      |

### useCVC

- 카드 CVC 입력 필드를 관리합니다.

| 반환값                  | 타입                                         | 설명               |
| ----------------------- | -------------------------------------------- | ------------------ |
| `CVC`                   | `string`                                     | 입력된 CVC 값      |
| `validationResult`      | `{ isValid: boolean; errorMessage: string }` | 유효성 검사 결과   |
| `handleCVCChange`       | `(value, options?) => void`                  | CVC 값 변경 핸들러 |
| `getCVCValidationError` | `(value) => 에러타입 \| null`                | 포맷 검증 함수     |
