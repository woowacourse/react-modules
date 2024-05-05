# fe-custom-modal
- Simple modal component module made by paran and fe

## Quick Start

- install with npm:
```bash
npm install fe-custom-modal
```

## Properties

### title (optional)

- content
- position (optional) `default: left`
- color (optional) `default: black`
- font-size (optional) `default: 18px`

### subtitle (optional)

- content
- color (optional) `default: lightgrey`
- font-size (optional) `default: 12px`

### closeButton

- color (optional) `default: black`
- onClose 

### confirmButton (optional)

- background-color (optional) `default: black`
- font-color (optional) `default: white`
- content
- onConfirm

### cancelButton (optional)

- background-color (optional) `default: white`
- color (optional) `default: black`
- content
- onCancel

### modalSize (optional)

- width (optional)
  - `default: 80%` when modalPosition is `center`
  - `default: 100%` when modalPosition is `bottom`
- height (optional) `default: fit-content`
- minWidth (optional)
- minHeight (optional)

### background-color (optional)

`default: white`

### border-radius (optional)

`default: 5px`

### modalPosition

`value: 'center' | 'bottom'`

### preventCloseOnOutsideClick (optional)

`default: false`

### children

---
## Storybook
link: https://6631dad3ab74b00107d09938-mbvlnyhhgn.chromatic.com/