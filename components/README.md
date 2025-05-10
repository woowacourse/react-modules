# @yeji0214/modal

React 환경에서 **접근성과 재사용성**을 고려한 모달 컴포넌트입니다.  
확인(Alert), 확인/취소(Confirm), 입력(Prompt) 형태의 모달을 제공하며, 위치 및 크기도 자유롭게 조절 가능합니다.

[![npm version](https://img.shields.io/npm/v/@yeji0214/modal.svg)](https://www.npmjs.com/package/@yeji0214/modal)
[![license](https://img.shields.io/npm/l/@yeji0214/modal.svg)](LICENCSE)

---

## ✨ 특징

- React 18+ 지원
- Emotion 기반의 커스터마이징 가능한 스타일
- 불필요한 필수 prop 최소화 (기본값 제공)
- Alert / Confirm / Prompt의 다양한 모달 타입 지원
- 위치 및 사이즈 조절 가능 (`center`, `top`, `bottom` + `small`, `medium`, `large`)
- 모달 접근성 개선: Tab/Shift+Tab 키로 내부 요소 순환 가능 (Focus Trap)

---

## 📦 설치

```bash
npm install @yeji0214/modal
```

> ⚠️ 이 패키지는 `react`, `react-dom`, `@emotion/react`, `@emotion/styled`를 peerDependencies로 사용합니다.  
> 사용 전에 반드시 해당 패키지들을 설치해주세요.

---

## 🧩 사용법

### 기본 Alert 모달 예시

```tsx
import Modal from "@yeji0214/modal";

function App() {
  return <Modal onClose={handelClose} onConfirm={handleConfirm} />;
}
```

### Confirm 모달 예시

```tsx
import Modal from "@yeji0214/modal";

function App() {
  return (
    <Modal
      type="confirm"
      title="삭제하시겠습니까?"
      content="삭제된 데이터는 복구할 수 없습니다."
      onClose={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
```

### Prompt 모달 예시

```tsx
import Modal from "@yeji0214/modal";

function App() {
  return (
    <Modal
      type="prompt"
      inputTitle="이름을 입력해주세요"
      confirmText="제출"
      onConfirm={handleConfirm}
    />
  );
}
```

---

## 📐 모달 크기 설정 (`size`)

| 사이즈   | 설명                    | 실제 너비 |
| -------- | ----------------------- | --------- |
| `small`  | 기본 사이즈 (디폴트)    | `304px`   |
| `medium` | 넓은 콘텐츠용           | `600px`   |
| `large`  | 전체 너비 사용 (반응형) | `100%`    |

```tsx
<Modal size="medium" />
```

---

## 🛠️ Props

| Prop                  | Type                                            | Required | Default              | Description                                                  |
| --------------------- | ----------------------------------------------- | -------- | -------------------- | ------------------------------------------------------------ |
| `type`                | `"alert"` \| `"confirm"` \| `"prompt"`          | ❌       | `"alert"`            | 모달의 형태를 지정합니다.                                    |
| `position`            | `"center"` \| `"bottom"` \| `"top"`             | ❌       | `"center"`           | 모달 위치를 지정합니다.                                      |
| `size`                | `"small"` \| `"medium"` \| `"lage"`             | ❌       | `"small"`            | 모달 크기를 지정합니다.                                      |
| `title`               | `string`                                        | ❌       | `"알림"`             | 모달 제목입니다. `prompt` 타입에서는 표시되지 않습니다.      |
| `content`             | `React.ReactNode`                               | ❌       | `"내용이 없습니다."` | 모달 본문 내용입니다. `prompt` 타입에서는 표시되지 않습니다. |
| `inputTitle`          | `string`                                        | ❌       | `"입력해주세요."`    | `prompt` 타입에서 입력 필드 상단의 안내 문구입니다.          |
| `hasCloseButton`      | `boolean`                                       | ❌       | `true`               | 우측 상단 닫기 버튼 표시 여부입니다.                         |
| `onClose`             | `() => void`                                    | ✅       | –                    | 닫기 버튼, 백드롭 클릭 시 실행되는 콜백입니다.               |
| `onConfirm`           | `() => void`                                    | ✅       | –                    | 확인 버튼 클릭 시 실행되는 콜백입니다.                       |
| `confirmText`         | `string`                                        | ❌       | `"확인"`             | 확인 버튼 텍스트입니다.                                      |
| `cancelText`          | `string`                                        | ❌       | `"취소"`             | 취소 버튼 텍스트입니다. (confirm, prompt 타입에서 사용)      |
| `handleBackdropClick` | `(e: React.MouseEvent<HTMLDivElement>) => void` | ❌       | –                    | 백드롭 클릭 시 실행할 커스텀 핸들러입니다.                   |

---

## 📃 라이선스

MIT © 정예지
