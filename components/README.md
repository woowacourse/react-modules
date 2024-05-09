# Get started

당신의 패키지 매니저를 통해 `@hanuuny/react-modal` 을 설치해 주세요:

```shell
npm install @hanuuny/react-modal
```

`Modal` 컴포넌트를 import 하세요:

```javascript
import { Modal } from '@hanuuny/react-modal';

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

### `Modal.Input`

모달에서 제공되는 기본 입력 필드입니다.

### `Modal.Button`

모달에서 제공되는 기본 버튼입니다.

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
import { Modal } from 'modal';

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

<br />

# 모달 프리셋 컴포넌트 사용하기

해당 라이브러리에서는 기본 모달을 간편하게 생성할 수 있도록 다양한 프리셋 컴포넌트를 제공합니다. 다음은 모달 프리셋 컴포넌트를 사용하는 방법입니다:

### `AlertModal`

사용자에게 간단한 메시지를 전달하고 싶을 때 사용할 수 있는 모달입니다. 정보의 확인이나 경고 같은 단일 메시지를 보여주기에 적합하며, 확인 버튼을 눌러 모달을 닫을 수 있습니다.

### `ConfirmModal`

사용자에게 결정을 요구할 때 사용할 수 있는 모달입니다. 중요한 작업을 수행하기 전 선택지를 제공하기에 적합하며, 확인 버튼과 취소 버튼을 제공하여 선택할 수 있게 합니다.

### `PromptModal`

사용자에게 입력을 받기 위해 사용할 수 있는 모달입니다. 입력 필드를 포함하며, 입력을 완료하고 확인 버튼을 눌러 데이터를 전송할 수 있습니다.

<br />

# 스타일링 및 사용자 정의

모달 프리셋 컴포넌트는 기본적으로 `Modal` 컴포넌트의 사용자 정의 속성을 포함하고 있으며, 추가적으로 적절한 인자를 전달해야 합니다:

### `AlertModal`

| Name         | Type     | Default | Description                    |
| ------------ | -------- | ------- | ------------------------------ |
| `headerText` | `string` | -       | 모달 제목 텍스트를 전달합니다. |
| `bodyText`   | `string` | -       | 모달 내용 텍스트를 전달합니다. |

<br />
<details>
<summary>사용 예시</summary>

```js
const [isOpen, setIsOpen] = useState(false);

<AlertModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  headerText="아이디를 입력해 주세요."
  bodyText="아이디는 필수로 입력해야 합니다."
/>;
```

</details>
<br/>

### `ConfirmModal`

| Name         | Type         | Default | Description                                          |
| ------------ | ------------ | ------- | ---------------------------------------------------- |
| `headerText` | `string`     | -       | 모달 제목 텍스트를 전달합니다.                       |
| `bodyText`   | `string`     | -       | 모달 내용 텍스트를 전달합니다.                       |
| `onConfirm`  | `() => void` | -       | 확인 버튼을 눌렀을 시 발생할 콜백 함수를 전달합니다. |

<br />
<details>
<summary>사용 예시</summary>

```js
const [isOpen, setIsOpen] = useState(false);

<ConfirmModal
  isOpen={isOpen}
  onConfirm={() => setIsOpen(false)}
  close={() => setIsOpen(false)}
  headerText="카드를 삭제하시겠습니까?"
  bodyText="삭제하면 복구하실 수 없습니다"
/>;
```

</details>
<br/>

### `PromptModal`

| Name            | Type         | Default | Description                                                          |
| --------------- | ------------ | ------- | -------------------------------------------------------------------- |
| `headerText`    | `string`     | -       | 모달 제목 텍스트를 전달합니다.                                       |
| `inputValue`    | `string`     | -       | 입력 필드에 들어갈 변수를 전달합니다.                                |
| `onInputChange` | `string`     | -       | 입력 필드에 들어갈 변수가 변경됐을 때 발생할 콜백 함수를 전달합니다. |
| `onConfirm`     | `() => void` | -       | 확인 버튼을 눌렀을 시 발생할 콜백 함수를 전달합니다.                 |

<br />
<details>
<summary>사용 예시</summary>

```js
const [isOpen, setIsOpen] = useState(false);
const [value, setValue] = useState('');

const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
};

<PromptModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  headerText="쿠폰 번호를 입력해 주세요."
  inputValue={value}
  onInputChange={handleValue}
  onConfirm={() => setIsOpen(false)}
/>;
```

</details>
<br/>
