# 🪟 React Modal Component

React + Emotion 기반의 재사용 가능한 모달 컴포넌트입니다.  
헤더/바디/푸터 슬롯 구조, ESC 키 및 배경 클릭으로 닫기, Focus Trap 등 **접근성 대응**이 포함된 유틸리티입니다.

## ✨ Features

- `ESC` 키, 배경 클릭으로 모달 닫기
- `FocusTrap`으로 모달 내 Tab 포커스 고정
- Slot 기반 하위 컴포넌트 (Header, Body, Footer 등)
- `Alert`, `Confirm`, `Prompt` 전용 컨테이너 제공
- `Modal.Trigger`로 버튼 그룹에 자동 `onHide()` 연결
- Emotion 기반 `style`, `className` 커스터마이징 지원

## 📦 설치

```bash
npm install hoyychoi-modal-component
```

## 🛠 사용 예시

```tsx
import Modal from "hoyychoi-modal-component";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.BackDrop />
        <Modal.Container position="center" gap={24}>
          <Modal.Header closeButton>
            <Modal.Title>제목</Modal.Title>
          </Modal.Header>
          <Modal.Body>내용을 여기에 작성하세요.</Modal.Body>
          <Modal.Footer>
            <Modal.Trigger>
              <Modal.Button>취소</Modal.Button>
              <Modal.Button onClick={() => console.log("확인")}>확인</Modal.Button>
            </Modal.Trigger>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </>
  );
};
```

## 💬 Modal 종류

### ✅ Alert

```tsx
<Modal.AlertContainer title="아이디를 입력해 주세요." description="아이디는 필수로 입력해야 합니다." />
```

### ✅ Confirm

```tsx
<Modal.ConfirmContainer
  title="카드를 삭제하시겠습니까?"
  description="삭제하면 복구하실 수 없습니다."
  onClick={() => console.log("확인")}
/>
```

### ✅ Prompt

```tsx
<Modal.PromptContainer
  title="쿠폰 번호를 입력하세요"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onClick={() => console.log(input)}
/>
```

## 🔧 Props

### `Modal`

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `show` | `boolean` | ✅ | 모달 표시 여부 |
| `onHide` | `() => void` | ✅ | 모달 닫기 함수 |

> 기타 HTMLDivElement의 className, style 등도 전달 가능
> 

---

### `Modal.Container`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `"center" | "top" | "bottom"` | `"center"` | 모달 위치 |
| `gap` | `number` | `16` | 내부 요소 간 간격 |

---

### `Modal.Trigger`

하위 버튼들의 클릭에 자동으로 `onHide()`를 붙여주는 그룹 컴포넌트입니다.

---

### `Modal.Button`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `fontSize` | `number` | `16` | 폰트 크기 |
| `color` | `string` | `"#fff"` | 텍스트 색상 |
| `backgroundColor` | `string` | `"#333"` | 배경 색상 |
| `borderColor` | `string` | `"#333"` | 테두리 색상 |
| `borderRadius` | `number` | `5` | 테두리 곡률 |

---

## 🔐 ESC 키 & 포커스 트랩

- `ESC` 키로 닫기: 내부 `useKeyEscClose` 훅 적용
- 모달 안에서만 Tab 이동: `FocusTrap` 컴포넌트로 구현

## 🧪 개발 환경

- React 18+
- Emotion 11+
- TypeScript
- Storybook 8

---

## 📦 패키지 경량화

- `react`, `react-dom`은 `peerDependencies`로 설정 → 호스트 앱과 충돌 없음
- `vite`, `@vitejs/plugin-react-swc` 기반 빌드