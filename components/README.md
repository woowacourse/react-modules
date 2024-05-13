# 페이먼츠 컴포넌트

### install

```
npm install nakta-react-payments-components
```

## 📦 Modal

페이먼츠 모달 컴포넌트입니다. 여러 기본 컴포넌트를 활용하여 조합하여 사용할 수 있습니다.

### Modal

모달의 가장 상위 컴포넌트입니다.

**Props**

| prop     | description                                                                                     | defaultValue |
| -------- | ----------------------------------------------------------------------------------------------- | ------------ |
| position | 모달 컨텐츠 노출 위치를 설정합니다. `center` 또는 `bottom`으로 중앙, 하단에 배치할 수 있습니다. |              |
| isOpen   | 모달이 열려있는지 여부에 관한 상태값입니다.                                                     |              |
| onClose  | 모달을 닫기 위한 이벤트 핸들러 함수입니다.                                                      |              |

**Modal example**

```tsx
<Modal position='center' isOpen={isOpen} onClose={onClose}>
  ...
</Modal>
```

### Backdrop

> 모달의 dimmer부분을 구성하는 컴포넌트입니다.

**Props**

| prop     | description                                                           | defaultValue |
| -------- | --------------------------------------------------------------------- | ------------ |
| onClick? | dimmer부분을 클릭했을 때 동작하는 이벤트 핸들러를 등록할 수 있습니다. |              |

**Backdrop example**

```tsx
<Modal>
  <Modal.Backdrop onClick={onClose} />
</Modal>
```

---

### Content

> 모달 내부 컨텐츠를 구성하는 컴포넌트입니다.

**Props**

| prop | description                                                                               | defaultValue |
| ---- | ----------------------------------------------------------------------------------------- | ------------ |
| size | `small`, `medium`, `large`를 선택적으로 입력받아 모달 컨텐츠의 크기를 설정할 수 있습니다. | medium       |

**size**

| size   | px  |
| ------ | --- |
| small  | 320 |
| medium | 480 |
| large  | 600 |

**Content example**

```tsx
<Modal>
  <Modal.Content size='medium'>...</Modal.Content>
</Modal>
```

---

### Header, Main, Footer

> 모달 내부 컨텐츠의 header, main, footer 부분을 구성할 수 있습니다. 기본적으로 각 컨텐츠를 용도에 맞게 분리하여 사용하는 것을 권장합니다.
>
> footer에서는 `align`, `position` prop을 사용할 수 있습니다.

**Props**

| prop      | description                                                            | defaultValue |
| --------- | ---------------------------------------------------------------------- | ------------ |
| align?    | `column`, `row`를 입력받아 요소의 배치를 결정할 수 있습니다.           | column       |
| position? | `left`, `right`, `center`를 입력받아 요소의 배치를 결정할 수 있습니다. | right        |

**example**

```tsx
<Modal>
  <Modal.Header>...</Modal.Header>
  <Modal.Main>...</Modal.Main>
  <Modal.Footer align='column' position='center'>
    ...
  </Modal.Footer>
</Modal>
```

---

### Button

> 모달의 버튼 컴포넌트입니다.

**Props**

| prop            | description                                                                  | defaultValue |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| size            | `small`, `full`입력받아 버튼의 사이즈를 선택할 수 있습니다.                  |              |
| backgroundColor | 버튼의 중요도에 따라서 `primary` 또는 `secondary` 색상을 선택할 수 있습니다. |              |
| onClick         | 버튼을 클릭했을 때 동작하는 이벤트 핸들러를 등록할 수 있습니다.              |              |

**size**

| size  | px or % |
| ----- | ------- |
| small | 80px    |
| full  | 100%    |

**backgroundColor**

| backgroundColor | background-color | color   |
| --------------- | ---------------- | ------- |
| primary         | #333333          | #ffffff |
| secondary       | inherit          | #8b95a1 |

**Button example**

```tsx
<Modal>
  <Modal.Button backgroundColor='primary' onClick={onClose} size='small'>
    확인
  </Modal.Button>
</Modal>
```

---

### CloseButton

> 모달의 닫기 버튼 컴포넌트입니다.

**Props**

