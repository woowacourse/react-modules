# Modal

> Displays a dialog with a custom content that requires attention or provides additional information.

# installation

```bash
npm install @jinyyy/simple-modal
```

# Component spec

## Modal

> The main component to display a modal.

| prop name | type                                | default value | description                                      |
| --------- | ----------------------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`                         |               | Children of the modal component                  |
| isOpen    | `boolean`                           |               | The state of the modal being open or closed      |
| onToggle  | `() => void`                        |               | Handler function to toggle modal                 |
| position  | `'center' \| 'bottom'`              | 'center'      | Position of the modal on display                 |
| device    | `'mobile' \| 'tablet' \| 'desktop'` | 'mobile'      | serving responsive modal backdrop sizes          |
| size      | `'small' \| 'medium' \| 'large'`    | 'small'       | serving responsive modal sizes                   |
| style     | `React.CSSProperties`               |               | How to define inline CSS in React                |
| className | `string`                            |               | How to use class names for DOM elements in React |

### ModalHeader

> The header of the modal.

| prop name | type                  | default value | description                                      |
| --------- | --------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`           |               | Children of `ModalHeader` component              |
| title     | `string`              |               | Title of the modal                               |
| style     | `React.CSSProperties` |               | How to define inline CSS in React                |
| className | `string`              |               | How to use class names for DOM elements in React |

### ModalContent

> The body of the modal. (example - checkbox, input, textarea)

| prop name | type                  | default value | description                                      |
| --------- | --------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`           |               | Children of `ModalContent` component             |
| style     | `React.CSSProperties` |               | How to define inline CSS in React                |
| className | `string`              |               | How to use class names for DOM elements in React |

### ModalFooter

> The footer of the modal. (example - buttons)

| prop name | type                  | default value | description                                      |
| --------- | --------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`           |               | Children of `ModalFooter` component              |
| direction | `'column' \| 'row'`   | 'row'         | Flex direction of the footer                     |
| style     | `React.CSSProperties` |               | How to define inline CSS in React                |
| className | `string`              |               | How to use class names for DOM elements in React |

### ModalCloseButton

> Buttons used within a modal footer.

| prop name | type                                         | default value | description                                      |
| --------- | -------------------------------------------- | ------------- | ------------------------------------------------ |
| onClick   | `React.MouseEventHandler<HTMLButtonElement>` |               | Handlers for closing modals                      |
| type      | `'submit' \| 'button' \| 'reset'`            |               | button type                                      |
| style     | `React.CSSProperties`                        |               | How to define inline CSS in React                |
| className | `string`                                     |               | How to use class names for DOM elements in React |

### ModalButton

> Buttons for use in modal footer

