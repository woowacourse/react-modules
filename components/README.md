# hain-tain-components

### Features

🚨 This is a module created for practice, so be careful what you download.

- It's easy to implement modal and button components

### Install

```
npm install hain-tain-components
```

### Quick start

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

### API

#### Top-Level Exports

- `Button`
- `Modal`

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

| props                        | type                                        | description                                                             |
| ---------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| `isOpened`                   | boolean                                     | Determines whether the modal is displayed.                              |
| `onClose`                    | Function                                    | The function called when the modal is closed.                           |
| `zIndex` (optional)          | number (`0`: default)                       | The number setting for the modal's z-index.                             |
| `title` (optional)           | string                                      | The text displayed at the top of the modal.                             |
| `description` (optional)     | string                                      | The text displayed in the middle of the modal.                          |
| `children` (optional)        | JSX.Element                                 | The element displayed in the middle of the modal.                       |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`) | The position of the modal within the window.                            |
| `primaryButton` (optional)   | {text:string, style:ButtonStyle }           | The primary button at the bottom of the modal.                          |
| `secondaryButton` (optional) | {text:string, style:ButtonStyle }           | The secondary button at the bottom of the modal.                        |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)   | The layout orientation of the buttons at the bottom of the modal.       |
| `primaryColor` (optional)    | string (`#333333` : default)                | The primary color used for the buttons.                                 |
| `showCloseButton` (optional) | boolean (`false` : default)                 | Determines whether a close button is displayed at the top of the modal. |

### Contributors

[`@hain-tain`](https://github.com/Hain-tain)
[`@Todari`](https://github.com/Todari)
