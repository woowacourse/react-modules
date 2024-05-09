# paran-simple-modal

- Simple modal component module made by paran

# How to install

```
npm install paran-simple-modal
```

# Components

## Container Component

The Container component is used to wrap and position content within a modal.

### Props:

- **onBackdropClick** (() => void, optional): Callback function triggered when clicking on the backdrop.

- **guidanceSize** ("small" | "medium" | "large", optional, default: "medium"): Sets the size of the container.

- **position** ("center" | "bottom", optional, default: "center"): Sets the position of the container.

- **children** (ReactNode, required): The content to be displayed within the container.

- **...restProps**: Supports additional div attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { Container } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal
      onBackdropClick={() => console.log("Backdrop clicked")}
      guidanceSize="medium"
      position="center"
    >
      {/* Content inside the container */}
    </Modal>
  );
}
```

# CloseButton Component

The CloseButton component is used to display a close button typically used in modals or dialogs.

⚠️ Always fixed on the top right!

### Props:

- **guidanceSize** ("small" | "medium" | "large", optional, default: "medium"): Sets the size of the close button.
- **...restProps**: Supports additional SVG attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { CloseButton } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal>
      {/* Modal content */}
      <Modal.CloseButton guidanceSize="medium" />
    </Modal>
  );
}
```

## Modal.Title Component

The Modal.Title component is used to display the title and subtitle of a modal window.

### Props:

- **title** (string, required): Sets the title of the modal.

- **subtitle** (string, optional): Sets the subtitle of the modal.

- **position** ("left" | "center", optional, default: "left"): Determines the position of the title and subtitle.

- **titleProps** (ComponentProps<"h1">, optional): Sets additional properties for the title element(`<h1>`).

- **subtitleProps** (ComponentProps<"h2">, optional): Sets additional properties for the subtitle element(`<h2>`).

- **...restProps**: Supports additional h1, h2 attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { ModalTitle } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal>
      <Modal.ModalTitle
        title="Modal Title"
        subtitle="Modal Subtitle"
        position="left"
      />
      {/* Additional modal contents */}
    </Modal>
  );
}
```

## ConfirmButton Component

The ConfirmButton component is used to display a button typically used for confirming actions within modals or dialogs.

### Props:

- **content** (string, optional): The text content of the button.
- **guidanceSize** ("small" | "medium" | "large", optional, default: "large"): Sets the size of the button.
- **...restProps**: Supports additional button attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { ConfirmButton } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal>
      {/* Modal content */}
      <Modal.ConfirmButton content="Confirm" guidanceSize="large" />
    </Modal>
  );
}
```

## CancelButton Component

The CancelButton component is used to display a button typically used for canceling actions within modals or dialogs.

### Props:

- **content** (string, optional): The text content of the button.
- **guidanceSize** ("small" | "medium" | "large", optional, default: "medium"): Sets the size of the button.
- **...restProps**: Supports additional button attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { CancelButton } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal>
      {/* Modal content */}
      <Modal.CancelButton content="Cancel" guidanceSize="medium" />
    </Modal>
  );
}
```

## InputForm Component

The InputForm component is used to display an input field typically used within modals or forms.

### Props:

- **title** (string, optional): The title or label for the input field.
- **guidanceSize** ("small" | "medium" | "large", optional, default: "large"): Sets the size of the input field.
- **...restProps**: Supports additional input attributes.

### Example Usage:

```tsx
import { Modal } from "paran-simple-modal";
import { InputForm } from "paran-simple-modal";

function MyModal() {
  return (
    <Modal>
      {/* Modal content */}
      <Modal.InputForm title="Enter your name" guidanceSize="large" />
    </Modal>
  );
}
```

# Example Code

```tsx
import React, { useState } from "react";
import { Modal } from "./lib/index";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          guidanceSize="large"
          position="bottom"
          onBackdropClick={() => setIsOpened(false)}
        >
          <Modal.Title
            title="Modal Title"
            subtitle="Modal subtitle"
            position="left"
          />
          <div>Children</div>
          <Modal.InputForm guidanceSize="small" placeholder="placeholder" />
          <Modal.CancelButton
            onClick={() => setIsOpened(false)}
            content="Cancel"
            guidanceSize="medium"
          />
          <Modal.ConfirmButton
            onClick={() => alert("Confirmed")}
            content="Confirm"
            guidanceSize="large"
          />
          <Modal.CloseButton
            onClick={() => setIsOpened(false)}
            guidanceSize="medium"
          />
        </Modal>
      ) : (
        <button onClick={() => setIsOpened(true)}>Open Modal</button>
      )}
    </>
  );
}

export default App;
```
