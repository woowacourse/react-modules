# react-modules

## Modal

## 1단계 기능 구현 목록

## Modal 구조

- Modal.Header
- Modal.Title
- Modal.CloseBtn
- Modal.Body
- Modal.Backdrop

## Modal props

## 필수 옵션

- isOpen :
  - type: boolean
- children :
  - type: ReactNode
  - Modal.Body 안에 들어간다.
- type
  - type: 'center'|'bottom'|'toast'
  - 모달 형태를 결정하는 타입
- stopModalPropagation
  - type: boolean
  - true일때, modal에서 발생하는 이벤트 전파를 막는다.

## 선택 옵션

- toastDuration
  - type: number
  - 토스트 모달의 지속 시간
- HTMLDiveElement의 기본 속성들
