# @ohgus/modal-component

모달을 쉽게 구현할 수 있는 React 컴포넌트 라이브러리입니다.

## 설치 방법

```bash
npm install @ohgus/modal-component

```

## 주요 특징

- 컴포넌트 기반 합성 패턴으로 유연한 모달 구현 가능
- 접근성(a11y) 고려 - 키보드 트랩, 포커스 관리 지원
- 다양한 모달 위치 및 크기 옵션 제공
- 타입스크립트 지원

## 컴포넌트 구성

`@ohgus/modal-component`는 다음과 같은 컴포넌트로 구성되어 있습니다:

```
Modal
├─ Root       - 모달 컨텍스트 제공
├─ Trigger    - 모달 열기 트리거
├─ Portal     - 모달을 DOM의 최상위로 렌더링
├─ Overlay    - 모달 뒤 배경 오버레이
├─ Content    - 모달 컨텐츠 컨테이너
├─ Title      - 모달 제목
└─ Close      - 모달 닫기 버튼
```

## 기본 사용법

```tsx
import { Modal } from "@ohgus/modal-component";

function App() {
  return (
    <Modal.Root>
      <Modal.Trigger>
        <button>모달 열기</button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content position="center" size="medium">
          <Modal.Title tag="h2" fontSize="20px" fontWeight="700">
            모달 제목
          </Modal.Title>
          <div>모달 내용을 여기에 작성하세요.</div>
          <Modal.Close>
            <button>닫기</button>
          </Modal.Close>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
```

## API 참조

### Modal.Root

모달의 상태를 관리하고 모든 모달 컴포넌트에 컨텍스트를 제공합니다.

**Props**

| 속성     | 타입            | 기본값 | 설명                        |
| -------- | --------------- | ------ | --------------------------- |
| children | React.ReactNode | -      | Root 내부에 포함할 컴포넌트 |

### Modal.Trigger

모달을 여는 트리거 요소입니다.

**Props**

| 속성     | 타입            | 기본값 | 설명                    |
| -------- | --------------- | ------ | ----------------------- |
| children | React.ReactNode | -      | 트리거로 사용할 UI 요소 |

**예제**

```tsx
<Modal.Trigger>
  <button>모달 열기</button>
</Modal.Trigger>
```

### Modal.Portal

모달을 DOM의 최상위에 렌더링하는 포털 컴포넌트입니다.

**Props**

| 속성     | 타입            | 기본값 | 설명                          |
| -------- | --------------- | ------ | ----------------------------- |
| children | React.ReactNode | -      | 포털을 통해 렌더링할 컴포넌트 |

### Modal.Overlay

모달 뒤의 배경 오버레이입니다.

**Props**

모달 오버레이는 추가 props를 받지 않습니다.

### Modal.Content

모달의 주요 컨텐츠를 담는 컨테이너입니다.

**Props**

| 속성     | 타입                                                                   | 기본값   | 설명                      |
| -------- | ---------------------------------------------------------------------- | -------- | ------------------------- |
| position | "center" \| "bottom"                                                   | "center" | 모달이 표시될 위치        |
| size     | "small" \| "medium" \| "large" \| { width: string; maxWidth?: string } | "large"  | 모달의 크기               |
| children | React.ReactNode                                                        | -        | 모달 내부에 표시할 컨텐츠 |

**기본 사이즈 옵션**

| 옵션   | 너비 | 최대 너비 |
| ------ | ---- | --------- |
| small  | 80%  | 320px     |
| medium | 90%  | 480px     |
| large  | 90%  | 640px     |

**커스텀 사이즈 예제**

```tsx
<Modal.Content position="center" size={{ width: "95%", maxWidth: "800px" }}>
  {/* 모달 컨텐츠 */}
</Modal.Content>
```

> **참고**: `position`이 "bottom"일 경우, 사이즈 설정은 적용되지 않고 화면 너비의 100%를 사용합니다.

### Modal.Title

모달의 제목을 표시하는 컴포넌트입니다.

**Props**

| 속성       | 타입                        | 기본값 | 설명                    |
| ---------- | --------------------------- | ------ | ----------------------- |
| fontSize   | string                      | -      | 제목의 폰트 크기        |
| fontWeight | string                      | -      | 제목의 폰트 두께        |
| tag        | keyof JSX.IntrinsicElements | "h1"   | 제목에 사용할 HTML 태그 |
| children   | React.ReactNode             | -      | 제목 내용               |

**예제**

```tsx
<Modal.Title tag="h2" fontSize="24px" fontWeight="600">
  모달 제목
</Modal.Title>
```

### Modal.Close

모달을 닫는 기능을 제공하는 컴포넌트입니다.

**Props**

| 속성     | 타입            | 기본값 | 설명                         |
| -------- | --------------- | ------ | ---------------------------- |
| children | React.ReactNode | -      | 닫기 버튼으로 사용할 UI 요소 |

**예제**

```tsx
<Modal.Close>
  <button>닫기</button>
</Modal.Close>
```

## 고급 사용 예제

### 바텀 시트 모달

```tsx
<Modal.Root>
  <Modal.Trigger>
    <button>바텀 시트 열기</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Overlay />
    <Modal.Content position="bottom">
      <Modal.Title tag="h3" fontSize="18px" fontWeight="600">
        바텀 시트 타이틀
      </Modal.Title>
      <div>바텀 시트 컨텐츠</div>
      <Modal.Close>
        <button>닫기</button>
      </Modal.Close>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### 커스텀 사이즈 모달

```tsx
<Modal.Root>
  <Modal.Trigger>
    <button>커스텀 사이즈 모달 열기</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Overlay />
    <Modal.Content position="center" size={{ width: "95%", maxWidth: "800px" }}>
      <Modal.Title tag="h2" fontSize="20px" fontWeight="700">
        커스텀 사이즈 모달
      </Modal.Title>
      <div>모달 내용을 입력하세요...</div>
      <Modal.Close>
        <button>닫기</button>
      </Modal.Close>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

## 스토리북

더 많은 사용 예제와 컴포넌트 문서는 스토리북에서 확인할 수 있습니다:

[스토리북 링크](https://68131cc0b137fee9cef1c4d3-ebxcqpiiik.chromatic.com/?path=/docs/modal--docs)
