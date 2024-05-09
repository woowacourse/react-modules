# Get started

당신의 패키지 매니저를 통해 `@pakxe/react-simple-modal` 을 설치해 주세요:

```shell
npm install @pakxe/react-simple-modal
```

`Modal` 컴포넌트를 import 하세요:

```javascript
import { Modal } from '@pakxe/react-simple-modal';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} close={handleClose}>
      모달 컨텐츠
    </Modal>
  );
};
```

<br />

# 모달 컴포넌트 사용하기

모달 컴포넌트는 유연하게 설계되어 다양한 타입의 콘텐츠를 내부에 포함시킬 수 있습니다. 다음은 모달 내의 다양한 하위 컴포넌트들을 사용하는 방법입니다:

### `Modal.Header`

모달의 상단 영역을 표시합니다. 주로 제목과 닫기 버튼을 포함합니다.

### `Modal.Body`

모달의 주요 콘텐츠 영역을 표시합니다. 텍스트, 폼 또는 기타 콘텐츠를 포함합니다.

### `Modal.Footer`

모달의 하단 영역을 표시합니다. 주로 확인 또는 취소와 같은 동작 버튼을 포함합니다.

### `Modal.Title`

모달의 제목을 표시합니다.

### `Modal.Button`

모달에서 제공되는 기본 버튼입니다.

### `Modal.CloseButton`

모달을 쉽게 닫을 수 있도록 제공되는 닫기 버튼입니다.

### `Modal.Input`

모달에서 제공되는 기본 입력창 입니다.

각 컴포넌트는 일관된 외관을 제공하도록 적절하게 스타일링되어 있지만, 사용자의 필요에 따라 커스텀할 수 있습니다.

<br />

# 스타일링 및 사용자 정의

모달 라이브러리는 다양한 선택 속성을 지원합니다:

### `ModalMain` 컴포넌트

| Name           | Type                              | Default    | Description                            |
| -------------- | --------------------------------- | ---------- | -------------------------------------- |
| `isOpen`       | `boolean`                         | -          | 모달이 열려 있는지 여부를 결정합니다.  |
| `close`        | `function`                        | -          | 모달을 닫는 함수입니다.                |
| `position`     | `'bottom' , 'center', 'top'`      | `'center'` | 모달의 위치를 설정합니다.              |
| `size`         | `'sm', 'md', 'lg'`                | `'lg'`     | 모달의 크기를 설정합니다.              |
| `backdropType` | `'transparent', 'blur', 'opaque'` | `'opaque'` | 원하는 배경 효과 유형을 정의합니다.    |
| `shadow`       | `boolean`                         | `true`     | 모달에 그림자 효과를 설정합니다.       |
| `animation`    | `boolean`                         | `true`     | 모달 트랜지션 애니메이션을 설정합니다. |
| `zIndex`       | `number`                          | `100`      | 모달의 z-인덱스를 설정합니다.          |

### `Modal.Footer` 컴포넌트

| Name        | Type                        | Default    | Description                        |
| ----------- | --------------------------- | ---------- | ---------------------------------- |
| `direction` | `'row', 'column', 'column'` | `'column'` | 푸터의 레이아웃 방향을 설정합니다. |
| `position`  | `'start', 'center', 'end'`  | `'center'` | 푸터의 위치를 정렬합니다.          |

### `Modal.Button` 컴포넌트

| Name        | Type                 | Default     | Description                                    |
| ----------- | -------------------- | ----------- | ---------------------------------------------- |
| `text`      | `string`             | -           | 버튼에 표시될 텍스트입니다.                    |
| `color`     | `'default', 'none'`  | `'default'` | 버튼의 색상 스타일을 설정합니다.               |
| `size`      | `'sm', 'md', 'lg'`   | `'lg'`      | 버튼의 크기를 설정합니다.                      |
| `fullWidth` | `boolean`            | `false`     | 버튼이 전체 너비를 차지할지 여부를 설정합니다. |
| `variants`  | `'normal', 'border'` | `'normal'`  | 버튼의 스타일 변형을 설정합니다.               |

<br />
<br />

# 합성 컴포넌트를 사용한 모달 예시

```javascript
import { Modal } from '@pakxe/react-simple-modal';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} position="bottom" backdropType="blur" size="lg" close={handleClose}>
      <Modal.Header>
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton close={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <p>모달입니다.</p>
      </Modal.Body>
      <Modal.Footer direction="row" location="right">
        <Modal.Button text="확인" color="default" size="lg"></Modal.Button>
        <Modal.Button text="닫기" color="none" variants="border" size="lg" onClick={handleClose}></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
```

# PresetModal

간편하게 사용할 수 있는 3종류의 모달입니다.

## AlertModal

### 스냅샷

![AlertModal](https://pakxe.s3.ap-northeast-2.amazonaws.com/AlertModal.png)

### 사용 예시

```js
<AlertModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title="아이디를 입력해주세요."
  description="아이디는 필수로 입력해야 합니다."
  onConfirm={() => setIsOpen(false)}
/>
```

## ConfirmModal

### 스냅샷

![ConfirmModal](https://pakxe.s3.ap-northeast-2.amazonaws.com/ConfirmModal.png)

### 사용 예시

```js
<ConfirmModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title="카드를 삭제하시겠습니까?"
  description="삭제하면 복구하실 수 없습니다."
  onConfirm={() => setIsOpen(false)}
/>
```

## PromptModal

### 스냅샷

![PromptModal](https://pakxe.s3.ap-northeast-2.amazonaws.com/PromptModal.png)

### 사용 예시

```js
<PromptModal
  onConfirm={() => setIsOpen(false)}
  value={value}
  onChange={handleChange}
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title="쿠폰 번호를 입력해 주세요."
/>
```
