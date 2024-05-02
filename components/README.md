# Modal

> Displays a dialog with a custom content that requires attention or provides additional information.

# installation

```bash
npm install @jinyyy/simple-modal
```

# Component spec

## Modal

> The main component to display a modal.

| prop name | type         | default value | description                                 |                              |
| --------- | ------------ | ------------- | ------------------------------------------- | ---------------------------- |
| children  | `ReactNode`  |               | childrens of modal component                |
| isOpen    | `boolean`    |               | The state of the modal being open or closed |
| onToggle  | `() => void` |               | the handler function to toggle modal        |
| position  | `'center'    | 'bottom'`     | `center`                                    | position of modal on display |

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
import { Modal } from '...';

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
