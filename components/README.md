## Modal 라이브러리

`@sebin0580/modal`는 모달을 쉽게 사용할 수 있도록 돕는 컴포넌트 라이브러리 입니다. 

## 사용 예시

useModal 훅과 Modal 컴포넌트를 함께 사용하면 간편하게 모달 기능을 구현할 수 있습니다.
모달 열기/닫기 상태를 관리하고, 외부 클릭이나 닫기 버튼 등을 통해 유연하게 모달을 제어할 수 있습니다.

### useModal
- isOpen: 모달이 보이는지 여부
- handleOpenModal: 모달을 여는 함수
- handleCloseModal: 모달을 닫는 함수
- handleOutsideClick: 모달 외부 클릭 핸들러

### Modal
- isOpen: 모달이 보이는지 여부 (`boolean`)
- position: 모달 위치 설정 (`center` | `bottom`): 
- title: 모달 상단에 표시할 제목 (`string`)
- showCloseButton: 우측 상단에 닫기 버튼을 표시할지 여부 (`boolean`)
- maxWidth: 모달의 최대 너비를 지정 (`number | string`)
- zIndex: 모달의 쌓임 순서를 지정 (`number | string`)
- onClose: 모달 닫기 시 호출되는 함수
- onOutsideClick: 모달 외부 영역 클릭 시 호출되는 함수 

```tsx
import { Modal, useModal } from '@sebin0580/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>
      <Modal
        isOpen={isOpen}
        title="모달 제목"
        showCloseButton
        onClose={handleCloseModal}
        onOutsideClick={handleOutsideClick}
      >
        <h1>안녕</h1>
      </Modal>
    </>
  );
}

export default App;
```

스토리북을 통해서도 사용 예시를 확인할 수 있습니다. 
[🎨 스토리북 예시](https://6811a7be4413c4e808171622-mmqdrezsap.chromatic.com/)

## 라이센스
@keemsebin @dlsxjzld