# React Custom Modal Library

Welcome to the React Custom Modal Library documentation! This library is designed to help you effortlessly integrate modals into your React applications.

## Installation

To install the library, run the following command in your project directory:

```bash
npm install ollie-modal-components
```

## Usage

Here is a simple example to get you started with using the React Custom Modal.

```javascript
import React, { useState } from "react";
import Modal from "ollie-modal-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} position="center">
        <Modal.ModalHeader>
          <Modal.ModalTitle>Modal Title Here</Modal.ModalTitle>
          <Modal.ModalCloseButton onClick={closeModal}>
            Close
          </Modal.ModalCloseButton>
        </Modal.ModalHeader>
        <Modal.ModalContent>
          Your modal content goes here. Feel free to include text, images, or
          any React component.
        </Modal.ModalContent>
        <Modal.ModalFooter>
          <Modal.ModalLongButton onClick={closeModal}>
            Confirm
          </Modal.ModalLongButton>
        </Modal.ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

The Modal component accepts the following props:

- `isOpen`: Boolean indicating whether the modal is open or not.
- `onClose`: Function to be called when the modal needs to be closed.
- `position`: String indicating the modal's position (top, bottom, or center).
- `style`: (Optional) CSSProperties to customize the style of the modal.

## Styling

This library uses styled-components for styling. You can override the default styles by extending the styled components exported from the library.

```react
  <Modal.ModalCloseButton
      style={{ backgroundColor: "blue" }}
      ...
  >
      X
  </Modal.ModalCloseButton>
```