| prop    | description                                                          | defaultValue |
| ------- | -------------------------------------------------------------------- | ------------ |
| onClick | 닫기 버튼을 클릭했을 때 동작하는 이벤트 핸들러를 등록할 수 있습니다. |              |

**CloseButton example**

```tsx
<Modal>
  <Modal.Content>
    <Modal.Header>
      ...
      <Modal.CloseButton onClick={onClose} />
    </Modal.Header>
    ...
  </Modal.Content>
</Modal>
```

---

### Input

> 모달의 입력 컴포넌트입니다.

**Props**

| prop                | description                                                                             | defaultValue |
| ------------------- | --------------------------------------------------------------------------------------- | ------------ |
| description         | 입력 컴포넌트의 설명을 작성합니다. 이는 스크린리더를 사용하는 사람을 위한 설명란입니다. |              |
| InputHTMLAttributes | input의 속성을 입력할 수 있습니다.                                                      |              |

**Input example**

```tsx
<Modal>
  ...
  <Modal.Input placeholder='입력해주세요.' label='inputModal' value={value} onChange={(e) => setValue(e.target.value)} />
  ...
</Modal>
```

---

### Title

> 모달의 제목 컴포넌트입니다.
>
> Header컴포넌트 함께 사용하는 것을 권장합니다.

**Title example**

```tsx
<Modal>
  <Modal.Header>
    <Modal.Title>제목</Modal.Title>
  </Modal.Header>
  ...
</Modal>
```

---

### Label

> 모달의 추가 설명 컴포넌트입니다. 제목 외 부가적인 설명을 작성할 때 사용할 수 있습니다.
>
> Main컴포넌트와 함께 사용하는 것을 권장합니다.

**Props**

| prop   | description                                                | defaultValue |
| ------ | ---------------------------------------------------------- | ------------ |
| color? | `basic`, `lightGray`, 두 가지의 색상을 선택할 수 있습니다. | basic        |

**color**

| color     | hex     |
| --------- | ------- |
| basic     | #0a0d13 |
| lightGray | #8b95a1 |

**Label example**

```tsx
<Modal>
  ...
  <Modal.Main>
    <Modal.Label color='lightGray'>아이디는 필수로 입력해야합니다.</Modal.Label>
  </Modal.Main>
  ...
</Modal>
```

---

### 조합 사용 예시

아래와 같은 방식으로 조합하여 사용할 수 있습니다.

