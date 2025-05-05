# 🪟 React Modal Component

React + Emotion 기반의 재사용 가능한 모달 컴포넌트입니다.  
위치, 배경 클릭, ESC 키 닫기 등을 지원하며, 헤더/바디/푸터 영역을 자유롭게 구성할 수 있습니다.  
하위 컴포넌트들은 모두 스타일 커스터마이징을 위해 `className`과 `style` props를 지원합니다.

## ✨ Features

- 위치 지정: `center`, `top`, `bottom`
- 배경 클릭 시 모달 닫기
- ESC 키로 모달 닫기
- `Header`, `Body`, `Footer`, `Title`, `Background`, `Container` 등 slot형 하위 컴포넌트 제공
- Emotion 기반 스타일 커스터마이징 지원
- `createPortal` 사용 → z-index, overflow 문제 없음

## 📦 설치

```bash
npm install hoyychoi-modal-component
```

## 🛠 사용 예시

```tsx
import Modal from "hoyychoi-modal-component";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Background>
          <Modal.Container position="center" gap={24}>
            <Modal.Header closeButton>
              <Modal.Title>제목</Modal.Title>
            </Modal.Header>
            <Modal.Body>내용 영역입니다.</Modal.Body>
            <Modal.Footer>
              <button onClick={() => setShow(false)}>닫기</button>
            </Modal.Footer>
          </Modal.Container>
        </Modal.Background>
      </Modal>
    </>
  );
};
```

## 🧩 Props

### `Modal`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | `boolean` | – | 모달 표시 여부 |
| `onHide` | `() => void` | – | 모달 닫기 핸들러 |
| `...props` | `HTMLDivProps` | – | `className`, `style` 등 지원 |

### `Modal.Background`

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | 컨텐츠를 감싸는 배경 요소 |
| `onClick` | – | 배경 클릭 시 자동으로 onHide 호출됨 |

### `Modal.Container`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `"center","top","bottom"` | `"center"` | 모달 위치 |
| `gap` | `number` | `16` | 내부 요소 간 flex 간격 |

### `Modal.Header`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `closeButton` | `boolean` | `false` | 우측 상단 닫기 버튼 표시 여부 |
| `...props` | `HTMLDivProps` | – | `className`, `style` 지원 |

### `Modal.Title`, `Modal.Body`, `Modal.Footer`

공통적으로 `children`, `className`, `style` 등의 props를 지원합니다.

---

## 🔐 ESC 키 이벤트

ESC 키를 누르면 `onHide`가 호출되어 모달이 닫힙니다.

이는 내부적으로 `useKeyEscClose` 훅으로 처리됩니다.

---

## 🧪 개발 환경

- React 18+
- Emotion 11+
- TypeScript 지원
