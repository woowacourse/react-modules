# cookie-nice-modal
모달을 렌더링하는 컴포넌트입니다. 다양한 옵션과 스타일을 받아 사용자에게 제공합니다.

## 설치 방법

```bash
npm i cookie-nice-modal
```

## 사용 예시

```jsx
const App = () => {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <Modal open={isOpen} onClose={() => toggleIsOpen()} type="drawer">
      <Modal.Header title="카드사 선택" onClose={toggleIsOpen} />
      <Modal.Content>
        <SelectBank />
      </Modal.Content>
      <Modal.Footer
        buttonPosition="column-reverse"
        closeButton={{
          text: '취소',
          onClick: () => console.log('취소'),
        }}
        confirmButton={{
          text: '동의하고 확인하기',
          onClick: () => console.log('확인'),
        }}
      />
    </Modal>
  );
}
```

### props (required)
- open: boolean : 모달이 열려있는지 여부
- onClose: (function) : 모달을 닫는 콜백함수를 제공해야 합니다.
- type (ModalType) : `dialog`, `drawer`, `drawer-top`, `drawer-left`, `drawer-right`
  + drawer default 방향은 아래입니다.

### props (optional)
- style (ModalStyle) : dimmed와 modal 스타일을 줄 수 있습니다.
- closeOnOutsideClick (boolean): 모달 외부 영역 클릭 시 닫기 여부를 설정할 수 있습니다. (default: true)
- closeOnESCKeydown (boolean): 모달 내에서 esc 버튼 클릭 시 (default: true)

### children (optional)
- Header
- Content
- Footer

### Header props (required)
- title: (string) 모달의 타이틀을 설정할 수 있습니다.
- onClose: (function) : 모달을 닫는 콜백함수를 제공해야 합니다.

### Header props (optional)
- style: (HeaderStyle): 헤더와 타이틀 스타일을 커스텀할 수 있습니다.
- customCloseIcon (string): 커스텀 닫기 아이콘을 설정할 수 있습니다.
- hideCloseIcon (boolean): 닫기 아이콘 숨김 여부를 설정할 수 있습니다. 

### Contents props (optional)
- children: (ReactNode): 컨텐츠를 넣어주면 됩니다.
- style: (ContentStyle): 스타일을 넣어줄 수 있습니다.


### Footer props (optional)
- style: Footer 스타일을 넣어줄 수 있습니다.
- buttonPosition (ButtonPosition): 닫기 버튼과 확인 버튼의 배치를 결정할 수 있습니다.
  - row일 때 확인 버튼이 오른쪽, column일 때 확인 버튼이 아래가 default 입니다. ('row', 'row-reverse', 'column', 'column-reverse')

- closeButton (closeButtonProps): 닫기 버튼에 대한 설정입니다
  - text: 닫기 버튼 텍스트 설정 default는 취소
  - style: 닫기 버튼 스타일을 넣어줄 수 있습니다.
  - customButton: 커스텀한 닫기버튼을 넣어줄 수 있습니다.
  - hide: 버튼을 숨길 수 있습니다.
  - button props: (HTMLButtonProps): html 기본 버튼 

- confirmButton (closeButtonProps): 확인 버튼에 대한 설정입니다.
  - text: 확인 버튼 텍스트 설정 default는 취소
  - style: 확인 버튼 스타일을 넣어줄 수 있습니다.
  - customButton: 커스텀한 확인버튼을 넣어줄 수 있습니다.
  - hide: 버튼을 숨길 수 있습니다.
