# 페이먼츠 커스텀 훅

- [] 페이먼츠 커스텀 훅 모듈을 npm으로 배포하고 사용할 수 있어야 한다.
- [] 페이먼츠 카드의 다양한 정보에 대한 유효성 검사 로직을 여러 개의 작은 커스텀 훅으로 분리하고, 필요에 따라 조합하여 사용할 수 있도록 한다.
- [] 커스텀 훅은 카드 정보의 유효성 검사 결과와 에러 정보를 사용자인 개발자에게 제공할 수 있어야 한다.

### common

- [] useInput
- [] useCardType

### 비지니스 로직

- [] useCardNumbers
- [] useCardCompany
- [] useCardCVC
- [] useCardExpirationDate
- [] useCardOwner
- [] useCardPassword
