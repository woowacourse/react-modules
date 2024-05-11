# React Modal Component Library

## Description

This library provides an easy way to create and customize modals in your React application. It offers a set of reusable components for building different types of modals, including 'alert,' 'confirm', and 'prompt' modals. The library is built with styled-components, allowing for easy customization of styles.

There are two methods to close the modal: clicking on a button or a close icon. The modal can be positioned at the center of the screen (center option) or at the bottom edge of the screen (bottom option).

Also, you can place children components inside the Modal component. Feel free to utilize the modal by adding events to your children components!

<br />

## Installation

```
npm i woowacourse-6th-react-modal-component
```

<br />

## Components

### `Modal`

The base container component for the modal.

| Prop           | Description                                              | Default    |
| -------------- | -------------------------------------------------------- | ---------- |
| `$size`        | The size of the modal (`'small'`, `'medium'`, `'large'`) | `'medium'` |
| `$position`    | The position of the modal (`'center'`, `'bottom'`)       | `'center'` |
| `onCloseModal` | A function called when the modal is closed               | Required   |

### `Modal.Header`

The header component for the modal.

| Prop           | Description                                      | Default  |
| -------------- | ------------------------------------------------ | -------- |
| `title`        | The title of the header                          | Required |
| `isCloseIcon`  | Whether to show a close icon or not              | `false`  |
| `onCloseModal` | A function called when the close icon is clicked | Required |

### `Modal.Content`

The content component for the modal.

| Prop         | Description                                        | Default     |
| ------------ | -------------------------------------------------- | ----------- |
| `message`    | The message to display in the content              | `undefined` |
| `$direction` | The direction of the content (`'row'`, `'column'`) | `'column'`  |

### `Modal.Footer`

The footer component for the modal.

| Prop         | Description                                                  | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| `$direction` | The direction of the footer (`'row'`, `'column'`)            | `'row'` |
| `$align`     | The alignment of the footer (`'start'`, `'center'`, `'end'`) | `'end'` |

### `Modal.Button`

The button component for the modal.

| Prop               | Description                                               | Default     |
| ------------------ | --------------------------------------------------------- | ----------- |
| `$size`            | The size of the button (`'small'`, `'medium'`, `'large'`) | `'medium'`  |
| `$backgroundColor` | The background color of the button                        | `undefined` |
| `$color`           | The text color of the button                              | `undefined` |
| `onButtonClick`    | A function called when the button is clicked              | Required    |

### `Modal.Input`

The input component for the modal.

| Prop       | Description                                    | Default     |
| ---------- | ---------------------------------------------- | ----------- |
| `label`    | The label for the input field                  | `undefined` |
| `onChange` | A function called when the input value changes | Required    |

## Example Modals

### `AlertModal`

A simple alert modal.

```jsx
import { AlertModal } from 'react-modal-library';

function App() {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleClose = () => {
    console.log('Modal closed');
  };

  return (
    <AlertModal
      title="Alert"
      message="This is an alert modal."
      onConfirmButtonClick={handleConfirm}
      onModalClose={handleClose}
    />
  );
}
```

### `ConfirmModal`

A confirm/cancel modal.

```jsx
import { ConfirmModal } from 'react-modal-library';

function App() {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  const handleClose = () => {
    console.log('Modal closed');
  };

  return (
    <ConfirmModal
      title="Confirm"
      message="Are you sure you want to proceed?"
      onConfirmButtonClick={handleConfirm}
      onCancelButtonClick={handleCancel}
      onModalClose={handleClose}
    />
  );
}
```

### `PromptModal`

A modal that prompts for user input.

```jsx
import { PromptModal } from 'react-modal-library';

function App() {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  const handleClose = () => {
    console.log('Modal closed');
  };

  const handleInputChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  return (
    <PromptModal
      title="Prompt"
      message="Please enter your name:"
      label="Name"
      onConfirmButtonClick={handleConfirm}
      onCancelButtonClick={handleCancel}
      onModalClose={handleClose}
      onInputChange={handleInputChange}
    />
  );
}
```
