# 1단계 요구사항

## 모달 컴포넌트

- 모달의 열고 닫는 상태를 관리한다.
- 모달을 구현한다

```
 position="center"
  title="알림"
  children=
  onClose={handleClose}
```

- 포지션에 따른 모달을 구현한다.
- 배포한다

**스토리북**

- 잘 열리고 닫히는지(닫힐때는 x표랑 어두운 화면 누르기)
- 모달의 위치가 어떤지

## 페이먼츠 커스텀 훅

- useCardNumber(유효성 검사 결과와 에러 정보)
- useExpiryDate(유효성 검사 결과와 에러 정보)
- useCVC(유효성 검사 결과와 에러 정보)
- useCardNetwork(유효성 검사 결과와 에러 정보)
- useCardHolder(유효성 검사 결과와 에러 정보)
- 배포한다.
