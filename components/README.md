# Modal

> Displays a dialog with a custom content that requires attention or provides additional information.
> It also provides three modal components that utilize base-modal.
>
> - Alert Modal
> - Confirm Modal
> - Prompt Modal
>

- [And you can check out the storybook for the modal components at that link!](https://66334cce181d6ad998aac0c9-grppptilvl.chromatic.com/?path=/story/modal-alertmodal--large-centered)

# installation

```bash
npm install @jaymyong66/simple-modal
```

# Component spec

## 🎯 Base Modal

> The main component to display a modal.

| prop name | type                      | default value | description                                 |
| --------- | ------------------------- | ------------- | ------------------------------------------- |
| children  | `ReactNode`               |               | childrens of modal component                |
| isOpen    | `boolean`                 |               | The state of the modal being open or closed |
| onToggle  | `() => void`              |               | the handler function to toggle modal        |
| position  | `'center'    \| 'bottom'` | `center`      | position of modal on display                |

### ModalHeader

> The header of the modal.

| prop name | type        | default value | description                    |
| --------- | ----------- | ------------- | ------------------------------ |
| children  | `ReactNode` |               | childrens of `Modal` component |
| title     | `string`    |               | title of modal                 |

### ModalContent

> The body of the modal. (example - checkbox, input, textarea)

| prop name | type        | default value | description                           |
| --------- | ----------- | ------------- | ------------------------------------- |
| children  | `ReactNode` |               | childrens of `ModalContent` component |

### ModalFooter

> The footer of the modal. (example - buttons)

| prop name | type        | default value | description                          |
| --------- | ----------- | ------------- | ------------------------------------ |
| children  | `ReactNode` |               | childrens of `ModalFooter` component |

## use example

```tsx
import { Modal } from '@jaymyong66/simple-modal';

const OtherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <Modal position="center" isOpen={isOpen} onToggle={handleToggle}>
      <Modal.ModalHeader title="카드사 선택"></Modal.ModalHeader>
      <Modal.ModalContent>
        <CheckBoxField />
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <ConfirmButton />
      </Modal.ModalFooter>
    </Modal>
  );
};
```

# Features

## When the modal opens

- Dimmed outside the modal
- Content behind a modal is inert, meaning that users cannot interact with it.

## When the modal closes

- Pressing `ESC` key closes the modal
- Click dimmed to close

## 🎯 Alert Modal

> A modal that informs the user of a message and has a confirmation button.

| prop name | type                             | default value | description                                 |
| --------- | -------------------------------- | ------------- | ------------------------------------------- |
| isOpen    | `boolean`                        |               | The state of the modal being open or closed |
| onToggle  | `() => void`                     |               | The handler function to toggle modal        |
| onConfirm | `() => void`                     |               | The handler function to click event of confirm button |
| position  | `'center' \| 'bottom'`           | `center`      | Position of modal on display                |
| size      | `'large' \| 'medium' \| 'small'` | `large`       | Size of modal on display                    |
| title     | `string`                         |               | Title of modal header                       |
| caption   | `string`                         |               | Caption of modal header                     |
| confirmButtonLabel   | `string`                         |               | Caption of confirm button        |

### use example

```tsx
import { AlertModal } from '@jaymyong66/simple-modal';

const OtherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleConfirm = () => {
    console.log('confirm');
    handleToggle();
  };

  return (
    <AlertModal
      position="center"
      size="small"
      isOpen={isOpen}
      onToggle={handleToggle}
      onConfirm={handleConfirm}
      title="아이디를 입력해주세요."
      caption="아이디는 필수로 입력해야 합니다."
      confirmButtonLabel="확인"
    />
  );
};
```

## 🎯 Confirm Modal

> A modal that gives the user a choice and has confirm and cancel buttons

| prop name | type                             | default value | description                                 |
| --------- | -------------------------------- | ------------- | ------------------------------------------- |
| isOpen    | `boolean`                        |               | The state of the modal being open or closed |
| onToggle  | `() => void`                     |               | The handler function to toggle modal        |
| onConfirm | `() => void`                     |               | The handler function to click event of confirm button |
| position  | `'center' \| 'bottom'`           | `center`      | Position of modal on display                |
| size      | `'large' \| 'medium' \| 'small'` | `large`       | Size of modal on display                    |
| title     | `string`                         |               | Title of modal header                       |
| caption   | `string`                         |               | Caption of modal header                     |
| confirmButtonLabel   | `string`                         |               | Caption of confirm button        |
| cancelButtonLabel   | `string`                         |               | Caption of cancel button        |

### use example

```tsx
import { ConfirmModal } from '@jaymyong66/simple-modal';

const OtherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleConfirm = () => {
    console.log('confirm');
    handleToggle();
  };

  return (
    <ConfirmModal
      position="center"
      size="small"
      isOpen={isOpen}
      onToggle={handleToggle}
      onConfirm={handleConfirm}
      title="카드를 삭제하시겠습니까?"
      caption="삭제하면 복구하실 수 없습니다."
      confirmButtonLabel="확인"
      confirmButtonLabel="취소"
    />
  );
};
```

## 🎯 Prompt Modal

> A modal with an input field to receive input from the user and an OK/Cancel button.

| prop name | type                             | default value | description                                                     |
| --------- | -------------------------------- | ------------- | --------------------------------------------------------------- |
| isOpen    | `boolean`                        |               | The state of the modal being open or closed                     |
| onToggle  | `() => void`                     |               | The handler function to toggle modal                            |
| onChange  | `() => void`                     |               | A handler function that receives the value of the change event. |
| onSubmit  | `(value: string) => void`        |               | A handler function that receives the value of the submit event. |
| position  | `'center' \| 'bottom'`           | `center`      | Position of modal on display                                    |
| size      | `'large' \| 'medium' \| 'small'` | `large`       | Size of modal on display                                        |
| title     | `string`                         |               | Title of modal header                                           |
| value     | `string`                         |               | Value received from user                                        |
| confirmButtonLabel   | `string`                         |               | Caption of confirm button        |
| cancelButtonLabel   | `string`                         |               | Caption of cancel button        |


### use example

```tsx
import { PromptModal } from '@jaymyong66/simple-modal';

const OtherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleSubmit = (value: string) => {
    console.log(value);
    handleToggle();
  }

  return (
    <PromptModal
      position="bottom"
      size="medium"
      isOpen={isOpen}
      onToggle={handleToggle}
      title="쿠폰 번호를 입력해 주세요."
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      confirmButtonLabel="확인"
      confirmButtonLabel="취소"
    />
  );
};
```
