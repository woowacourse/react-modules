# hain-tain-components

### Features

🚨 This is a module created for practice, so be careful what you download.

- It's easy to implement modal and button components

### Install

```
npm install hain-tain-components
```

### Quick start

- **Modal**

```js
import React, { useState } from 'react';

import { Button, Modal } from 'hain-tain-components';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Button
        text="open modal"
        onClick={() => {
          setIsOpened(true);
        }}
      />
      <Modal
        isOpened={isOpened}
        closeModal={handleClose}
        title="This is Title"
        description="This is description"
        children={
          <>
            <div style={{ backgroundColor: '#f3e3da', height: '100px' }}>
              This is children
            </div>
          </>
        }
        buttonPosition="column"
        primaryButton={{
          text: 'confirm',
          onClick: () => {
            alert('confirm');
          },
        }}
        secondaryButton={{ text: 'close', onClick: handleClose }}
      />
    </>
  );
}

export default App;
```

- **AlertModal**

```js
import { AlertModal, Button, useModal } from 'hain-tain-components';
import React from 'react';

const UsageAlertModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="open AlertModal"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <AlertModal
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="AlertModal"
        content="This is a modal for notifications. There is only a confirmation button."
        handleConfirm={() => {
          alert('Confirm');
        }}
      ></AlertModal>
    </>
  );
};

export default UsageAlertModal;
```

- **ConfirmModal**

```js
import { ConfirmModal, Button, useModal } from 'hain-tain-components';
import React from 'react';

const UsageConfirmModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="open ConfirmModal"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <ConfirmModal
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="ConfirmModal"
        content="This is a modal for confirmation. There is a Cancel button and a Confirm button."
        handleConfirm={() => {
          alert('Confirm');
        }}
      ></ConfirmModal>
    </>
  );
};

export default UsageConfirmModal;
```

- **PromptModal**

```js
import { Button } from '../lib';
import PromptModal from '../lib/Modal/PromptModal/PromptModal';
import React from 'react';
import useInput from '../lib/hooks/useInput';
import useModal from '../lib/hooks/useModal';

const UsagePromptModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();
  const { value, handleChange, resetValue } = useInput();

  return (
    <>
      <Button
        text="open PromptModal"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <PromptModal
        value={value}
        onChange={handleChange}
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="PromptModal"
        content="This is a modal for receiving input from the user. Setting the value(state) for input is required."
        handleConfirm={() => {
          alert(`Confirm\nvalue: ${value}`);
          resetValue();
        }}
      ></PromptModal>
    </>
  );
};

export default UsagePromptModal;
```

### API

#### Top-Level Exports

- `Button`
- `Modal`
- `AlertModal`
- `ConfirmModal`
- `PromptModal`

- `useInput`
- `useModal`

#### `<Button>`

##### props

| props                     | type                                              | description                                     |
| ------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| `text`                    | string                                            | The text displayed on the button.               |
| `onClick`                 | Function                                          | The function called when the button is clicked. |
| `size` (optional)         | ButtonSize (`medium` : default, `large`,`small` ) | The size of the button.                         |
| `width` (optional)        | ButtonWidth (`fixed`: default, `full`, `fit`)     | The width setting for the button's CSS.         |
| `buttonStyle` (optional)  | ButtonStyle(`primary`: default, `border`, `text`) | The style of the button.                        |
| `primaryColor` (optional) | string (`#333333` : default)                      | The primary color of the button.                |

#### `<Modal>`

##### props

| props                             | type                                                     | description                                                             |
| --------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| `isOpened`                        | boolean                                                  | Determines whether the modal is displayed.                              |
| `closeModal`                      | Function                                                 | The function called when the modal is closed.                           |
| `size` (optional)                 | ModalSize (`small`, `medium`, `large` : default )        | Determine the size of the modal                                         |
| `title` (optional)                | string                                                   | The text displayed at the top of the modal.                             |
| `description` (optional)          | string                                                   | The text displayed in the middle of the modal.                          |
| `children` (optional)             | JSX.Element                                              | The element displayed in the middle of the modal.                       |
| `modalPosition` (optional)        | ModalPosition(`center` : default, `bottom`)              | The position of the modal within the window.                            |
| `primaryButton` (optional)        | {text:string, style:ButtonStyle }                        | The primary button at the bottom of the modal.                          |
| `secondaryButton` (optional)      | {text:string, style:ButtonStyle }                        | The secondary button at the bottom of the modal.                        |
| `buttonPosition` (optional)       | ButtonPosition(`row` : default, `column`)                | The layout orientation of the buttons at the bottom of the modal.       |
| `buttonJustifyContent` (optional) | ButtonJustifyContent(`center`: default ,`left`, `right`) | Determine the location layout of the buttons                            |
| `primaryColor` (optional)         | string (`#333333` : default)                             | The primary color used for the buttons.                                 |
| `showCloseButton` (optional)      | boolean (`false` : default)                              | Determines whether a close button is displayed at the top of the modal. |

