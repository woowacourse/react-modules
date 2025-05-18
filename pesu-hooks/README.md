# Pesu Hooks

카드 결제 입력 폼 등에서 사용할 수 있는 입력 관리 및 검증용 커스텀 훅들이 모여 있습니다.  
각 훅은 입력값 상태, 유효성 검사, 포맷팅, 에러 메시지 관리 등 실무에 바로 쓸 수 있는 기능을 제공합니다.

---

## 주요 특징

- 입력값 상태 관리: 각 입력 필드별 value, setValue, isValid, error 등 상태 제공
- 자동 포맷팅 및 유효성 검사: 카드 번호, 만료일, CVC, 비밀번호 등 실시간 검증 및 포맷팅
- 핸들러 제공: input의 onChange, onBlur에 바로 연결 가능한 핸들러 제공
- 폼 전체 관리: useForm을 통한 폼 단위의 상태 및 유효성 관리

---

## 폴더 구조

- **useCardNumber/**  
  카드 번호 입력 및 검증 훅

- **useExpirationDate/**  
  카드 만료일(MM/YY) 입력 및 검증 훅

- **useCVCNumber/**  
  CVC(카드 뒷면 3~4자리) 입력 및 검증 훅

- **usePassword/**  
  카드 비밀번호(앞 2자리) 입력 및 검증 훅

- **useForm/**  
  폼 전체의 입력 상태 및 유효성 관리 훅

- **index.ts**  
  각 훅을 한 번에 export하는 엔트리 파일

---

## 예시 코드

```tsx
import { useCardNumber, useExpirationDate, useCVCNumber, usePassword } from 'pesu-hooks';
import { useForm } from '@/hooks'; // 프로젝트별 커스텀 useForm 사용 가능

function CardRegisterForm() {
  // 1. 카드 번호
  const { cardNumber, cardNumberErrors, cardNumberRegister, isCardNumberIsValid } = useCardNumber();

  // 2. 카드사 (예시: useForm 활용)
  const {
    value: { company: selectedCompany },
    register: cardCompanyRegister,
    isValid: isCardCompanyValid,
  } = useForm({
    defaultValues: { company: '' },
  });

  // 3. 카드 유효기간
  const { expiryDate, expiryDateErrors, expiryDateRegister, isExpiryDateIsValid } = useExpirationDate();

  // 4. 카드 CVC 번호
  const { cvcNumber, cvcNumberErrors, cvcNumberRegister, isCvcNumberIsValid } = useCVCNumber();

  // 5. 비밀번호
  const { password, passwordErrors, passwordRegister, isPasswordValid } = usePassword();

  return (
    <form>
      {/* 카드 번호 */}
      <input {...cardNumberRegister} />
      {cardNumberErrors && <span>{cardNumberErrors}</span>}

      {/* 카드사 */}
      <select {...cardCompanyRegister}>
        <option value="">카드사 선택</option>
        {/* ...카드사 옵션들 */}
      </select>

      {/* 유효기간 */}
      <input {...expiryDateRegister} />
      {expiryDateErrors && <span>{expiryDateErrors}</span>}

      {/* CVC */}
      <input {...cvcNumberRegister} />
      {cvcNumberErrors && <span>{cvcNumberErrors}</span>}

      {/* 비밀번호 */}
      <input {...passwordRegister} />
      {passwordErrors && <span>{passwordErrors}</span>}

      <button
        type="submit"
        disabled={
          !isCardNumberIsValid || !isCardCompanyValid || !isExpiryDateIsValid || !isCvcNumberIsValid || !isPasswordValid
        }
      >
        등록
      </button>
    </form>
  );
}
```

---

### 반환값 예시

각 훅은 아래와 같은 형태의 값을 반환합니다(실제 구현에 따라 다를 수 있습니다).

```typescript
const {
  cardNumber, // 입력값(string)
  cardNumberErrors, // 에러 메시지(string | null)
  cardNumberRegister, // input에 spread할 등록 함수
  isCardNumberIsValid, // 유효성(boolean)
} = useCardNumber();
```
