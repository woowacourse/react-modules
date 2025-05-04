# Modal 라이브러리

@kaori-killer/modal-component는 모달을 쉽게 사용할 수 있도록 돕는 컴포넌트 라이브러리입니다.

## useModal

- isOpen: 모달이 보이는지 여부
  - `boolean`

- handleOpen: 모달을 여는 함수
  - `() => void`  

- handleClose: 모달을 닫는 함수
  - `() => void`  

## Modal

- isOpen: 모달이 보여지는지 여부를 받는다.
  - `boolean`

- children: 하위 컴포넌트를 받는다.

## ModalOverlay

- onClose: 모달 외부를 클릭 시 닫는 함수를 받는다.
  - `() => void`  

## ModalContent

- position (`center | bottom`): 모달을 표시할 위치를 받는다.
  - 기본 값: `center`
- children: 하위 컴포넌트를 받는다.

## ModalHeader

- direction (`row | column`): 내부 요소의 Flex 방향을 설정한다.
  - 기본 값: `row`
- align( `start | center | end`): Flex 방향에 따른 축을 설정한다.
  - 기본 값: `start`
- justify(`start | center | end`): Flex 방향에 따른 축을 설정한다.
  - 기본 값: `start`
- children: 하위 컴포넌트를 받는다.

## ModalTitle

- fontSize(폰트 사이즈 문자열): 모달의 제목의 폰트 사이즈를 설정한다.
- fontWeight(폰트 두께 문자열): 모달의 제목의 폰트 두께를 설정한다.
- tag(폰트 태크 문자열): 모달의 제목에 사용할 태그를 설정한다.
  - 기본 값: `h1`
- children: 하위 컴포넌트를 받는다.

## ModalCloseButton

- onClose: 모달을 닫는 함수를 받는다.
  - `() => void`  

## ModalBody

- children: 하위 컴포넌트를 받는다.

## ModalFooter

- direction (`row | column`): 내부 요소의 Flex 방향을 설정한다.
  - 기본 값: `row`
- align( `start | center | end`): Flex 방향에 따른 축을 설정한다.
  - 기본 값: `start`
- justify(`start | center | end`): Flex 방향에 따른 축을 설정한다.
  - 기본 값: `start`
- children: 하위 컴포넌트를 받는다.

## 사용 예시

```tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useModal,
} from "@kaori-killer/modal-component";

function App() {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal isOpen={isOpen}>
        <ModalOverlay onClose={handleClose} />
        <ModalContent position="center">
          <ModalHeader direction="row" align="start" justify="start">
            <ModalTitle tag="h1" fontSize="25px" fontWeight="700">
              Title이다!
            </ModalTitle>
            <ModalCloseButton onClose={handleClose} />
          </ModalHeader>
          <ModalBody>몸통이다!</ModalBody>
          <ModalFooter direction="row" align="end" justify="center">
            Footer이다!
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
```

## 스토리북

<스토리북 링크>
