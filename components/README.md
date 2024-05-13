# woowacourse-todari-components

## Install

```
npm i woowacourse-todari-components
```

## Storybook

click [here](https://663f331668429975639822e1-qfzjoxtovx.chromatic.com/?path=/docs/components-button--docs) for check storybook page

## API

### Top-Level Exports

- `<Button>`
- `<CustomModal>`
- `<AlertModal>`
- `<ConfirmModal>`
- `<PromptModal>`

### `<Button>`

#### Usage

Add the `<Button>` component near the top of your application's tree.

```tsx
import { Button } from 'woowacourse-todari-components';

const App = () => {
  return (
    <Button
      text="button"
      onClick={() => alert('clicked')}
      size="medium"
      width="full"
      buttonStyle="primary"
      primaryColor="#1C77C1"
    />
  );
};
```

#### props

| props                     | type                                              | description                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `size` (optional)         | ButtonSize (`medium` : default, `large`,`small` ) | Specifies the size of the button. Choices are "small", "medium" (default), or "large", affecting the button’s padding and font size.                                           |
| `width` (optional)        | ButtonWidth (`fixed`: default, `full`, `fit`)     | Determines the width setting for the button\'s CSS. "fixed" maintains a constant width, "fit" adjusts to the text size, and "full" expands to the full width of its container. |
| `buttonStyle` (optional)  | ButtonStyle(`primary`: default, `border`, `text`) | Specifies the style of the button. "primary" for a solid fill, "border" for a bordered style without fill, and "text" for a flat style without border or background.           |
| `primaryColor` (optional) | string (`#333333` : default)                      | Sets the primary color of the button, used for the background in "primary" style, and the text and border in "border" and "text" styles.                                       |
| `disabled` (optional)     | string (`#333333` : default)                      | Specifies whether the button is disabled. When true, the button becomes unclickable and is usually styled to indicate it is inactive.                                          |
| `text`                    | string                                            | The text displayed on the button. This is the primary content of the button and should clearly communicate its action.                                                         |
| `onClick`                 | Function                                          | The function that is called when the button is clicked. This handler is triggered on user interaction with the button.                                                         |

### `<CustomModal>`

#### Usage

Add the `<CustomModal>` component near the top of your application's tree.

```tsx
import { CustomModal } from 'woowacourse-todari-components';

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
      <CustomModal
        isOpened={modalOpened}
        onClose={handleModalClose}
        title="Todal Modal"
        description="This is for woowacourse mission"
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
      >
        <div
          style={{
            backgroundColor: '#dddddd',
            padding: '8px',
            height: '50vh',
          }}
        >
          Children Area
        </div>
      </CustomModal>
    </>
  );
};
```

#### props

| props                        | type                                              | description                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpened`                   | boolean                                           | Controls whether the modal is visible. Set to true to show the modal and false to hide it.                                                                                                                              |
| `size` (optional)            | ButtonSize (`medium` : default, `large`,`small` ) | Specifies the size of the modal. Options include "small", "medium" (default), and "large".                                                                                                                              |
| `showCloseButton` (optional) | boolean (`false` : default)                       | Determines if a close button is displayed on the modal. Set to true to display the button.                                                                                                                              |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`)       | Sets the position of the modal on the screen. Options are "center" (default) or "bottom".                                                                                                                               |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)         | Defines the layout of the buttons within the modal.Options are "row" for horizontal arrangement or "column" for vertical arrangement.                                                                                   |
| `primaryColor` (optional)    | string (`#333333` : default)                      | Sets the primary color of the modal, influencing the header, footer, and primary buttons.                                                                                                                               |
| `onClose`                    | Function                                          | Function to be called when the modal is requested to be closed, such as clicking on a close button.                                                                                                                     |
| `title` (optional)           | string                                            | The title text to display at the top of the modal.                                                                                                                                                                      |
| `description` (optional)     | string                                            | A brief description or content text that appears inside the modal.                                                                                                                                                      |
| `children` (optional)        | JSX.Element                                       | Custom content to be displayed in the modal, allowing for flexible modal content configuration.                                                                                                                         |
| `primaryButton` (optional)   | {text:string, style:ButtonStyle }                 | Configuration for the primary action button within the modal. This includes text, click behavior, and styling options such as size, width, and button style.Use this to define the main actionable button in the modal. |
| `secondaryButton` (optional) | {text:string, style:ButtonStyle }                 | Configuration for the secondary action button within the modal. This button typically handles less critical actions. Configure its text, click behavior, and appearance similar to the primary button.                  |

### `<AlertModal>`

#### Usage

Add the `<AlertModal>` component near the top of your application's tree.

```tsx
import { AlertModal } from 'woowacourse-todari-components';

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
      <AlertModal
        isOpened={modalOpened}
        onClose={handleModalClose}
        title="Todal Modal"
        description="This is for woowacourse mission"
        showCloseButton={false}
      />
    </>
  );
};
```

#### props

| props                        | type                                              | description                                                                                                                           |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpened`                   | boolean                                           | Controls whether the modal is visible. Set to true to show the modal and false to hide it.                                            |
| `size` (optional)            | ButtonSize (`medium` : default, `large`,`small` ) | Specifies the size of the modal. Options include "small", "medium" (default), and "large".                                            |
| `showCloseButton` (optional) | boolean (`false` : default)                       | Determines if a close button is displayed on the modal. Set to true to display the button.                                            |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`)       | Sets the position of the modal on the screen. Options are "center" (default) or "bottom".                                             |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)         | Defines the layout of the buttons within the modal.Options are "row" for horizontal arrangement or "column" for vertical arrangement. |
| `primaryColor` (optional)    | string (`#333333` : default)                      | Sets the primary color of the modal, influencing the header, footer, and primary buttons.                                             |
| `onClose`                    | Function                                          | Function to be called when the modal is requested to be closed, such as clicking on a close button.                                   |
| `onConfirm`                  | Function                                          | Function to be called when the confirm action is triggered, typically via a confirm button.button.                                    |
| `title` (optional)           | string                                            | The title text to display at the top of the modal.                                                                                    |
| `description` (optional)     | string                                            | A brief description or content text that appears inside the modal.                                                                    |
| `children` (optional)        | JSX.Element                                       | Custom content to be displayed in the modal, allowing for flexible modal content configuration.                                       |

