# 🪟 React Modal Component

React + Emotion 기반의 재사용 가능한 모달 컴포넌트입니다.  
위치, 배경, 키보드 ESC 닫기 등을 지원하며, 헤더/바디/푸터 영역을 자유롭게 구성할 수 있습니다.

## ✨ Features

- 위치 지정: `center`, `top`, `bottom`
- 배경 클릭 시 닫기 지원
- ESC 키로 닫기 지원
- `Header`, `Body`, `Footer`, `Title` 하위 컴포넌트 제공
- Emotion 기반 커스터마이징

## 📦 설치

```bash
npm install hoyychoi-modal-component
```

## 🛠 사용 예시

```tsx
import { Modal } from "hoyychoi-modal-component";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>

      <Modal show={show} onHide={() => setShow(false)} position="center" background>
        <Modal.Header closeButton>
          <Modal.Title>제목</Modal.Title>
        </Modal.Header>
        <Modal.Body>내용 영역입니다.</Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShow(false)}>닫기</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
```

## 🧩 Props

### `Modal`

| Prop         | Type         | Default | Description           |
| ------------ | ------------ | ------- | --------------------- | ---------- | -------------- |
| `show`       | `boolean`    | –       | 모달 표시 여부        |
| `onHide`     | `() => void` | –       | 모달 닫기 함수        |
| `background` | `boolean`    | `true`  | 배경 어두움 표시 여부 |
| `position`   | `"center"`   | `"top"` | `"bottom"`            | `"center"` | 모달 위치 설정 |
| `gap`        | `number`     | `16`    | 내부 flex 간격 설정   |

### `Modal.Header`

| Prop          | Type      | Default | Description         |
| ------------- | --------- | ------- | ------------------- |
| `closeButton` | `boolean` | `false` | 닫기 버튼 표시 여부 |

### `Modal.Title`

| Prop    | Type     | Default | Description        |
| ------- | -------- | ------- | ------------------ |
| `color` | `string` | `#000`  | 타이틀 텍스트 색상 |

---

## 🔐 ESC 키 이벤트

ESC 키를 누르면 자동으로 `onHide`가 호출되어 모달이 닫힙니다.

(내부적으로 `useKeyEscClose` 훅을 사용합니다)

---

## 🧪 개발 환경

- React 18+
- Emotion 11+
- TypeScript 지원
