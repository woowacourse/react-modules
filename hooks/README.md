# Hooks Module

### 페이먼츠 커스텀 훅

- package 이름 : use-card-input-hook
- Writer : 헤일리, 리안

## Installation

```
npm install use-card-input-hook
```

## Available Hooks

- useCardNumbers (카드 넘버 16자리 입력 커스텀 훅)
- useCardCompany (카드 회사 선택 커스텀 훅)
- useCardHolder (영문이름 입력 커스텀 훅)
- useExpiryDate (유효기간(월/년) 입력 커스텀 훅)
- useCVC (CVC 넘버 3자리 입력 커스텀 훅)
- usePassword (비밀번호 2자리 입력 커스텀 훅)

## Usage

### (1) useCardNumbers

- useCardNumbers는 카드 번호 16자리를 입력 받습니다.
- 카드 번호는 4개로 이루어져 있으며, input의 name은 'cardNumbers1','cardNumbers2','cardNumbers3','cardNumbers4' 로 고정되어 있습니다.
- validate : 입력한 카드 번호가 모두 숫자인지, 4자리씩 작성되었는지 확인합니다.

> [IS_NOT_NUMBER]: '카드번호는 숫자만 입력해주세요.'  
> [INVALID_LENGTH]: '카드 번호를 4자리씩 입력해주세요.'

```tsx
const {
  values: cardNumbers,
  onChange: onChangeCardNumbers,
  errorMessages,
} = useCardNumbers({
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
});

return (
  <>
    <h1>Hooks Modules</h1>
    <div>카드 번호</div>
    {/*cardNumber 1*/}
    <input
      onChange={onChangeCardNumbers}
      name="cardNumber1"
      value={cardNumbers['cardNumber1']}
    />
    {/*cardNumber 2*/}
    <div>{errorMessages['cardNumber1']}</div>
    <input
      onChange={onChangeCardNumbers}
      name="cardNumber2"
      value={cardNumbers['cardNumber2']}
    />
    {/*cardNumber 3*/}
    <div>{errorMessages['cardNumber2']}</div>
    <input
      value={cardNumbers['cardNumber3']}
      onChange={onChangeCardNumbers}
      name="cardNumber3"
    />
    <div>{errorMessages['cardNumber3']}</div>
    {/*cardNumber 4*/}
    <input
      value={cardNumbers['cardNumber4']}
      onChange={onChangeCardNumbers}
      name="cardNumber4"
    />
    <div>{errorMessages['cardNumber4']}</div>
  </>
);
```

### (2) useCardCompany

- useCardCompany는 카드 발급 회사에 대해 선택할 수 있습니다.
- validate : 선택한 벨류가 유효한 값인지 확인합니다.

> [INVALID_OPTION]: '유효하지 않은 옵션입니다.'

```tsx
const { value, onSelect, errorMessages } = useCardCompany({
  initialValue: '',
  optionArray: MockCardCompany,
});

return (
  <>
    <label>cardCompany</label>
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      <option value="">선택</option>
      {MockCardCompany.map((company) => (
        <option key={company} value={company}>
          {company}
        </option>
      ))}
    </select>
    <div>{errorMessages}</div>
  </>
);
```

### (3) useCardHolder

- useCardHolder 커스텀 훅은 카드의 영문이름을 입력 받습니다.
- validate : 입력 받은 벨류가 모두 대문자 영어인지를 확인합니다.

> [ONLY_UPPERCASE]: '영대문자로만 입력해주세요.'  
> [IS_DOUBLE_BLANK]: '빈칸이 두개 이상 포함되어 있습니다.'

```tsx
const { value, onChange, errorMessage } = useCardHolder('');

return (
  <>
    <label>CardHolder</label>
    <input value={value} onChange={onChange} name="cardHolder" />
    <div>{errorMessage}</div>
  </>
);
```

### (4) useExpiryDate

- useExpiryDate 커스텀 훅은 카드의 유효기간 (월/년도)에 대해 입력 받습니다.
- validate : 입력 받은 벨류가 모두 숫자인지, 유효한 기간인지를 확인합니다.

> [IS_NOT_NUMBER]: '만료 일자는 숫자만 입력해주세요.'  
> [INVALID_DATE]:'이미 만료된 카드입니다. 만료일자를 확인해 주세요.'
> [INVALID_MONTH]: '유효하지 않은 월 입력입니다.'  
> [INVALID_YEAR]: '유효하지 않은 년 입력입니다.'  
> [INVALID_LENGTH]: '일자는 2자리 숫자로 입력해 주세요.'

```tsx
const {
  values: { month, year },
  onChange,
  errorMessages,
} = useExpiryDate({
  month: '',
  year: '',
});

return (
  <>
    <label>expiryDate</label>
    <input value={month} onChange={onChange} name="month" />

    <div>{errorMessages && errorMessages.month}</div>
    <input value={year} onChange={onChange} name="year" />
    <div>{errorMessages && errorMessages.year}</div>
  </>
);
```

### (5) useCVC

- useCVC 커스텀 훅은 카드의 CVC 3자리를 입력 받습니다.
- validate : 입력 받은 벨류가 모두 숫자인지, 길이가 3인지를 확인합니다.

> [IS_NOT_NUMBER]: 'CVC는 숫자만 입력해주세요.'  
> [INVALID_LENGTH]: 'CVC는 3글자 이상으로 입력해 주세요.'

````tsx
  const { value, onChange, errorMessage } = useCVC('');
  return (
    <>
      <label>CVC</label>
      <input value={value} onChange={onChange} name="CVC" />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );```
````

### (6) usePassword

- usePassword 커스텀 훅은 카드의 비밀번호 앞자리 2자리를 입력 받습니다.
- validate : 입력 받은 벨류가 모두 숫자인지, 길이가 2인지를 확인합니다.

> [IS_NOT_NUMBER]: '비밀번호는 숫자만 입력해주세요.'  
> [INVALID_LENGTH]: '비밀번호는 2글자만 입력해 주세요.'

```tsx
const { value, onChange, errorMessage } = usePassword('');

return (
  <>
    <label>password</label>
    <input value={value} onChange={onChange} name="password" />
    <div>{errorMessage}</div>
  </>
);
```