#### `<AlertModal>`

##### props

| props                             | type                                                     | description                                             |
| --------------------------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| `isOpened`                        | boolean                                                  | Determines whether the modal is displayed.              |
| `closeModal`                      | Function                                                 | The function called when the modal is closed.           |
| `handleConfirm`(optional)         | Function                                                 | The function called when the confirm button is pressed. |
| `size` (optional)                 | ModalSize (`small`, `medium`, `large` : default )        | Determine the size of the modal.                        |
| `title` (optional)                | string                                                   | The text displayed at the top of the modal.             |
| `description` (optional)          | string                                                   | The text displayed in the middle of the modal.          |
| `content` (optional)              | string                                                   | The main text displayed in the middle of the modal.     |
| `children` (optional)             | JSX.Element                                              | The element displayed in the middle of the modal.       |
| `modalPosition` (optional)        | ModalPosition(`center` : default, `bottom`)              | The position of the modal within the window.            |
| `buttonJustifyContent` (optional) | ButtonJustifyContent(`center` ,`left`, `right`: default) | Determine the location layout of the buttons.           |
| `primaryColor` (optional)         | string (`#333333` : default)                             | The primary color used for the buttons.                 |

#### `<ConfirmModal>`

##### props

| props                             | type                                                     | description                                             |
| --------------------------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| `isOpened`                        | boolean                                                  | Determines whether the modal is displayed.              |
| `closeModal`                      | Function                                                 | The function called when the modal is closed.           |
| `handleConfirm`(optional)         | Function                                                 | The function called when the confirm button is pressed. |
| `size` (optional)                 | ModalSize (`small`, `medium`, `large` : default )        | Determine the size of the modal.                        |
| `title` (optional)                | string                                                   | The text displayed at the top of the modal.             |
| `description` (optional)          | string                                                   | The text displayed in the middle of the modal.          |
| `content` (optional)              | string                                                   | The main text displayed in the middle of the modal.     |
| `children` (optional)             | JSX.Element                                              | The element displayed in the middle of the modal.       |
| `modalPosition` (optional)        | ModalPosition(`center` : default, `bottom`)              | The position of the modal within the window.            |
| `buttonJustifyContent` (optional) | ButtonJustifyContent(`center` ,`left`, `right`: default) | Determine the location layout of the buttons.           |
| `primaryColor` (optional)         | string (`#333333` : default)                             | The primary color used for the buttons.                 |

#### `<PromptModal>`

##### props

| props                             | type                                                     | description                                                                      |
| --------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `isOpened`                        | boolean                                                  | Determines whether the modal is displayed.                                       |
| `closeModal`                      | Function                                                 | The function called when the modal is closed.                                    |
| `value`                           | string                                                   | state of input.                                                                  |
| `onChange`                        | (e: React.ChangeEvent<HTMLInputElement>) => void         | Update the value state with a function that runs when the onchange event occurs. |
| `handleConfirm`(optional)         | Function                                                 | The function called when the confirm button is pressed.                          |
| `labelText` (optional)            | string                                                   | Text in the label.                                                               |
| `labelPosition` (optional)        | LabelPosition ("row" : default , "column" )              | Layout position of the label.                                                    |
| `placeholder` (optional)          | string                                                   | input placeholder.                                                               |
| `size` (optional)                 | ModalSize (`small`, `medium`, `large` : default )        | Determine the size of the modal.                                                 |
| `title` (optional)                | string                                                   | The text displayed at the top of the modal.                                      |
| `description` (optional)          | string                                                   | The text displayed in the middle of the modal.                                   |
| `content` (optional)              | string                                                   | The main text displayed in the middle of the modal.                              |
| `children` (optional)             | JSX.Element                                              | The element displayed in the middle of the modal.                                |
| `modalPosition` (optional)        | ModalPosition(`center` : default, `bottom`)              | The position of the modal within the window.                                     |
| `buttonJustifyContent` (optional) | ButtonJustifyContent(`center` ,`left`, `right`: default) | Determine the location layout of the buttons.                                    |
| `primaryColor` (optional)         | string (`#333333` : default)                             | The primary color used for the buttons.                                          |

#### `<Input>`

##### props

| props                      | type                                             | description                                                                      |
| -------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| `value`                    | string                                           | state of input.                                                                  |
| `onChange`                 | (e: React.ChangeEvent<HTMLInputElement>) => void | Update the value state with a function that runs when the onchange event occurs. |
| `labelText` (optional)     | string                                           | Text in the label.                                                               |
| `labelPosition` (optional) | LabelPosition ("row" : default , "column" )      | Layout position of the label.                                                    |
| `placeholder` (optional)   | string                                           | input placeholder.                                                               |
| `primaryColor` (optional)  | string (`#333333` : default)                     | The primary color.                                                               |

### Contributors

[`@hain-tain`](https://github.com/Hain-tain)
[`@Todari`](https://github.com/Todari)