![image](https://github.com/woowacourse/react-modules/assets/106071687/d38599a8-7f56-4a74-95e2-b468bac0b20b)

```tsx
import React from 'react';
import { Modal } from 'nakta-react-payments-components';

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
            <Modal.Title>제목</Modal.Title>
            <Modal.CloseButton onClick={onClose} />
          </Modal.Header>
          <Modal.Main>
            <Modal.Label color='lightGray'>추가설명</Modal.Label>
            <Modal.Input type='text' description='input coupon' id='coupon' placeholder='쿠폰을 입력해주세요.' value={value} onChange={onChange} />
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

export default App;
```

---

## 📦 Alert Modal

> 페이먼츠 Alert Modal 컴포넌트입니다. 위의 컴포넌트를 조합하여 Alert를 위한 컴포넌트를 제공합니다.

![image](https://github.com/woowacourse/react-modules/assets/106071687/e5d13e4c-dbfa-433b-90ec-e1a4f834a441)

**Props**

| prop             | description                                                                                                                             | defaultValue |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| position         | 모달 컨텐츠 노출 위치를 설정합니다. `center` 또는 `bottom`으로 중앙, 하단에 배치할 수 있습니다.                                         |              |
| isOpen           | 모달이 열려있는지 여부에 관한 상태값입니다.                                                                                             |              |
| onClose          | 모달을 닫기 위한 이벤트 핸들러 함수입니다.                                                                                              |              |
| size?            | 모달의 크기를 지정할 수 있습니다. size px에 대한 상세 내용은 `Content` 컴포넌트에서 확인할 수 있습니다.                                 | medium       |
| title            | 모달의 제목을 입력할 수 있습니다.                                                                                                       |              |
| label            | 모달의 부가설명을 입력할 수 있습니다.                                                                                                   |              |
| existCloseButton | 닫기 버튼의 존재 유무를 설정할 수 있습니다. `true`라면 닫기 버튼이 제목 옆에 설정되며, `false`라면 설정되지 않습니다.                   |              |
| onConfirm        | 확인 버튼을 눌렀을 때 동작하는 이벤트 핸들러 함수입니다. boolean값을 반환해 true일 때 모달이 닫히고, false일 때 모달이 닫히지 않습니다. |              |

### Alert Modal example

```tsx
import React from 'react';
import { AlertModal } from 'nakta-react-payments-components';

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

export default App;
```

---

## 📦 Confirm Modal

> 페이먼츠 확인 모달 컴포넌트입니다. 위의 컴포넌트를 조합하여 Confirm을 위한 컴포넌트를 제공합니다.

![image](https://github.com/woowacourse/react-modules/assets/106071687/a5816c87-5dc9-48ac-9b88-f0adfb757363)

**Props**

| prop             | description                                                                                                                             | defaultValue |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| position         | 모달 컨텐츠 노출 위치를 설정합니다. `center` 또는 `bottom`으로 중앙, 하단에 배치할 수 있습니다.                                         |              |
| isOpen           | 모달이 열려있는지 여부에 관한 상태값입니다.                                                                                             |              |
| onClose          | 모달을 닫기 위한 이벤트 핸들러 함수입니다.                                                                                              |              |
| size?            | 모달의 크기를 지정할 수 있습니다. size px에 대한 상세 내용은 `Content` 컴포넌트에서 확인할 수 있습니다.                                 | medium       |
| title            | 모달의 제목을 입력할 수 있습니다.                                                                                                       |              |
| label            | 모달의 부가설명을 입력할 수 있습니다.                                                                                                   |              |
| existCloseButton | 닫기 버튼의 존재 유무를 설정할 수 있습니다. `true`라면 닫기 버튼이 제목 옆에 설정되며, `false`라면 설정되지 않습니다.                   |              |
| onConfirm        | 확인 버튼을 눌렀을 때 동작하는 이벤트 핸들러 함수입니다. boolean값을 반환해 true일 때 모달이 닫히고, false일 때 모달이 닫히지 않습니다. |              |

### Confirm Modal example

```tsx
import React from 'react';
import { ConfirmModal } from 'nakta-react-payments-components';

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

export default App;
```

## 📦 Prompt Modal

> 페이먼츠 Prompt Modal 컴포넌트입니다. 위의 컴포넌트를 조합하여 Prompt 작성을 위한 컴포넌트를 제공합니다.
>
> 다양한 input 형태를 사용할 수 있도록 아래의 예시와 같이 children으로 Input컴포넌트를 주입하여 사용합니다.

![image](https://github.com/woowacourse/react-modules/assets/106071687/4fde897f-9042-46b2-8e9b-6292afe06cc9)

**Props**

| prop             | description                                                                                                                             | defaultValue |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| position         | 모달 컨텐츠 노출 위치를 설정합니다. `center` 또는 `bottom`으로 중앙, 하단에 배치할 수 있습니다.                                         |              |
| isOpen           | 모달이 열려있는지 여부에 관한 상태값입니다.                                                                                             |              |
| onClose          | 모달을 닫기 위한 이벤트 핸들러 함수입니다.                                                                                              |              |
| size?            | 모달의 크기를 지정할 수 있습니다. size px에 대한 상세 내용은 `Content` 컴포넌트에서 확인할 수 있습니다.                                 | medium       |
| title            | 모달의 제목을 입력할 수 있습니다.                                                                                                       |              |
| existCloseButton | 닫기 버튼의 존재 유무를 설정할 수 있습니다. `true`라면 닫기 버튼이 제목 옆에 설정되며, `false`라면 설정되지 않습니다.                   |              |
| onConfirm        | 확인 버튼을 눌렀을 때 동작하는 이벤트 핸들러 함수입니다. boolean값을 반환해 true일 때 모달이 닫히고, false일 때 모달이 닫히지 않습니다. |              |

### Prompt Modal example

```tsx
import React from 'react';
import { PromptModal } from 'nakta-react-payments-components';

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
      <Modal.Input placeholder='입력해주세요.' description='inputModal' value={value} onChange={(e) => setValue(e.target.value)} />
    </PromptModal>
  </div>
);

export default App;
```
