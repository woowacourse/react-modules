# Button Module

## Description

This is a library for simple modal components.

There are two methods to close the modal: clicking on a button or a close icon.

The modal can be positioned at the center of the screen (center option) or at the bottom edge of the screen (bottom option). Additionally, the size of the modal can be adjusted to be small, medium, or large.

Also, You can place children components inside the Modal component.

Feel free to utilize the modal by adding events to your children components!

## Install

`npm i woowacourse-react-modal-component`

## **Component Props**

### Modal

| argument    | description                          | type                 | default value |
| ----------- | ------------------------------------ | -------------------- | ------------- |
| toggleModal | Open/Close the modal                 | `function`           | -             |
| isOpen      | The state of the modal               | `boolean`            | false         |
| position    | The position of the modal (optional) | center, bottom       | center        |
| size        | The size of the modal (optional)     | small, medium, large | medium        |

### Modal Button

| argument          | description                                                   | type                   | default value |
| ----------------- | ------------------------------------------------------------- | ---------------------- | ------------- |
| category          | The type of the button                                        | alert, confirm, prompt | -             |
| handleCloseButton | Function to close the modal                                   | `function`             | -             |
| onConfirm         | Function called when the confirm button is clicked (optional) | `function`             | -             |

### Modal Header

| argument          | description                  | type         | default value |
| ----------------- | ---------------------------- | ------------ | ------------- |
| title             | The title of the modal       | `string`     | -             |
| closeOption       | Option for closing the modal | icon, button | -             |
| handleCloseButton | Function to close the modal  | `function`   | -             |

### Modal Input

| argument      | description                                  | type       | default value                                      |
| ------------- | -------------------------------------------- | ---------- | -------------------------------------------------- |
| value         | The value of Modal Input                     | `string`   | -                                                  |
| isOpen        | The state of the modal                       | `boolean`  | false                                              |
| onChangeInput | Function called when the input value changes | `function` | `(e: React.ChangeEvent<HTMLInputElement>) => void` |

### Modal SubTitle

| Prop     | Description               | Type     | Default Value |
| -------- | ------------------------- | -------- | ------------- |
| subTitle | The subtitle of the modal | `string` | -             |

### Modal Title

| Prop  | Description            | Type     | Default Value |
| ----- | ---------------------- | -------- | ------------- |
| title | The title of the modal | `string` | -             |

## **Usage**

```tsx
import React, { useEffect, useState } from 'react';
import './reset.css';

import styled from 'styled-components';
import { Modal, useModal } from 'woowacourse-react-modal-component';

const ButtonContainer = styled.div`
  margin-bottom: 5%;
`;

function App() {
  const { isOpen: isAlertOpen, toggleModal: toggleAlertModal } = useModal();
  const { isOpen: isConfirmOpen, toggleModal: toggleConfirmModal } = useModal();
  const { isOpen: isPromptOpen, toggleModal: togglePromptModal } = useModal();

  const [inputValue, setInputValue] = useState('');

  // Reset Input Value
  useEffect(() => {
    if (!isPromptOpen) {
      setInputValue('');
    }
  }, [isPromptOpen]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChangeInput');
    const value = e.target.value;
    setInputValue(value);
  };

  const onConfirm = () => {
    console.log('onConfirm');
  };

  return (
    <>
      <ButtonContainer>
        <button onClick={() => toggleAlertModal()}>Alert!</button>
        <button onClick={() => toggleConfirmModal()}>Confirm!</button>
        <button onClick={() => togglePromptModal()}>Prompt!</button>
      </ButtonContainer>

      {/* alert modal */}
      <Modal toggleModal={toggleAlertModal} isOpen={isAlertOpen}>
        <Modal.Header
          title="아이디를 입력해 주세요."
          closeOption="button"
          handleCloseButton={toggleAlertModal}
        />
        <Modal.SubTitle subTitle="아이디는 필수로 입력해야 합니다." />
        <Modal.Button category="alert" handleCloseButton={toggleAlertModal} />
      </Modal>

      {/* confirm modal */}
      <Modal
        toggleModal={toggleConfirmModal}
        position="center"
        isOpen={isConfirmOpen}
        size="medium"
      >
        <Modal.Header
          title="카드를 삭제하시겠습니까?"
          closeOption="button"
          handleCloseButton={toggleConfirmModal}
        />
        <Modal.SubTitle subTitle="삭제하면 복구하실 수 없습니다." />
        <Modal.Button
          category="confirm"
          handleCloseButton={toggleConfirmModal}
          onConfirm={onConfirm}
        />
      </Modal>

      {/* prompt modal */}
      <Modal
        toggleModal={togglePromptModal}
        position="center"
        isOpen={isPromptOpen}
        size="large"
      >
        <Modal.Header
          title="쿠폰 번호를 입력해 주세요."
          closeOption="button"
          handleCloseButton={togglePromptModal}
        />
        <Modal.Input
          value={inputValue}
          isOpen={isPromptOpen}
          onChangeInput={onChangeInput}
        />
        <Modal.Button
          category="prompt"
          handleCloseButton={togglePromptModal}
          onConfirm={onConfirm}
        />
      </Modal>
    </>
  );
}

export default App;
```
