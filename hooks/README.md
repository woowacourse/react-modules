# Hooks Module

값 변경, 에러 변경, validation ,동적 렌더링

- [x] useCardHolderValidation 
  - 카드 소유자 이름에 대한 유효성 검사 로직
  - [x] cardHolder 는 영대문자여야 한다.
  - [x] cardHolder 에는 공백이 2번 이상 입력되면 안된다.
  - [x] cardHolder 에는 공백으로 시작하거나 끝나면 안된다.

- [x] useCardNumberValidation 
    - [x] 카드 번호에는 숫자만 입력되어야 한다.
    - [x] 카드 번호는 공백으로 시작하거나 끝나면 안된다.
    - [x] 카드 번호는 4자리여야 한다.

- [x] useCardPasswordValidation 
    - [x] 카드 비밀번호에는 숫자만 입력되어야 한다.
    - [x] 카드 비밀번호는 공백으로 시작하거나 끝나면 안된다.
    - [x] 카드 비밀번호는 2자리여야 한다.

- [x] useCVCValidation 
    - [x] CVC에는 숫자만 입력되어야 한다.
    - [x] CVC는 공백으로 시작하거나 끝나면 안된다.
    - [x] CVC는 3자여야 한다.

- [x] useExpiryDateValidation 
    - [x] 카드 만료기간에는 숫자만 입력되어야 한다.
    - [x] 카드 만료기간는 공백으로 시작하거나 끝나면 안된다.
    - [x] 카드 만료기간의 월 에는 1~12 사이의 값이 입력되어야 한다.
    - [x] 카드 만료기간의 년도 에는 0~99 사이의 값이 입력되어야 한다.

- [x] useCardType
    - [x] 카드 번호가 51~55 로 시작하면 카드타입이 MasterCard 가 되어야 한다.
    - [x] 카드 번호가 4 로 시작하면 카드타입이 Visa 가 되어야 한다.
    - [x] 카드 번호가 위 경우가 아닐경우 카드타입이 Empty 가 되어야 한다.



