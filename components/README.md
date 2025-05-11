# 🪟 kirin-modal-component

React + Emotion 기반의 재사용 가능한 모달 컴포넌트입니다.

기본 `Modal`은 컴파운드 패턴으로 자유롭게 조합 가능하며, `AlertModal`, `ConfirmModal`, `PromptModal` 등의 고정형 모달도 함께 제공합니다.

---

## ✨ 주요 기능

- 위치 지정 (`center`, `top`, `bottom`)
- 배경 클릭 시 닫기
- ESC 키로 모달 닫기 (내부적으로 `useKeyEscClose` 사용)
- 헤더/바디/푸터/타이틀 등 세부 컴포넌트로 구성
- 포커스 트랩 내장 (`useFocusTrap`)
- 다양한 크기(`small`, `medium`, `large`) 및 간격 조정 지원
- Alert, Confirm, Prompt 전용 모달 제공
- Emotion 기반 스타일 커스터마이징 가능

---

## 📦 설치

```bash
npm install kirin-modal-component
```

## 🛠 기본 Modal 사용 예시

```tsx
import { useState } from "react";
import { Modal } from "kirin-modal-component";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <><button onClick={() => setShow(true)}>Open Modal</button>

      <Modal show={show} onHide={() => setShow(false)} position="center" background size="medium">
        <Modal.Header closeButton>
          <Modal.Title>제목</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          모달 본문입니다.
        </Modal.Body>
        <Modal.Footer buttonAlign="right">
          <button onClick={() => setShow(false)}>닫기</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

```

## ⚡ 고정형 모달 사용 예시

```tsx
import {
  AlertModal,
  ConfirmModal,
  PromptModal,
} from "kirin-modal-component";

<AlertModalshow={show}
  onHide={handleClose}
  onConfirm={handleConfirm}
  title="알림"
  content="변경사항이 저장되었습니다."
/>

<ConfirmModalshow={show}
  onHide={handleClose}
  onConfirm={handleDelete}
  title="정말 삭제하시겠습니까?"
  content="삭제된 데이터는 복구할 수 없습니다."
/>

<PromptModalshow={show}
  onHide={handleClose}
  onConfirm={() => console.log(value)}
  title="닉네임을 입력하세요"
  content="설정할 닉네임을 입력해주세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

```

---

## 🔧 Props Reference

### 🧱 `Modal`

| Prop | Type | Default | 설명 |
| --- | --- | --- | --- |
| `show` | `boolean` | – | 모달 표시 여부 |
| `onHide` | `() => void` | – | 모달 닫기 함수 |
| `background` | `boolean` | `true` | 배경 클릭 시 닫기 여부 |
| `position` | `'center' | 'top' | 'bottom'` | `'center'` | 모달 위치 |
| `gap` | `number` | `16` | 내부 flex 간격 (px) |
| `size` | `'small' | 'medium' | 'large'` | `'medium'` | 모달 넓이 |

### 🧱 `Modal.Header`

| Prop | Type | Default | 설명 |
| --- | --- | --- | --- |
| `closeButton` | `boolean` | `false` | 우측 상단 닫기 버튼 |

### 🧱 `Modal.Title`

| Prop | Type | Default | 설명 |
| --- | --- | --- | --- |
| `color` | `string` | `#000` | 텍스트 색상 |

### 🧱 `Modal.Footer`

| Prop | Type | Default | 설명 |
| --- | --- | --- | --- |
| `buttonAlign` | `'left' | 'center' | 'right'` | `'left'` | 버튼 정렬 위치 |

---

## ⌨️ ESC 키 닫기 지원

모달이 열려 있는 동안 사용자가 ESC 키를 누르면 자동으로 `onHide`가 호출되어 모달이 닫힙니다.

이 기능은 내부적으로 `useKeyEscClose` 훅으로 구현되어 있으며, 모든 모달에서 기본 지원됩니다.

---

## 🔒 포커스 트랩

키보드 탭 이동 시 모달 내부 요소들로만 포커스가 순환되도록 자동 처리됩니다.

이는 `useFocusTrap` 훅으로 구현되어 있으며, 모달이 열릴 때 최초 포커스도 자동 설정됩니다.

---

## 📁 구성 및 Export 구조

```ts
// 기본 Modal (컴파운드 컴포넌트)
export { default as Modal } from './Modal';

// 고정형 모달
export { default as AlertModal } from './modals/AlertModal/AlertModal';
export { default as ConfirmModal } from './modals/ConfirmModal/ConfirmModal';
export { default as PromptModal } from './modals/PromptModal/PromptModal';

```

---

## 🧪 개발 환경

- ✅ React 18+
- ✅ Emotion 11+
- ✅ TypeScript 완전 지원
- ✅ ESM + Tree-shaking 가능
- ✅ 모듈 구조 최적화

---

## 🧰 커스터마이징

모든 스타일은 Emotion 기반으로 작성되어 있으며,

기본 제공 스타일 외에도 `@emotion/react`를 통해 커스터마이징이 가능합니다.

---

## 📖 Storybook

모달의 실제 동작을 Storybook에서 직접 확인해보세요.

👉 [모달 컴포넌트 Storybook 보기](https://68130cd34b90e54b5588aff6-vcegomsbbv.chromatic.com/?path=/docs/modal-alertmodal--docs)

- 기본 Modal
- AlertModal / ConfirmModal / PromptModal
- 위치 변경, 닫기 버튼, ESC 키 닫기 등 다양한 조합 테스트 가능