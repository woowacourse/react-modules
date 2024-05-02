# Button Module

## Description

This is a library for simple modal components.

There are two methods to close the modal: clicking on a button or a close icon.

The modal can be positioned at the center of the screen (center option) or at the bottom edge of the screen (bottom option).

Also, You can place children components inside the Modal component.

Feel free to utilize the modal by adding events to your children components!

<br />

## Install

```
npm i woowacourse-6th-react-modal-component
```

<br />

## Usage

```tsx
import React from 'react';
import { Modal, useModal } from 'woowacourse-react-modal-component';
import ChildrenComponents from './ChildrenComponents';

function App() {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          position="center" // 'center' | 'bottom'
          title="Select Card Company" // string
          closeOption="button" // 'icon' | 'button'
        >
          <ChildrenComponents />
        </Modal>
      )}
    </>
  );
}

export default App;
```
