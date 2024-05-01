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

<<<<<<< HEAD
모달에서 제공되는 기본 버튼입니다.
=======
모달에서 제공되는 버튼입니다.

> > > > > > > ccab9ba (chore: 라이브러리 이름과 버전 설정)

### `Modal.CloseButton`

모달을 쉽게 닫을 수 있도록 제공되는 닫기 버튼입니다.

각 컴포넌트는 일관된 외관을 제공하도록 적절하게 스타일링되어 있지만, 사용자의 필요에 따라 커스텀할 수 있습니다.

<br />

# 스타일링 및 사용자 정의

모달 라이브러리는 다양한 선택 속성을 지원합니다:

### `Modal` 컴포넌트

| Name           | Type                                  | Default    | Description                            |
| -------------- | ------------------------------------- | ---------- | -------------------------------------- |
| `position`     | `'bottom' \| 'center'`                | `'bottom'` | 모달의 위치를 설정합니다.              |
| `size`         | `'sm' \| 'md' \| 'lg'`                | `'lg'`     | 모달의 크기를 설정합니다.              |
| `backdropType` | `'transparent' \| 'blur' \| 'opaque'` | `'opaque'` | 원하는 배경 효과 유형을 정의합니다.    |
| `shadow`       | `boolean`                             | `'true'`   | 모달에 그림자 효과를 설정합니다.       |
| `animation`    | `boolean`                             | `true`     | 모달 트랜지션 애니메이션을 설정합니다. |

### `Modal.Button` 컴포넌트

| Name   | Type                       | Default     | Description               |
| ------ | -------------------------- | ----------- | ------------------------- |
| `mode` | `'primary' \| 'secondary'` | `'primary'` | 버튼의 타입을 설정합니다. |
| `size` | `'sm' \| 'md' \| 'lg'`     | `'lg'`      | 버튼의 크기를 설정합니다. |

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
      <Modal.Footer>
        <Modal.Button text="확인" mode="primary" size="lg"></Modal.Button>
        <Modal.Button text="닫기" mode="secondary" size="lg" onClick={handleClose}></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
```
