# maru-nice-modal
모달을 렌더링하는 컴포넌트입니다. 다양한 옵션과 스타일을 받아 사용자에게 제공합니다.

## 설치 방법

```bash
npm i maru-nice-modal
```

## 사용 예시

```jsx
const App = () => {
  return (
    <Modal
      isOpen={isOpen}
      content={<SelectBank />}
      onClose={() => toggleIsOpen()}
      title="카드사 선택"
      position="center"
      closeButton={<button style={{ width: '100%' }}>닫기 버튼</button>}
      confirmButton={<button style={{ width: '100%' }}>확인 버튼</button>}
      buttonPosition="column"
    />
  )
}
```

### props (required)
- isOpen: boolean : 모달이 열려있는지 여부
- onClose: (function) : 모달을 닫는 콜백함수를 제공해야 합니다.
- title: string : 모달의 제목을 설정할 수 있습니다.
- position (ModalPosition) : 모달의 위치 (`center`) 또는 (`bottom`)

### props (optional)
- content (React.ReactNode): 모달 내용을 넣을 수 있습니다.
- style (ModalStyle): 모달의 스타일 (dimmed, modal, modalHeader, modalTitle)을 커스텀 할 수 있습니다.
- closeButton (React.ReactNode): 모달 하단의 닫기 버튼을 넣을 수 있습니다.
- confirmButton (React.ReactNode): 모달 하단의 확인 버튼을 넣을 수 있습니다.
- buttonPosition (ButtonPosition): 닫기 버튼과 확인 버튼의 배치를 결정할 수 있습니다. (확인 버튼이 오른쪽, 아래가 정배) ('row', 'row-reverse', 'column', 'column-reverse')
- closeOnOutsideClick (boolean): 모달 외부 영역 클릭 시 닫기 여부를 설정할 수 있습니다. (default: true)
- customCloseIcon (string): 커스텀 닫기 아이콘을 설정할 수 있습니다.
- hideCloseIcon (boolean): 닫기 아이콘 숨김 여부를 설정할 수 있습니다.

