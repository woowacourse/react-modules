# Modal Component Module

Emotion 기반의 React 모달 UI 컴포넌트입니다.
커스터마이징이 쉽고, 외부 스타일(`style`)도 적용 가능하여 다양한 디자인 시스템과 유연하게 통합할 수 있습니다.

---

## ✨ Features

- 컴파운드 패턴 기반 모달 컴포넌트 구조
- Context를 통한 상태 공유
- Emotion을 이용한 커스터마이징 가능한 스타일링
- `center`, `bottom` 포지션 옵션 제공
- `small`, `medium`, `large` 모달 크기 옵션 제공
- 외부 스타일 덮어쓰기 (`style` prop)
- 접근성 고려 (role, aria 속성 적용)

---

## 📦 Installation

```bash
npm i @jae-o/modal-component-module
```

## 사용 예시: Modal

```tsx
import Modal from '@jae-o/modal-component-module';

function App() {
  return (
    <Modal>
      <Modal.OpenTrigger>
        <button>모달 열기</button>
      </Modal.OpenTrigger>

      <Modal.Container title="결제 정보를 입력해주세요">
        <div>여기에 원하는 콘텐츠를 넣을 수 있습니다.</div>
        <Modal.ButtonGroup>
          <Modal.WideButton onClick={() => alert('저장')}>
            동의하고 저장하기
          </Modal.WideButton>
          <Modal.WideButton variant="secondary" onClick={() => {}}>
            닫기
          </Modal.WideButton>
        </Modal.ButtonGroup>
      </Modal.Container>
    </Modal>
  );
}
```

## 📘 API Reference

### Modal

| Prop   | Type                       | Required | Description  |
| ------ | -------------------------- | -------- | ------------ |
| `role` | `'modal' \| 'alert-modal'` | ❌       | modal의 종류 |

- Modal 컴포넌트의 루트입니다. 상태 공유를 제공합니다.

### Modal.OpenTrigger

| Prop       | Type        | Required | Description               |
| ---------- | ----------- | -------- | ------------------------- |
| `children` | `ReactNode` | ✅       | 열기 트리거로 사용할 요소 |

- children에 button, custom button 컴포넌트 등 다양한 요소를 넣을 수 있습니다.
- 클릭 시 모달이 열립니다.

### Modal.CloseTrigger

| Prop       | Type        | Required | Description               |
| ---------- | ----------- | -------- | ------------------------- |
| `children` | `ReactNode` | ✅       | 닫기 트리거로 사용할 요소 |

- 클릭 시 모달이 닫힙니다.

### Modal.Container

| Prop              | Type                             | Required | Description                                         |
| ----------------- | -------------------------------- | -------- | --------------------------------------------------- |
| `title`           | `string`                         | ❌       | 모달 타이틀 (내부에서 Title 컴포넌트로 렌더링)      |
| `position`        | `'center' \| 'bottom'`           | ❌       | 모달 위치 (기본값: `'center'`)                      |
| `size`            | `'small' \| 'medium' \| 'large'` | ❌       | 모달 크기 (기본값: `'medium'`)                      |
| `showCloseButton` | `boolean`                        | ❌       | 모달 우측 상단 닫기 버튼 표시 여부 (기본값: `true`) |
| `style`           | `CSSProperties`                  | ❌       | 스타일 덮어쓰기                                     |

- 모달의 배경(Backdrop)과 컨텐츠 영역을 렌더링합니다.

### Modal.Title

| Prop       | Type                  | Required | Description          |
| ---------- | --------------------- | -------- | -------------------- |
| `children` | `ReactNode`           | ✅       | 타이틀 텍스트        |
| `style`    | `React.CSSProperties` | ❌       | 스타일 덮어쓰기 가능 |

- Modal.Container의 title 속성으로도 사용되며, 사용자가 직접 사용도 가능합니다.

### Modal.CloseButton

| Prop    | Type                  | Required | Description          |
| ------- | --------------------- | -------- | -------------------- |
| `style` | `React.CSSProperties` | ❌       | 스타일 덮어쓰기 가능 |

- Modal.Container의 showCloseModal 속성으로도 사용되며, 사용자가 직접 사용도 가능합니다.
- 클릭 시 모달이 닫힙니다.

### Modal.PromptInput

| Prop       | Type                  | Required | Description             |
| ---------- | --------------------- | -------- | ----------------------- |
| `isError`  | `boolean`             | ❌       | 에러 상태 스타일링 여부 |
| 기타 props | `input` 엘리먼트 속성 | ❌       | 일반 `input` 속성 지원  |

- 스타일이 적용된 Input입니다.
- isError를 통해 에러 스타일을 적용할 수 있습니다.

### Modal.ButtonGroup

| Prop        | Type                           | Required | Description                    |
| ----------- | ------------------------------ | -------- | ------------------------------ |
| `direction` | `'row' \| 'column'`            | ❌       | 버튼 정렬 방향 (기본값: `row`) |
| `align`     | `'start' \| 'center' \| 'end'` | ❌       | 버튼 정렬 위치                 |
| `gap`       | `number`                       | ❌       | 버튼 간격(px 단위, 기본값: 12) |
| `style`     | `CSSProperties`                | ❌       | 스타일 덮어쓰기 가능           |

- 여러 버튼을 정렬하기 위한 그룹 컨테이너입니다.

### Modal.Button

| Prop      | Type                       | Required | Description                            |
| --------- | -------------------------- | -------- | -------------------------------------- |
| `onClick` | `() => void`               | ✅       | 버튼 클릭 핸들러                       |
| `variant` | `'primary' \| 'secondary'` | ❌       | 버튼 스타일 지정 (기본값: `'primary'`) |
| `style`   | `CSSProperties`            | ❌       | 스타일 덮어쓰기 가능                   |

- 모달 내에서 일반 버튼 역할을 합니다.

### Modal.WideButton

| Prop      | Type                       | Required | Description                            |
| --------- | -------------------------- | -------- | -------------------------------------- |
| `onClick` | `() => void`               | ✅       | 버튼 클릭 핸들러                       |
| `variant` | `'primary' \| 'secondary'` | ❌       | 버튼 스타일 지정 (기본값: `'primary'`) |
| `style`   | `CSSProperties`            | ❌       | 스타일 덮어쓰기 가능                   |

- 가로로 넓은 버튼입니다. 모바일 환경에서도 터치하기 좋은 넓이를 제공합니다.
