# maru-nice-modal
모달을 렌더링하는 컴포넌트입니다. 다양한 옵션과 스타일을 받아 사용자에게 제공합니다.

## 설치 방법

```bash
npm i maru-nice-modal
yarn add maru-nice-modal
```

## 사용 예시

```jsx
const App = () => {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen} position="bottom" isAnimation duration={300}>
        <Modal.Dimmed onDimmedClick={() => toggleIsOpen()} />
        <Modal.Header>
          <Modal.Title title="제목" />
          <Modal.CloseIcon onClose={() => toggleIsOpen()} />
        </Modal.Header>
        <Modal.Content>
          <div>내용</div>
        </Modal.Content>
        <Modal.Footer>
          <Modal.ConfirmButton
            label="동의하고 저장하기"
            onConfirm={() => toggleIsOpen()}
          />
          <Modal.CloseButton label="닫기" onClose={() => toggleIsOpen()} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## 합성 컴포넌트
- Modal이라는 하나의 컴포넌트를 분리한 뒤, 분리된 각 컴포넌트를 사용하는 쪽에서 조합해 사용 가능
```bash
- Modal
- Modal.Dimmed
- Modal.Header
- Modal.Title
- Modal.CloseIcon
- Modal.Content
- Modal.CloseButton
- Modal.ConfirmButton
- Modal.Footer
```

### Modal
- isOpen(boolean): 모달의 열림/닫힘 상태를 나타내는 boolean 값입니다.
- position?(`center` | `bottom`): 모달의 위치를 지정합니다. "bottom", "center" 로 지정 가능하며, 기본값은 "center".
- isAnimation?(boolean): 모달의 애니메이션 효과를 사용할지 여부를 나타내는 boolean 값입니다. 기본값은 false.
- duration?(number): 모달 애니메이션의 지속 시간을 지정하는 숫자 값(ms)입니다. isAnimation을 true로 설정하고 duration을 지정하지 않으면 의도하지 않은 애니메이션이 나올 수 있습니다.
- size(`small` | `medium` | `large`): 모달의 크기를 조절할 수 있습니다.

### Modal.Dimmed
- Modal 뒤에 배경으로 깔리는 어두운 영역
- onDimmedClick?: (() => void): dimmed 영역을 클릭했을 때 실행할 이벤트 핸들러를 설정할 수 있습니다.

### Modal.Header
- Modal 상단 영역
- children으로 내용 삽입
- Title과 CloseIcon 을 감쌈

### Modal.Title
- Modal의 제목
- title?(string) : title을 props로 받습니다.;

### Modal.CloseIcon
- Modal 우측 상단 닫기 아이콘
- onClose(() => void): 닫기 아이콘 클릭 시 실행할 이벤트 핸들러를 설정할 수 있습니다.
- showCloseIcon?(boolean): 닫기 버튼 노출 여부를 선택할 수 있습니다.
- customCloseIcon?(string): 이미지 경로를 문자열로 넣어 닫기 아이콘을 커스텀 할 수 있습니다.

### Modal.Content
- Modal 내용
- children으로 내용 삽입

### Modal.CloseButton
- 닫기 버튼
- label(string): 버튼 안에 들어갈 텍스트를 설정할 수 있습니다.
- onClose(() => void): 닫기 버튼 클릭 시 실행할 이벤트 핸들러를 설정할 수 있습니다.

### Modal.ConfirmButton
- 확인 버튼
- label(string): 버튼 안에 들어갈 텍스트를 설정할 수 있습니다.
- onConfirm(() => void): 닫기 버튼 클릭 시 실행할 이벤트 핸들러를 설정할 수 있습니다.

### Modal.Footer
- 보통 버튼을 감싸는 Modal 하단 영역
- children으로 내용 삽입
- position?('row' | 'row-reverse' | 'column' | 'column-reverse'): 사용자가 직접 레이아웃을 구현할 수 있도록 제공하지만 필요할 경우 position으로 children들에 대해 flex 레이아웃을 제공하고 있습니다.


