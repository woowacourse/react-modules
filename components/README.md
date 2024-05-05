# woowacourse-todari-components

## Install

```
npm i woowacourse-todari-components
```

## Usage

Add the `<Modal>` or `<Button>` component near the top of your application's tree.

```tsx
import { Modal, Button } from 'woowacourse-todari-components';

const App = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  return (
    <>
      <Button
        text="open modal"
        onClick={handleModalOpen}
        size="large"
        width="full"
        buttonStyle="primary"
        primaryColor="#1C77C1"
      />
      <Modal
        isOpened={modalOpened}
        closeModal={handleModalClose}
        title="Todal Modal"
        description="This is for woowacourse mission"
        children={
          <div
            style={{
              backgroundColor: '#dddddd',
              padding: '8px',
              height: '50vh',
            }}
          >
            Children Area
          </div>
        }
        modalPosition="bottom"
        primaryButton={{
          text: 'DO SOMETHING!',
          onClick: () => {},
          size: 'medium',
          width: 'full',
        }}
        secondaryButton={{
          text: 'Cancel',
          onClick: handleModalClose,
          size: 'medium',
          width: 'fit',
        }}
        buttonPosition="row"
        showCloseButton={false}
      />
    </>
  );
};
```

## API

### Top-Level Exports

- `<Button>`
- `<Modal>`

### `<Button>`

#### props

| props                     | type                                              | description                                     |
| ------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| `text`                    | string                                            | The text displayed on the button.               |
| `onClick`                 | Function                                          | The function called when the button is clicked. |
| `size` (optional)         | ButtonSize (`medium` : default, `large`,`small` ) | The size of the button.                         |
| `width` (optional)        | ButtonWidth (`fixed`: default, `full`, `fit`)     | The width setting for the button's CSS.         |
| `buttonStyle` (optional)  | ButtonStyle(`primary`: default, `border`, `text`) | The style of the button.                        |
| `primaryColor` (optional) | string (`#333333` : default)                      | The primary color of the button.                |

### `<Modal>`

#### props

| props                        | type                                        | description                                                             |
| ---------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| `isOpened`                   | boolean                                     | Determines whether the modal is displayed.                              |
| `closeModal`                 | Function                                    | The function called when the modal is closed.                           |
| `title` (optional)           | string                                      | The text displayed at the top of the modal.                             |
| `description` (optional)     | string                                      | The text displayed in the middle of the modal.                          |
| `children` (optional)        | JSX.Element                                 | The element displayed in the middle of the modal.                       |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`) | The position of the modal within the window.                            |
| `primaryButton` (optional)   | {text:string, style:ButtonStyle }           | The primary button at the bottom of the modal.                          |
| `secondaryButton` (optional) | {text:string, style:ButtonStyle }           | The secondary button at the bottom of the modal.                        |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)   | The layout orientation of the buttons at the bottom of the modal.       |
| `primaryColor` (optional)    | string (`#333333` : default)                | The primary color used for the buttons.                                 |
| `showCloseButton` (optional) | boolean (`false` : default)                 | Determines whether a close button is displayed at the top of the modal. |
