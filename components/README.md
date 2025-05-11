# Modal 라이브러리

@ohgus/modal-component는 모달을 쉽게 사용할 수 있도록 돕는 컴포넌트 라이브러리입니다.

## Modal.Root

모달을 선언하는 곳 최상단에 사용하여 자식요소들이 Modal의 context api를 공유할 수 있게 한다.

## Modal

- children: 하위 컴포넌트를 받는다.

## Modal.Overlay

# Modal.Content

- position: 모달을 표시할 위치를 받는다. `(center | bottom )`
- size: 모달의 사이즈를 받는다. `(small | medium | large)`
  - position이 bottom인 경우 사이즈의 영향을 받지 않습니다.
- children: 하위 컴포넌트를 받는다.

## Modal.Title

- fontSize: 모달의 제목의 폰트 사이즈를 설정한다.
- fontWeight: 모달의 제목의 폰트 두께를 설정한다.
- tag: 모달의 제목에 사용할 태그를 설정한다.
- children: 하위 컴포넌트를 받는다.

## Modal.Close

- 모달 닫기 기능을 수행한다.
- children: 버튼 내부 컨텐츠를 자식으로 받는다.

## Modal.Trigger

- 모달 열기 기능을 수행한다.
- children: 버튼 내부 컨텐츠를 자식으로 받는다.

## 사용 예시

```tsx
import { Modal } from "@ohgus/modal-component";

function App() {
  return (
    <Modal.Root>
      <Modal.Trigger>
        <button>Open</button>
      </Modal.Trigger>
      <Modal>
        <Modal.Overlay />
        <Modal.Content position="center" size="medium">
          <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
            Title이다!
          </Modal.Title>
          <Modal.Close>
            <button>Close</button>
          </Modal.Close>
        </Modal.Content>
      </Modal>
    </Modal.Root>
  );
}

export default App;
```

## 스토리북

[스토리북 링크](https://68131cc0b137fee9cef1c4d3-ebxcqpiiik.chromatic.com/?path=/docs/modal--docs)
