# React Modules

## 모달 컴포넌트
- 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.
- 모바일에서 사용 가능한 모달 컴포넌트를 만들어야 한다.
- 모달 위치 및 내용 구성 옵션을 prop으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.
  - 모달 위치: 중앙, 하단 등
  - 모달 내용: 제목, 버튼 등
- 사용자 정의 이벤트 핸들러를 지원해야 한다.
  - 모달 닫기, 확인 등의 동작에 대한 이벤트 핸들러

```tsx
<Modal
  position="center, bottom"
  title="제목"
  children={<ModalChildren />} // option
  closeButton={<CloseButtonComponent />} // option
  confirmButton={<ConfirmButtonComponent />} // option
  buttonPosition="row, row-reverse, column, colum-reverse" // 확인 버튼이 아래, 오른쪽이 정배 // option
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm} // option
  closeOnOutsideClick={true} // option 밖에 클릭했을 때 꺼지는 것이 정배
/>
```