| prop name | type                                         | default value | description                                      |
| --------- | -------------------------------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`                                  |               | Children of `ModalButton` component              |
| color     | `'primary' \| 'secondary' \| 'danger'`       | 'primary'     | Determine the background color of the button     |
| onClick   | `React.MouseEventHandler<HTMLButtonElement>` |               | Handlers for closing and confirm modals          |
| style     | `React.CSSProperties`                        |               | How to define inline CSS in React                |
| className | `string`                                     |               | How to use class names for DOM elements in React |

### ModalInput

> Input for use in modal content

| prop name | type                                         | default value | description                                      |
| --------- | -------------------------------------------- | ------------- | ------------------------------------------------ |
| value     | `ReactNode`                                  |               | Children of `ModalButton` component              |
| onChange  | `React.ChangeEventHandler<HTMLInputElement>` |               | Handlers for handling of change value            |
| style     | `React.CSSProperties`                        |               | How to define inline CSS in React                |
| className | `string`                                     |               | How to use class names for DOM elements in React |

### ModalLabel

> label for use in modal content

| prop name | type                  | default value | description                                      |
| --------- | --------------------- | ------------- | ------------------------------------------------ |
| children  | `ReactNode`           |               | Children of `ModalLabel` component               |
| style     | `React.CSSProperties` |               | How to define inline CSS in React                |
| className | `string`              |               | How to use class names for DOM elements in React |

## AlertModal

> Modals that convey a message to the user and only provide an confirm button

| prop name         | type                  | default value | description                                      |
| ----------------- | --------------------- | ------------- | ------------------------------------------------ |
| title             | `string`              |               | title of alert modal                             |
| contentLabel      | `string`              |               | content label of alert modal                     |
| confirmButtonText | `string`              |               | confirm button text of alert modal               |
| style             | `React.CSSProperties` |               | How to define inline CSS in React                |
| className         | `string`              |               | How to use class names for DOM elements in React |

## ConfirmModal

> Modals that give users choices and provide confirm/cancel button

| prop name         | type                  | default value | description                                      |
| ----------------- | --------------------- | ------------- | ------------------------------------------------ |
| children          | `ReactNode`           |               | Children of `ModalLabel` component               |
| title             | `string`              |               | title of confirm modal                           |
| contentLabel      | `string`              |               | content label of confirm modal                   |
| cancelButtonText  | `string`              |               | cancel button text of confirm modal              |
| confirmButtonText | `string`              |               | confirm button text of confirm modal             |
| style             | `React.CSSProperties` |               | How to define inline CSS in React                |
| className         | `string`              |               | How to use class names for DOM elements in React |

## PromptModal

> Modal that provides an input field to receive input from the user and an confirm/cancel button

| prop name         | type                  | default value | description                                      |
| ----------------- | --------------------- | ------------- | ------------------------------------------------ |
| title             | `string`              |               | title of confirm modal                           |
| contentLabel      | `string`              |               | content label of confirm modal                   |
| cancelButtonText  | `string`              |               | cancel button text of confirm modal              |
| confirmButtonText | `string`              |               | confirm button text of confirm modal             |
| style             | `React.CSSProperties` |               | How to define inline CSS in React                |
| className         | `string`              |               | How to use class names for DOM elements in React |

## use example

### Modal

```tsx
import React from 'react';
import { Modal } from '@jinyyy/simple-modal';

const OtherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="app">
      <Modal position="bottom" isOpen={isOpen} onToggle={handleToggle}>
        <Modal.ModalHeader title="약관에 동의해 주세요" />
        <Modal.ModalContent style={{ margin: '12px 0px' }}>
          <div style={{ height: '300px', width: '100%', backgroundColor: 'black' }} />
        </Modal.ModalContent>
        <Modal.ModalFooter direction="row">
          <Modal.ModalButton onClick={args.onToggle} color="primary">
            동의하고 저장하기
          </Modal.ModalButton>
          <Modal.ModalButton onClick={args.onToggle} color="secondary">
            닫기
          </Modal.ModalButton>
        </Modal.ModalFooter>
      </Modal>
    </div>
  );
};
```

### AlertModal

```tsx
import React from 'react';
import { AlertModal } from '@jinyyy/simple-modal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ height: '100vh', width: 'width: 600px', margin: 'auto' }}>
      <AlertModal
        position="bottom"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="아이디를 입력해주세요."
        contentLabel="아이디는 필수로 입력해야 합니다."
      />

      <button onClick={handleToggle}>모달 클릭!</button>
    </div>
  );
}

export default App;
```

### ConfirmModal

```tsx
import React from 'react';
import { ConfirmModal } from '@jinyyy/simple-modal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ height: '100vh', width: '600px', margin: 'auto' }}>
      <ConfirmModal
        position="center"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="아이디를 입력해주세요."
        onConfirm={handleToggle}
      >
        <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
      </ConfirmModal>
      <button onClick={handleToggle}>모달 클릭!</button>
    </div>
  );
}

export default App;
```

### PromptModal

```tsx
import React from 'react';
import { PromptModal } from '@jinyyy/simple-modal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ height: '100vh', width: '600px', margin: 'auto' }}>
      <PromptModal
        position="center"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="쿠폰 번호를 입력해 주세요."
        onConfirm={handleToggle}
      />
      <button onClick={handleToggle}>모달 클릭!</button>
    </div>
  );
}

export default App;
```

# Features

## When the modal opens

- Dimmed outside the modal
- Content behind a modal is inert, meaning that users cannot interact with it.

## When the modal closes

- Pressing `ESC` key closes the modal
- Click dimmed to close
