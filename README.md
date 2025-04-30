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
- 기타 리팩토링 (검정화면 눌러도 닫히도록, dom구조위한 포탈)
- 배포한다

**스토리북**

- 잘 열리고 닫히는지(닫힐때는 x표랑 어두운 화면 누르기)
- 모달의 위치가 어떤지

## 페이먼츠 커스텀 훅(커스텀훅아님)

- validateCardNumber(유효성 검사 결과와 에러 정보)
- validateExpiryDate(유효성 검사 결과와 에러 정보)
- validateCVC(유효성 검사 결과와 에러 정보)
- validateSecretNumber(유효성 검사 결과와 에러 정보)
- 배포한다.
