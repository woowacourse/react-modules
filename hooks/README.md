# Hooks Module

### 소개

카드 등록 시 카드 번호에 따른 카드사를 반환하는 훅 모듈입니다.

### 설치 방법

`npm install happyjurung-hooks`

### 주요 hooks

- useCardNumbers : 카드 번호 입력을 16자리 숫자로 관리하면서 4자리씩 분할 및 검증하고, 카드사를 감지해 카드사별 포맷 문자열까지 반환하는 React 훅입니다.
- getCardCompany : 숫자 문자열의 접두사와 전체 길이를 검사해 해당 카드사(visa, master, amex, diners, unionPay) 또는 default를 반환하는 함수입니다.

### 사용 예시

```js
import React, { useState } from "react";
import useCardNumbers from "./useCardNumbers";

function CardForm() {
  const { numbers, cardType, handleCardNumberChange } = useCardNumbers();

  return (
    <div>
      <h3>카드사: {cardType || "미확인"}</h3>
      <div style={{ display: "flex", gap: 8 }}>
        {numbers.map((num, idx) => (
          <input
            key={idx}
            maxLength={4}
            value={num}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            placeholder="0000"
          />
        ))}
      </div>
    </div>
  );
}

import { getCardCompany } from "./getCardCompany";

console.log(getCardCompany("4000123412341234"));
// → "visa"      (4로 시작, 길이 16)

console.log(getCardCompany("5100123412341234"));
// → "master"    (51~55로 시작, 길이 16)

console.log(getCardCompany("341234123412345"));
// → "amex"      (34 or 37로 시작, 길이 15)

console.log(getCardCompany("36123412341234"));
// → "diners"    (36으로 시작, 길이 14)

console.log(getCardCompany("6221261234123412"));
// → "unionPay"  (622126~622925 범위, 길이 16)

console.log(getCardCompany("1234123412341234"));
// → "default"   (위 조건 모두 불충분)
```
