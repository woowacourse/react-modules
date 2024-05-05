# badahertz52-react-modules-components

**커스텀 가능한 모듈을 제공하는 라이브러리 입니다.**

<img src="./modal-step1.gif" width="80%" alt="modal" />

## Install

```
npm i badahertz52-react-modules-components
```

## How to use?

### Modal 사용 전 필수 설정

src/index.html에 아래와 같이 '''modal-root'''라는 DOM Node를 추가해주세요.

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

### Modal 구조

```ts
interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isCloseModal: boolean;
  handleCloseModal?: () => void;
}
interface ContentsProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
interface BackdropProps {
  closeModal: () => void;
}
```

| 구조           | 설명                                                                                                                                                 | props              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Modal.button   | isCloseModal의 값에 따라 클릭 시 모달창을 닫는 기능을 제공하는 버튼                                                                                  | `ModalButtonProps` |
| Modal.Contents | Modal의 children이 들어가는 장소                                                                                                                     | `ContentsProps`    |
| Modal.Backdrop | <ul><li>모달의 배경으로, 토스트 모달을 제외한 모든 모달에 제공됨</li><li>isCloseOnBackdrop, isCloseOnEsc의 값에 따라 모달창 닫기 기능 제공</li></ul> | `BackdropProps`    |

### Modal props

```ts
type ModalType = 'center' | 'bottom' | 'toast';
```

| 키                | 설명                                                                                                                                       | 타입                              | 필수 | 기본값                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ---- | ------------------------------------ |
| type              | 모달의 형태                                                                                                                                | ModalType                         | Y    | -                                    |
| children          | 모달창 안에 띄울 내용                                                                                                                      | ReactNode                         | Y    | -                                    |
| animationDuration | 모달창 열고 닫을 때의 애니메이션 지속 시간(단위:s)                                                                                         | number                            | N    | bottom:500s, toast:3000s             |
| isNeedAnimation?  | 모달창을 열고 닫을 때 애니메이션 효과를 원하는지 여부                                                                                      | boolean                           | N    | type이 bottom이면 true, 아니면 false |
| openModal         | 모달창 여는 여부                                                                                                                           | boolean                           | Y    | -                                    |
| setOpenModal      | openModal의 상태를 변경하는 setState                                                                                                       | Dispatch<SetStateAction<boolean>> | Y    | -                                    |
| isCloseOnEsc      | esc키를 눌렀을때 모달창을 닫을 지 여부 (토스트 모달에서는 해당 기능 없음)                                                                  | boolean                           | N    | true                                 |
| isCloseOnBackdrop | 모달의 배경(backdrop)을 클릭했을 때 모달창을 닫을 지 여부 (토스트 모달에서는 해당 기능 없음)                                               | boolean                           | N    | true                                 |
| position?         | <ul><li>토스트 모달을 열 위치</li><li> 토스트 모달외의 모달에서는 필요 없음</li><li>⚠️ 토스트 모달에서는 position을 필수로 지정해야함</li> | ModalPosition                     | Y    | -                                    |

### 제공하는 기능

#### 모달

- Modal : 합성 컴포넌트로 필요한 부분들을 가지고 사용자가 원하는 모달을 만들 수 있습니다.
- BottomModal : type='bottom'시의 모달로, 화면의 하단에 나타납니다.
- CenterModal : type='center'시의 모달로,화면의 정가운데에 나타납니다.
- TostModal: type='toast'시의 모달로, 지정된 위치에 나타났다가 일정 시간이 지나면 사라집니다.

#### 커스텀 훅

**useBottomModalContext**

- BottomModalContext로 전해지는 props값을 BottomModal 내에서 사용할 수 있습니다.

```ts
interface BottomModalContextType {
  handleCloseModal: () => void;
}

const BottomModalContext = createContext<BottomModalContextType | null>(null);
```

**useModalContext**

- ModalContext로 전해지는 props값을 Modal내에서 사용할 수 있습니다.

```ts
interface ModalContextType {
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
  animationDuration?: number;
  isNeedAnimation?: boolean;
  position?: ModalPosition;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextType | null>(null);
```

**usePosition**

- 토스트 모달에서 모달이 열린 장소를 찾는 데 사용할 수 았는 hook입니다.

  ```ts
  function usePosition(targetElement: HTMLElement | null | undefined): {
    position: ModalPosition;
  };
  ```
