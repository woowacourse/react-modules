## Modal 라이브러리

`@sebin0580/modal`는 모달을 쉽게 사용할 수 있도록 돕는 컴포넌트 라이브러리 입니다. 

## 사용 방법

useModal 훅과 Modal 컴포넌트를 함께 사용하면 간편하게 모달 기능을 구현할 수 있습니다.
모달 열기/닫기 상태를 관리하고, 외부 클릭이나 닫기 버튼 등을 통해 유연하게 모달을 제어할 수 있습니다.


### useModal
| return | 설명 |
|--------|-----|
| isOpen | 모달이 열려 있는지 여부를 나타내는 상태 값입니다.|
| handleOpenModal | 모달을 여는 함수입니다.|
| handleCloseModal | 모달을 닫는 함수입니다.|


### Modal Props
| Prop                | Type                         | 설명                                                                 |
|---------------------|------------------------------|----------------------------------------------------------------------|
| `isOpen`            | `boolean`                    | 모달의 표시 여부를 제어합니다. `true`일 경우 모달이 화면에 표시됩니다.      |
| `position`          | `'center' \| 'bottom'`       | 모달이 화면에 나타날 위치를 지정합니다. 가운데(`center`) 또는 하단(`bottom`) 중 선택할 수 있습니다. |
| `title`             | `string`                     | 모달 상단에 표시할 제목 텍스트입니다.                                  |
| `showCloseButton`   | `boolean`                    | 우측 상단에 닫기(❌) 버튼을 표시할지 여부를 설정합니다.                  |
| `onClose`           | `() => void`                 | 모달이 닫힐 때 호출되는 콜백 함수입니다. 닫기 버튼 클릭이나 외부 영역 클릭 등에 의해 호출됩니다. |
| `closeOnOutsideClick` | `boolean`                  | 모달 외부(배경 영역)를 클릭했을 때 모달을 닫을지 여부를 설정합니다.         |
| `maxWidth`          | `number \| string`           | 모달의 최대 너비를 설정합니다. 예: `'600px'`, `600` 등                     |
| `zIndex`            | `number \| string`           | 모달의 쌓임 순서를 설정합니다. 숫자가 클수록 더 위에 표시됩니다.          |

---
## 예시 코드

```tsx
import { Modal, useModal } from '@sebin0580/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>
      <Modal
        isOpen={isOpen}
        title="모달 제목"
        showCloseButton
        onClose={handleCloseModal}
      >
        <h1>안녕</h1>
      </Modal>
    </>
  );
}

export default App;
```

### 스토리북을 통해서도 사용 예시를 확인할 수 있습니다. 
[🎨 스토리북 예시](https://6811a7be4413c4e808171622-mmqdrezsap.chromatic.com/)

## 라이센스
@keemsebin 