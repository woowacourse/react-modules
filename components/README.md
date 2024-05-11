# 페이먼츠 컴포넌트

### install

```
npm install nakta-react-payments-components
```

## 📦 Modal

페이먼츠 모달 컴포넌트입니다. 여러 기본 컴포넌트를 활용하여 조합하여 사용할 수 있습니다.

### components

- **Backdrop**: 모달의 dimmer부분 컴포넌트입니다.

  - `onClick?`: dimmer부분을 클릭했을 때 이벤트 핸들러를 등록할 수 있습니다.

- **Content**: 모달 내부 컨텐츠를 구성하는 태그입니다.

  - `size`: `'small' | 'medium' | 'large'`를 선택적으로 입력받아 모달 컨텐츠의 크기를 설정할 수 있습니다.

- **Header**: 모달 내부 컨텐츠의 header 부분을 구성할 수 있습니다.
- **Main**: 모달 내부 컨텐츠의 main 부분을 구성할 수 있습니다.
- **Footer**: 모달 내부 컨텐츠의 footer 부분을 구성할 수 있습니다.

  - `align?`: `'column' | 'row'`를 입력받아 요소의 배치를 결정할 수 있습니다. 입력하지 않으면 기본적으로 `column`이 적용됩니다.
  - `position?`: `'left' | 'right' | 'center'`를 입력받아 요소의 배치를 결정할 수 있습니다. 입력하지 않으면 기본적으로 `right`가 적용됩니다.

- **Button**: 모달의 button 컴포넌트입니다.

  - `size`: `'small' | 'full'` 입력받아 버튼의 사이즈를 선택할 수 있습니다.
  - `backgroundColor`: `'primary' | 'secondary'`를 입력할 수 있으며, 버튼의 중요도에 따라서 버튼의 색상을 선택할 수 있습니다.
  - `onClick`: 버튼을 클릭했을 때 이벤트 핸들러를 등록할 수 있습니다.

- **CloseButton**: 모달의 닫기 버튼입니다.

  - `onClick`: 닫기 버튼을 클릭했을 때 이벤트 핸들러를 등록할 수 있습니다.

- **Input**: 모달의 입력창입니다.

  - `label`: 해당 입력창의 설명을 작성합니다.
  - input 입력 속성: input태그의 입력 속성을 모두 선택적으로 입력할 수 있습니다.

- **Title**: 모달의 제목 입력 컴포넌트입니다.

- **Label**: 모달의 설명 입력 컴포넌트입니다.
  - `color`: `'basic' | 'lightGray'`를 입력할 수 있으며, 중요도에 따라서 글씨의 색상을 선택할 수 있습니다.

### 사용 예시

아래와 같은 방식으로 조합하여 사용할 수 있습니다.

```tsx
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: '100vw', height: '300vh' }}>
      <Modal position='center' isOpen={isOpen} onClose={onClose}>
        <Modal.Backdrop onClick={onClose} />
        <Modal.Content size='medium'>
          <Modal.Header>
            <Modal.Title>123</Modal.Title>
            <Modal.CloseButton onClick={onClose} />
          </Modal.Header>
          <Modal.Main>
            <Modal.Label color='lightGray'>아이디는 필수로 입력해야합니다.</Modal.Label>
            <Modal.Input type='text' label='input coupon' id='coupon' placeholder='쿠폰을 입력해주세요.' value={value} onChange={onChange} />
          </Modal.Main>
          <Modal.Footer align='row' position='right'>
            <Modal.Button backgroundColor='secondary' onClick={onClose} size='small'>
              취소
            </Modal.Button>
            <Modal.Button backgroundColor='primary' onClick={onClose} size='small'>
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}
```

## 📦 Alert Modal

페이먼츠 Alert Modal 컴포넌트입니다. 위의 기본 컴포넌트를 조합한 Alert를 위한 컴포넌트를 제공합니다.

### 사용 예시

```tsx
const [isOpen, setIsOpen] = useState(true);

const onClose = () => setIsOpen(false);
const onConfirm = () => console.log('confirm');

const args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
  isOpen: true,
};

return (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
      모달열기
    </Modal.Button>
    <AlertModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} />
  </div>
);
```

## 📦 Confirm Modal

페이먼츠 확인 모달 컴포넌트입니다. 위의 기본 컴포넌트를 조합한 Confirm을 위한 컴포넌트를 제공합니다.

### 사용 예시

```tsx
const [isOpen, setIsOpen] = useState(true);

const onClose = () => setIsOpen(false);
const onConfirm = () => console.log('confirm');

const args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  label: '설명을 입력해주세요.',
  existCloseButton: true,
};

return (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
      모달열기
    </Modal.Button>
    <ConfirmModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} />
  </div>
);
```

## 📦 Prompt Modal

페이먼츠 Prompt Modal 컴포넌트입니다. 위의 기본 컴포넌트를 조합한 Prompt 작성을 위한 컴포넌트를 제공합니다.

### 사용 예시

```tsx
const [isOpen, setIsOpen] = useState(true);
const [value, setValue] = useState('');

const onClose = () => setIsOpen(false);
const onConfirm = () => console.log('confirm');

const args = {
  position: 'center',
  size: 'medium',
  title: '제목을 입력해주세요',
  existCloseButton: true,
};

return (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
      모달열기
    </Modal.Button>
    <PromptModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm}>
      <Modal.Input placeholder='입력해주세요.' label='inputModal' value={value} onChange={(e) => setValue(e.target.value)} />
    </PromptModal>
  </div>
);
```
