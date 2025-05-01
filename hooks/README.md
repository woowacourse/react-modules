# 🧩 hooks module

React 프로젝트에서 결제 폼을 만들 때 사용할 수 있는 커스텀 훅 모음입니다.  
카드 번호, 유효기간, CVC 등 다양한 입력 필드에 대해 **유효성 검사와 상태 관리 기능을 함께 제공합니다.**

## ✨ Features

- 카드 정보 입력 필드의 상태 & 유효성 검증 관리
- 컴포넌트와 분리된 로직 구조로 재사용성과 테스트 용이성 향상
- 타입 안전한 TypeScript 기반
- `validateCardNumbers`, `restrictChange` 등 유연한 API

---

## 📦 Installation

```bash
npm i @jae-o/hooks-module
```

## 🧪 제공 훅 목록

- useCardNumbers: 카드 번호 4칸 입력 상태 및 유효성 관리
- useExpiryDate: 유효기간 (MM/YY) 입력 및 검증
- useCVC: 카드 CVC 입력 및 검증

## 사용 예시: useCardNumbers

```tsx
import { useCardNumbers } from '@jae-o/hooks-module';

function CardInputForm() {
  const { cardNumbers, validationResults, handleCardNumbersChange } =
    useCardNumbers();

  return (
    <div>
      {(['part1', 'part2', 'part3', 'part4'] as const).map((key) => (
        <input
          key={key}
          name={key}
          value={cardNumbers[key]}
          onChange={(e) => handleCardNumbersChange(e, false)}
        />
      ))}
      <p>{validationResults.part1.errorMessage}</p>
    </div>
  );
}
```

## 📘 API Reference

### useCardNumbers

> 반환값

| 이름                      | 타입                                                                       | 설명                       |
| ------------------------- | -------------------------------------------------------------------------- | -------------------------- |
| `cardNumbers`             | `Record<'part1' \| 'part2' \| 'part3' \| 'part4', string>`                 | 각 4자리 카드 번호 상태    |
| `validationResults`       | `Record<CardNumbersKey, { isValid: boolean; errorMessage: string }>`       | 각 필드의 유효성 결과      |
| `handleCardNumbersChange` | `(event: ChangeEvent<HTMLInputElement>, restrictChange?: boolean) => void` | 입력 및 유효성 검증 핸들러 |
| `validateCardNumbers`     | `(value: string) => string \| null`                                        | 숫자 여부, 길이 검증 수행  |

> 옵션 설명

- restrictChange: 기본값 true. false로 설정하면 유효하지 않아도 상태 변경을 허용하며, 유효성 결과가 갱신됨.
