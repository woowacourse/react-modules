# Modal 컴포넌트

React 애플리케이션을 위한 유연하고 커스터마이징이 가능한 모달 컴포넌트입니다.

## 설치 방법

```bash
npm install compoents-modal-test-kangoll

```

## 사용 방법

```tsx
import { Modal } from "compoents-modal-test-kangoll";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal position="center" isOpen={isOpen} onClose={handleClose} size="lg">
        <Modal.Header hasCloseButton>
          모달 헤더 부분입니다. 닫기 버튼을 옵션으로 받을 수 있습니다
        </Modal.Header>
        <Modal.Content>
          모달 본분입니다
          <Modal.InputPrompt
            placeholder="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Modal.Content>

        <Modal.Footer>
          <Modal.ConfirmButton onCancel={handleClose} onConfirm={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## 스토리북

https://step1--6804bd5db0df970ca29a898f.chromatic.com

## ✅ Props

### 🧾 Modal Props

| Prop       | Type                       | 필수 | 기본값     | 설명                                             |
| ---------- | -------------------------- | ---- | ---------- | ------------------------------------------------ |
| `isOpen`   | `boolean`                  | ✅   | -          | 모달 표시 여부                                   |
| `onClose`  | `() => void`               | ✅   | -          | 모달 외부 클릭 또는 ESC 키 입력 시 호출되는 콜백 |
| `position` | `"center"` \| `"bottom"`   | ❌   | `"center"` | 모달 위치                                        |
| `size`     | `"sm"` \| `"md"` \| `"lg"` | ❌   | `"md"`     | 모달 크기                                        |
| `children` | `React.ReactNode`          | ✅   | -          | 모달 내부 콘텐츠                                 |

### 🧱 Slot 컴포넌트

- Modal.Header

| Prop             | Type      | 필수 | 기본값 | 설명                          |
| ---------------- | --------- | ---- | ------ | ----------------------------- |
| `hasCloseButton` | `boolean` | ❌   | false  | 우측 상단 닫기 버튼 표시 여부 |

### 🔡 입력 컴포넌트

- Modal.InputPrompt

| Prop          | Type                       | 필수 | 설명                |
| ------------- | -------------------------- | ---- | ------------------- |
| `value`       | `string` \| `number`       | ✅   | 입력값              |
| `placeholder` | `string`                   | ✅   | 플레이스홀더 텍스트 |
| `onChange`    | `(e: ChangeEvent) => void` | ✅   | 입력 변경 핸들러    |

### 🧰 버튼 컴포넌트

- Modal.AlertButton

| Prop         | Type         | 필수 | 기본값 | 설명                |
| ------------ | ------------ | ---- | ------ | ------------------- |
| `buttonText` | `string`     | ❌   | "확인" | 버튼 텍스트         |
| `onClick`    | `() => void` | ✅   | -      | 버튼 클릭 시 호출됨 |

<br/>

- Modal.ConfirmButton

| Prop          | Type         | 필수 | 기본값 | 설명                |
| ------------- | ------------ | ---- | ------ | ------------------- |
| `onConfirm`   | `() => void` | ✅   | -      | 확인 버튼 클릭 동작 |
| `onCancel`    | `() => void` | ✅   | -      | 취소 버튼 클릭 동작 |
| `confirmText` | `string`     | ❌   | "확인" | 확인 버튼 라벨      |
| `cancelText`  | `string`     | ❌   | "취소" | 취소 버튼 라벨      |

## 기능

- `position`에 따라 중앙 / 하단 모달 렌더링 지원
- `ESC 키`로 모달 닫기 가능
- `외부 클릭 시 닫힘` 처리
- `focus trap` 적용으로 모달 외부 포커싱 방지
- 다양한 컨텐츠 조합 가능 (`<Modal.Header>`, `<Modal.Content>` 등 활용 시)
