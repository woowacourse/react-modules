# 모달 컴포넌트

# lumes-modal

React 기반의 재사용 가능한 모달 컴포넌트입니다.  
중앙 또는 하단 위치로 띄울 수 있으며, 닫기 버튼, 오버레이 클릭, ESC 키로 닫을 수 있도록 기본 동작을 제공합니다.

---

## 📦 설치

```bash
npm install lumes_modal
# 또는
yarn add lumes_modal
```

> **Peer dependencies**로 다음 패키지가 필요합니다:
>
> * `react` (`^18.0.0 || ^19.0.0`)
> * `react-dom`
> * `@emotion/react`
> * `@emotion/styled`

---

## 🚀 사용 예시

```tsx
import Modal from '@your-org/lumes-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal
          title="알림"
          position="center"
          onClose={() => setIsOpen(false)}
        >
          <p>모달 내용입니다</p>
        </Modal>
      )}
    </>
  );
}
```

---

## 📘 Props

| 이름         | 타입                       | 필수 여부 | 설명                    |
| ---------- | ------------------------ | ----- | --------------------- |
| `title`    | `string`                 | 선택    | 모달 상단 타이틀             |
| `position` | `'center'` \| `'bottom'` | ✔️    | 모달 위치 설정              |
| `onClose`  | `() => void`             | ✔️    | 모달 닫기 켈받              |
| `width`    | `string`                 | 선택    | 모달 너비 (기본값 `'304px'`) |
| `height`   | `string`                 | 선택    | 모달 높이 (기본값 `'216px'`) |

---

## ⚙️ 동작

* `Esc` 키를 누르면 모달이 닫힌다.
* 모달 외부(오버레이)를 클릭하면 닫힌다.
* 닫기 버튼(X)을 누르면 닫힌다.
