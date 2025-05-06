# Hooks Module

### 소개

카드 등록 시 필요한 입력 값에 대한 유효성 검사를 진행할 수 있는 훅입니다.

### 설치 방법

`npm install jurunghappy-hooks`

### 주요 hooks

- useCardNumbers : 카드 번호 유효성 검증할 수 있습니다.
- useExpiryDate : 카드 유효 날짜 유효성 검증할 수 있습니다.
- useCvcNumber : 카드 CVC 번호 유효성 검증할 수 있습니다.
- usePassword : 카드 비밀번호 2자리 검증할 수 있습니다.

### 사용 예시

**useCardNumbers**

- numbers : 카드 번호 (4\*4) 배열
- error : isValid(boolean)와 errorMassage(string)를 담고 있는 객체 배열
- handleCardNumbers : numbers 상태 업데이트 및 유효성 검증 함수

```js
import { useCardNumbers } from 'jurunghappy-hooks';

function App() {
  const {
    numbers,
    error: cardNumbersError,
    handleCardNumbers,
  } = useCardNumbers();

  return (
    <>
      <div>
        <h1>CardNumbers</h1>
        {numbers.map((number, index) => (
          <input
            key={index}
            type="text"
            value={number}
            onChange={(e) => handleCardNumbers(e, index)}
          />
        ))}
        <p>
          {cardNumbersError.find((error) => error.errorMessage !== '')
            ?.errorMessage ?? ''}
        </p>
      </div>
    </>
  );
}

export default App;
```

**useExpiryDate**

- date : {month: string, year: string} 객체
- error : isValid(boolean)와 errorMassage(string)를 담고 있는 객체 배열
- handleExpiryDate : date 상태 업데이트 및 유효성 검증 함수

```js
import { useExpiryDate } from 'jurunghappy-hooks';

function App() {
  const { date, error: dateError, useExpiryDate } = useExpiryDate();

  return (
    <>
      <div>
        <h1>Date</h1>
        <input
          type="text"
          value={date.month}
          name="month"
          onChange={(e) => useExpiryDate(e, 'month')}
        />
        <p>{dateError[0].errorMessage}</p>
        <input
          type="text"
          value={date.year}
          name="year"
          onChange={(e) => useExpiryDate(e, 'year')}
        />
        <p>{dateError[1].errorMessage}</p>
      </div>
    </>
  );
}

export default App;
```

**useCvcNumber**

- cvc : 카드 cvc 번호 (string)
- error : isValid(boolean)와 errorMassage(string)를 담고 있는 객체
- handleCvc : cvc 상태 업데이트 및 유효성 검증 함수

```js
import './App.css';
import { useCvcNumber } from 'jurunghappy-hooks';

function App() {
  const { cvc, error: cvcError, handleCvc } = useCvcNumber();

  return (
    <>
      <div>
        <h1>CVC</h1>
        <input type="text" value={cvc} onChange={(e) => handleCvc(e)} />
        <p>{cvcError.errorMessage}</p>
      </div>
    </>
  );
}

export default App;
```

**usePassword**

- password : 카드 비밀번호 2자리 (string)
- error : isValid(boolean)와 errorMassage(string)를 담고 있는 객체
- handlePassword : password 상태 업데이트 및 유효성 검증 함수

```js
import { usePassword } from 'jurunghappy-hooks';

function App() {
  const { password, error: passwordError, handlePassword } = usePassword();

  return (
    <>
      <div>
        <h1>Password</h1>
        <input
          type="text"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <p>{passwordError.errorMessage}</p>
      </div>
    </>
  );
}

export default App;
```
