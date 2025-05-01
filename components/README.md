# Modal Component Module

Emotion 기반의 React 모달 UI 컴포넌트입니다.
커스터마이징이 쉽고, 외부 스타일(`style`)도 적용 가능하여 다양한 디자인 시스템과 유연하게 통합할 수 있습니다.

---

## ✨ Features

- `HTMLDialogElement` 기반 접근성 모달
- Emotion을 이용한 스타일링
- 외부 스타일 덮어쓰기 지원 (`style` prop)
- `center`, `bottom` 포지션 옵션
- 모달 닫기 버튼 기본 제공

---

## 📦 Installation

```bash
npm i @jae-o/modal-component-module
```

## 사용 예시: Modal

```tsx
import Modal from '@jae-o/modal-component-module';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal.Container open={open} onClose={() => setOpen(false)}>
        <Modal.Title>결제 정보를 입력해주세요</Modal.Title>
        <Modal.CloseButton onClose={() => setOpen(false)} />
        <div>여기에 원하는 콘텐츠를 넣을 수 있습니다.</div>
        <Modal.PrimaryButton
          label="동의하고 저장하기"
          onClick={() => alert('클릭됨')}
        />
      </Modal.Container>
    </>
  );
}
```

## 📘 API Reference

> Modal.Container

| Prop       | Type                   | Required | Description                    |
| ---------- | ---------------------- | -------- | ------------------------------ |
| `open`     | `boolean`              | ✅       | 모달을 열지 여부               |
| `onClose`  | `() => void`           | ✅       | 외부 영역 클릭 시 호출할 함수  |
| `position` | `'center' \| 'bottom'` | ❌       | 모달 위치 (기본값: `'center'`) |
| `style`    | `React.CSSProperties`  | ❌       | 스타일 덮어쓰기                |

> Modal.CloseButton

| Prop      | Type                  | Required | Description                   |
| --------- | --------------------- | -------- | ----------------------------- |
| `onClose` | `() => void`          | ✅       | 닫기 버튼 클릭 시 호출할 함수 |
| `style`   | `React.CSSProperties` | ❌       | 스타일 덮어쓰기 가능          |

> Modal.Title

| Prop       | Type                  | Required | Description          |
| ---------- | --------------------- | -------- | -------------------- |
| `children` | `ReactNode`           | ✅       | 타이틀 텍스트        |
| `style`    | `React.CSSProperties` | ❌       | 스타일 덮어쓰기 가능 |

> Modal.PrimaryButton, Modal.SecondaryButton

| Prop      | Type                  | Required | Description              |
| --------- | --------------------- | -------- | ------------------------ |
| `label`   | `string`              | ✅       | 버튼 텍스트              |
| `onClick` | `() => void`          | ✅       | 버튼 클릭 시 호출할 함수 |
| `style`   | `React.CSSProperties` | ❌       | 스타일 덮어쓰기 가능     |
