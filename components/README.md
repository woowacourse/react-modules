# React Modal Component Library

A customizable, accessible modal component library for React applications, supporting common modal types including `alert`, `confirm`, `prompt`, and `custom` modals. Built with accessibility in mind, keyboard focus is automatically trapped within open modals, and the Escape key closes the modal.

## ✨ Features

- ✅ Prebuilt modal types: `Alert`, `Confirm`, `Prompt`, `Custom`
- ✅ Keyboard accessibility with `Escape` to close and focus trap
- ✅ Customizable size and position (`small`, `medium`, `large`, etc.)
- ✅ Easily styled with Emotion
- ✅ Fully typed with TypeScript

## 🚀 Usage

### Basic Example

```tsx
import Modal from 'your-modal-library-name';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  type='confirm'
  title='Delete Item'
  message='Are you sure you want to delete this item?'
  onConfirm={() => handleDelete()}
/>;
```

## Modal Types

### 1. Alert Modal

```tsx
<Modal isOpen={true} onClose={handleClose} type='alert' message='This is an alert message!' />
```

### 2. Confirm Modal

```tsx
<Modal isOpen={true} onClose={handleClose} onConfirm={handleConfirm} type='confirm' message='Are you sure?' />
```

### 3. Prompt Modal

```tsx
<Modal isOpen={true} onClose={handleClose} onSubmit={(input) => console.log(input)} type='prompt' />
```

### 4. Custom Modal

```tsx
<Modal isOpen={true} onClose={handleClose} type='custom'>
  <div>Custom modal content goes here</div>
</Modal>
```

## Props

| Prop        | Type                                           | Description                                    | Required |
| ----------- | ---------------------------------------------- | ---------------------------------------------- | -------- |
| `isOpen`    | `boolean`                                      | Whether the modal is open                      | No       |
| `onClose`   | `() => void`                                   | Function to call when modal closes             | Yes      |
| `type`      | `'alert' \| 'confirm' \| 'prompt' \| 'custom'` | Type of modal to render                        | No       |
| `title`     | `string`                                       | Title of the modal                             | No       |
| `message`   | `string`                                       | Message to display inside alert/confirm modals | No       |
| `onConfirm` | `() => void`                                   | Confirm action for `confirm` modals            | No       |
| `onSubmit`  | `(value: string) => void`                      | Submit handler for `prompt` modals             | No       |
| `children`  | `React.ReactNode`                              | Custom modal content for `custom` type         | No       |
| `size`      | `'small' \| 'medium' \| 'large'`               | Modal size                                     | No       |
| `position`  | `'top' \| 'center' \| 'bottom'`                | Modal position on screen                       | No       |

## Accessibility

- Focus trap inside modal using Tab / Shift+Tab
- Closes with Escape key
- Buttons and inputs are keyboard-focusable

## 📦 Installation

```bash
npm install your-modal-library-name
# or
yarn add your-modal-library-name
```
