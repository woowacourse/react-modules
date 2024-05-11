# fe-custom-modal

- Simple modal component module made by paran and fe
- Can make your own unique modal, or use customed modal where you need

## Quick Start

install with npm:

```bash
npm install fe-custom-modal
```

## Customed Modal

### Alert modal:

- Display message and confirm button

### Confirm modal:

- Provide options and display cancel and confirm button

### Prompt modal:

- Display input field, cancel and confirm button

## Properties

### Modal Header

<details> 
  <summary>view header properties</summary>

|  domain 1   |  domain 2   | property | is optional | default value |
| :---------: | :---------: | :------: | :---------: | :-----------: |
| modalHeader |    title    |          |     yes     |               |
|             |             | content  |     no      |               |
|             |             | position |     yes     |     left      |
|             |             | fontSize |     yes     |     18px      |
|             |             |    as    |     yes     |      h3       |
|             |  subtitle   |          |     yes     |               |
|             |             | content  |     no      |               |
|             |             |  color   |     yes     |   lightgrey   |
|             |             | fontSize |     yes     |     12px      |
|             |             |    as    |     yes     |      h4       |
|             | closeButton |          |     no      |               |
|             |             | display  |     no      |               |
|             |             | onClose  |     no      |               |

</details>

### Modal Content

<details>
  <summary>view content properties</summary>

| domain 1     | domain 2 | property | is optional | default value |
| ------------ | -------- | -------- | ----------- | ------------- |
| modalContent |          | children | yes         | {}            |
|              |          |          |             |               |

</details>

### Modal Footer

<details>
  <summary>view footer properties</summary>

|  domain 1   |   domain 2    |       property        | is optional |       default value       |
| :---------: | :-----------: | :-------------------: | :---------: | :-----------------------: |
| modalFooter | cancelButton  |                       |     yes     |                           |
|             |               |    backgroundColor    |     yes     |           white           |
|             |               |       fontColor       |     yes     |           black           |
|             |               |      buttonSize       |     yes     | width: 100%, height: 3rem |
|             |               |        content        |     no      |                           |
|             |               |       onCancel        |     no      |                           |
|             | confirmButton |                       |     yes     |                           |
|             |               |    backgroundColor    |     yes     |           black           |
|             |               |       fontColor       |     yes     |           white           |
|             |               |      buttonSize       |     yes     | width: 100%, height: 3rem |
|             |               |        content        |     no      |                           |
|             |               |       onCancel        |     no      |                           |
|             |               |                       |             |                           |
|             |               |   buttonsDirection    |     yes     |            row            |
|             |               | buttonsJustifyContent |     yes     |          center           |

</details>

### Other properties

<details>
  <summary>view other properties</summary>

|           domain           | property  | is optional |                                default value                                |
| :------------------------: | :-------: | :---------: | :-------------------------------------------------------------------------: |
|       modalPosition        |           |     no      |                                                                             |
|         modalSize          |           |     yes     |                                                                             |
|                            |   width   |     yes     | 80% when `modalPosition` is center <br> 100% when `modalPosition` is bottom |
|                            |  height   |     yes     |                                 fit-content                                 |
|                            | minWidth  |     yes     |                                                                             |
|                            | minHeight |     yes     |                                                                             |
|      backgroundColor       |           |     yes     |                                    white                                    |
|        borderRadius        |           |     yes     |                                     5px                                     |
| preventCloseOnOutsideClick |           |     yes     |                                                                             |

- Offering custom `modalSize`
  - `width: small`: 360px
  - `width: medium`: 480px
  - `width: large`: 600px

</details>

---

## Storybook

link: https://6631dad3ab74b00107d09938-mbvlnyhhgn.chromatic.com/