### `<ConfirmModal>`

#### Usage

Add the `<ConfirmModal>` component near the top of your application's tree.

```tsx
import { ConfirmModal } from 'woowacourse-todari-components';

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
      <ConfirmModal
        isOpened={modalOpened}
        onClose={handleModalClose}
        onConfirm={() => alert('confirmed!')}
        title="Todal Modal"
        description="This is for woowacourse mission"
        showCloseButton={false}
      />
    </>
  );
};
```

#### props

| props                        | type                                              | description                                                                                                                           |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpened`                   | boolean                                           | Controls whether the modal is visible. Set to true to show the modal and false to hide it.                                            |
| `size` (optional)            | ButtonSize (`medium` : default, `large`,`small` ) | Specifies the size of the modal. Options include "small", "medium" (default), and "large".                                            |
| `showCloseButton` (optional) | boolean (`false` : default)                       | Determines if a close button is displayed on the modal. Set to true to display the button.                                            |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`)       | Sets the position of the modal on the screen. Options are "center" (default) or "bottom".                                             |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)         | Defines the layout of the buttons within the modal.Options are "row" for horizontal arrangement or "column" for vertical arrangement. |
| `primaryColor` (optional)    | string (`#333333` : default)                      | Sets the primary color of the modal, influencing the header, footer, and primary buttons.                                             |
| `onClose`                    | Function                                          | Function to be called when the modal is requested to be closed, such as clicking on a close button.                                   |
| `onConfirm`                  | Function                                          | Function to be called when the confirm action is triggered, typically via a confirm button.button.                                    |
| `title` (optional)           | string                                            | The title text to display at the top of the modal.                                                                                    |
| `description` (optional)     | string                                            | A brief description or content text that appears inside the modal.                                                                    |
| `children` (optional)        | JSX.Element                                       | Custom content to be displayed in the modal, allowing for flexible modal content configuration.                                       |

### `<PromptModal>`

#### Usage

Add the `<PromptModal>` component near the top of your application's tree.

```tsx
import { PromptModal } from 'woowacourse-todari-components';

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
      <PromptModal
        isOpened={modalOpened}
        onClose={handleModalClose}
        onConfirm={(value) => alert(`your email is '${value}'`)}
        title="Email"
        description="write your email"
        showCloseButton={false}
        validateOnChange={(value) => {
          if (/^[a-zA-Z0-9@.]+$/.test(value)) {
            return { isValid: true, errorMessage: '' };
          }

          return { isValid: false, errorMessage: 'invalid input' };
        }}
        validateOnBlur={(value) => {
          if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            return { isValid: true, errorMessage: '' };
          }

          return { isValid: false, errorMessage: 'invalid email' };
        }}
      />
    </>
  );
};
```

#### props

| props                        | type                                              | description                                                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isOpened`                   | boolean                                           | Controls whether the modal is visible. Set to true to show the modal and false to hide it.                                                                                                                                                                                                 |
| `size` (optional)            | ButtonSize (`medium` : default, `large`,`small` ) | Specifies the size of the modal. Options include "small", "medium" (default), and "large".                                                                                                                                                                                                 |
| `showCloseButton` (optional) | boolean (`false` : default)                       | Determines if a close button is displayed on the modal. Set to true to display the button.                                                                                                                                                                                                 |
| `modalPosition` (optional)   | ModalPosition(`center` : default, `bottom`)       | Sets the position of the modal on the screen. Options are "center" (default) or "bottom".                                                                                                                                                                                                  |
| `buttonPosition` (optional)  | ButtonPosition(`row` : default, `column`)         | Defines the layout of the buttons within the modal.Options are "row" for horizontal arrangement or "column" for vertical arrangement.                                                                                                                                                      |
| `primaryColor` (optional)    | string (`#333333` : default)                      | Sets the primary color of the modal, influencing the header, footer, and primary buttons.                                                                                                                                                                                                  |
| `onClose`                    | Function                                          | Function to be called when the modal is requested to be closed, such as clicking on a close button.                                                                                                                                                                                        |
| `onConfirm`                  | Function                                          | Function to be called when the confirm action is triggered, typically via a confirm button.button.                                                                                                                                                                                         |
| `title` (optional)           | string                                            | The title text to display at the top of the modal.                                                                                                                                                                                                                                         |
| `description` (optional)     | string                                            | A brief description or content text that appears inside the modal.                                                                                                                                                                                                                         |
| `initialValue` (optional)    | string                                            | The initial value to populate in the input field within the modal. This is useful for starting the modal with predefined content.                                                                                                                                                          |
| `validateOnChange`           | Function                                          | A function that validates the input field’s content in real-time as the user types. It should return an object with `isValid` boolean and `errorMessage` string. Options include validation for numeric input ("onlyNumber"), alphabetic input ("onlyEnglish"), or no validation ("none"). |
| `validateOnCBlur`            | Function                                          | A function that validates the input field’s content when the field loses focus. It should ensure the input meets certain criteria before the form can be submitted, like having exactly 10 characters ("matchLength10") or no validation ("none").                                         |
| `children` (optional)        | JSX.Element                                       | Custom content to be displayed in the modal, allowing for flexible modal content configuration.                                                                                                                                                                                            |
