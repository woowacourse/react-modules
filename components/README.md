# Modal Components

본 모듈은 React 애플리케이션에서 사용할 수 있는 접근성과 사용성을 고려한 모달 컴포넌트를 제공합니다.

## 💡 Installation

```
npm i @sooyeoniya/components
```

## 📚 Documentation

모달 컴포넌트의 사용 방법과 예제를 확인하려면 Storybook 문서를 참조하세요.

[📖 Storybook으로 확인하기](https://6812fc18153d0f93012d5a97-uckasnmuvx.chromatic.com/)

Storybook에서는 다음과 같은 정보를 확인할 수 있습니다.

- 기본 모달 및 다양한 변형 예시 (Alert, Confirm, Prompt)
- 모달의 다양한 상태와 스타일링 옵션 미리보기
- 인터랙티브 컨트롤을 통한 실시간 속성 변경 테스트
- 웹 접근성 테스트 케이스 및 상호작용 테스트

## 📦 Available Components

이 라이브러리는 다음 컴포넌트를 제공합니다.

| 컴포넌트       | 설명                                               |
| -------------- | -------------------------------------------------- |
| `Button`       | 다양한 스타일과 크기를 지원하는 기본 버튼 컴포넌트 |
| `Input`        | 사용자 입력을 받기 위한 텍스트 입력 컴포넌트       |
| `Modal`        | 접근성과 사용성을 고려한 기본 모달 컴포넌트        |
| `AlertModal`   | 확인 버튼 하나만 있는 알림용 모달 프리셋           |
| `ConfirmModal` | 확인/취소 버튼이 있는 의사 결정용 모달 프리셋      |
| `PromptModal`  | 사용자 입력을 받는 필드가 있는 모달 프리셋         |

이 컴포넌트들은 다음과 같이 import 할 수 있습니다.

```tsx
import {
  Button,
  Input,
  Modal,
  AlertModal,
  ConfirmModal,
  PromptModal,
} from "@sooyeoniya/components";
```

## 🔧 Modal Component Props

| Name            | Datatype                          | Default  | Required | Description                       |
| --------------- | --------------------------------- | -------- | :------: | --------------------------------- |
| position        | 'center' \| 'bottom'              | 'center' |    -     | 모달의 위치를 지정합니다          |
| size            | 'small' \| 'medium' \| 'large'    | 'medium' |    -     | 모달의 가로 크기를 설정합니다     |
| theme           | 'light' \| 'dark'                 | 'light'  |    -     | 모달의 테마를 설정합니다          |
| title           | { text?: string; size?: number; } | -        |    -     | 모달의 제목과 스타일을 설정합니다 |
| showCloseButton | boolean                           | true     |    -     | 닫기 버튼 표시 여부를 설정합니다  |
| children        | ReactNode                         | -        |    -     | 모달 내부에 표시될 콘텐츠입니다   |
| isOpen          | boolean                           | -        |    ✅    | 모달의 열림 상태를 제어합니다     |
| onClose         | () => void                        | -        |    ✅    | 모달을 닫는 함수입니다            |

## 🔧 Modal.ActionButtons Props

`<Modal.ActionButtons>` 컴포넌트는 모달 하단에 확인 및 취소 버튼을 쉽게 추가할 수 있는 유틸리티 컴포넌트입니다.

| Name         | Datatype                                          | Default | Required | Description                                |
| ------------ | ------------------------------------------------- | ------- | :------: | ------------------------------------------ |
| confirmText  | string                                            | "확인"  |    -     | 확인 버튼에 표시될 텍스트입니다            |
| cancelText   | string                                            | "취소"  |    -     | 취소 버튼에 표시될 텍스트입니다            |
| onConfirm    | (e: React.MouseEvent\<HTMLButtonElement>) => void | -       |    -     | 확인 버튼 클릭 시 실행될 핸들러 함수입니다 |
| confirmProps | ButtonProps                                       | {}      |    -     | 확인 버튼에 전달될 추가 속성입니다         |
| cancelProps  | ButtonProps                                       | {}      |    -     | 취소 버튼에 전달될 추가 속성입니다         |
| showCancel   | boolean                                           | true    |    -     | 취소 버튼 표시 여부를 설정합니다           |

### 사용 예시

```tsx
// 기본 사용법
<Modal isOpen={isOpen} onClose={closeModal}>
  <div style={{ padding: "16px" }}>
    <p>정말 삭제하시겠습니까?</p>
    <Modal.ActionButtons onConfirm={handleDelete} />
  </div>
</Modal>

// 커스텀 텍스트와 스타일
<Modal.ActionButtons
  confirmText="삭제"
  cancelText="돌아가기"
  confirmProps={{
    variant: "secondary",
    style: { backgroundColor: "#000" }
  }}
  cancelProps={{
    style: { width: "100px" }
  }}
  onConfirm={handleDelete}
/>

// 확인 버튼만 표시
<Modal.ActionButtons
  showCancel={false}
  confirmText="확인했습니다"
  onConfirm={handleConfirm}
/>
```

## 🔧 Modal Preset Component Props

모든 프리셋 컴포넌트는 위의 Modal Component Props를 상속받습니다.

### AlertModal Props

`<AlertModal>` 컴포넌트는 단일 확인 버튼을 가진 알림용 모달입니다.

| Name                      | Datatype                                          | Default                    | Required | Description                                |
| ------------------------- | ------------------------------------------------- | -------------------------- | :------: | ------------------------------------------ |
| isOpen                    | boolean                                           | -                          |    ✅    | 모달의 열림 상태를 제어합니다              |
| onClose                   | () => void                                        | -                          |    ✅    | 모달을 닫는 함수입니다                     |
| onConfirm                 | (e: React.MouseEvent\<HTMLButtonElement>) => void | -                          |    -     | 확인 버튼 클릭 시 실행될 핸들러 함수입니다 |
| confirmButtonText         | string                                            | "확인"                     |    -     | 확인 버튼에 표시될 텍스트입니다            |
| confirmButtonStyle        | React.CSSProperties                               | { width: "90px" }          |    -     | 확인 버튼의 스타일을 지정합니다            |
| confirmButtonWrapperStyle | React.CSSProperties                               | { 오른쪽 정렬, 너비 100% } |    -     | 버튼 컨테이너의 스타일을 지정합니다        |

### ConfirmModal Props

`<ConfirmModal>` 컴포넌트는 확인 및 취소 버튼이 있는 확인용 모달입니다.

| Name                      | Datatype                                          | Default                    | Required | Description                                |
| ------------------------- | ------------------------------------------------- | -------------------------- | :------: | ------------------------------------------ |
| isOpen                    | boolean                                           | -                          |    ✅    | 모달의 열림 상태를 제어합니다              |
| onClose                   | () => void                                        | -                          |    ✅    | 모달을 닫는 함수입니다                     |
| onConfirm                 | (e: React.MouseEvent\<HTMLButtonElement>) => void | -                          |    -     | 확인 버튼 클릭 시 실행될 핸들러 함수입니다 |
| confirmButtonText         | string                                            | "확인"                     |    -     | 확인 버튼에 표시될 텍스트입니다            |
| cancelButtonText          | string                                            | "취소"                     |    -     | 취소 버튼에 표시될 텍스트입니다            |
| confirmButtonStyle        | React.CSSProperties                               | { width: "90px" }          |    -     | 확인 버튼의 스타일을 지정합니다            |
| cancelButtonStyle         | React.CSSProperties                               | { width: "90px" }          |    -     | 취소 버튼의 스타일을 지정합니다            |
| confirmProps              | ButtonProps                                       | -                          |    -     | 확인 버튼에 전달될 추가 속성입니다         |
| cancelProps               | ButtonProps                                       | -                          |    -     | 취소 버튼에 전달될 추가 속성입니다         |
| actionButtonsWrapperStyle | React.CSSProperties                               | { 오른쪽 정렬, 너비 100% } |    -     | 버튼 컨테이너의 스타일을 지정합니다        |

### PromptModal Props

`<PromptModal>` 컴포넌트는 사용자 입력을 받는 텍스트 필드와 버튼이 있는 모달입니다.

| Name                      | Datatype                                          | Default                      | Required | Description                                |
| ------------------------- | ------------------------------------------------- | ---------------------------- | :------: | ------------------------------------------ |
| isOpen                    | boolean                                           | -                            |    ✅    | 모달의 열림 상태를 제어합니다              |
| onClose                   | () => void                                        | -                            |    ✅    | 모달을 닫는 함수입니다                     |
| inputValue                | string                                            | -                            |    ✅    | 입력 필드에 표시될 값입니다                |
| onChange                  | (e: ChangeEvent\<HTMLInputElement>) => void       | -                            |    ✅    | 입력 필드 값 변경 시 호출될 함수입니다     |
| placeholder               | string                                            | ""                           |    -     | 입력 필드의 플레이스홀더 텍스트입니다      |
| onConfirm                 | (e: React.MouseEvent\<HTMLButtonElement>) => void | -                            |    -     | 확인 버튼 클릭 시 실행될 핸들러 함수입니다 |
| confirmButtonText         | string                                            | "확인"                       |    -     | 확인 버튼에 표시될 텍스트입니다            |
| cancelButtonText          | string                                            | "취소"                       |    -     | 취소 버튼에 표시될 텍스트입니다            |
| confirmButtonStyle        | React.CSSProperties                               | { width: "90px" }            |    -     | 확인 버튼의 스타일을 지정합니다            |
| cancelButtonStyle         | React.CSSProperties                               | { width: "90px" }            |    -     | 취소 버튼의 스타일을 지정합니다            |
| confirmProps              | ButtonProps                                       | -                            |    -     | 확인 버튼에 전달될 추가 속성입니다         |
| cancelProps               | ButtonProps                                       | -                            |    -     | 취소 버튼에 전달될 추가 속성입니다         |
| wrapperStyle              | React.CSSProperties                               | { 컬럼 레이아웃, 간격 설정 } |    -     | 전체 내용 컨테이너의 스타일을 지정합니다   |
| actionButtonsWrapperStyle | React.CSSProperties                               | { 오른쪽 정렬, 너비 100% }   |    -     | 버튼 컨테이너의 스타일을 지정합니다        |

## 🔧 Button Component Props

`<Button>` 컴포넌트는 다양한 스타일과 크기를 지원하는 기본 버튼 컴포넌트입니다.

| Name     | Datatype                           | Default   | Required | Description                                  |
| -------- | ---------------------------------- | --------- | :------: | -------------------------------------------- |
| variant  | 'primary' \| 'secondary' \| 'text' | 'primary' |    -     | 버튼의 스타일 변형을 설정합니다              |
| children | ReactNode                          | "버튼"    |    -     | 버튼 내부에 표시될 텍스트 또는 요소입니다    |
| ...props | ComponentProps<"button">           | -         |    -     | 기본 button 요소에서 지원하는 모든 HTML 속성 |

### 사용 예시

```tsx
// 기본 사용법
<Button>확인</Button>

// 변형 지정
<Button variant="secondary">취소</Button>

// 추가 속성
<Button onClick={handleClick} disabled={isLoading}>
  저장하기
</Button>
```

## 🔧 Input Component Props

`<Input>` 컴포넌트는 사용자 입력을 받기 위한 텍스트 입력 필드입니다.

| Name     | Datatype                | Default | Required | Description                                 |
| -------- | ----------------------- | ------- | :------: | ------------------------------------------- |
| ...props | ComponentProps<"input"> | -       |    -     | 기본 input 요소에서 지원하는 모든 HTML 속성 |

### 사용 예시

```tsx
// 기본 사용법
<Input placeholder="이름을 입력하세요" />

// 상태 관리와 함께 사용
const [value, setValue] = useState("");

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="검색어를 입력하세요"
/>

// 추가 속성
<Input
  type="password"
  required
  minLength={8}
  placeholder="비밀번호"
/>
```

## 🚀 주요 기능

### 접근성 기능

- **키보드 접근성**: Tab 키를 이용한 포커스 이동과 포커스 트랩 지원
- **스크린 리더 지원**: 적절한 ARIA 속성 및 역할 설정
- **ESC 키 지원**: ESC 키를 눌러 모달 닫기 가능
- **포커스 관리**: 모달 열림/닫힘 시 포커스 자동 관리

### 사용자 경험 기능

- **배경 스크롤 잠금**: 모달이 열려있을 때 배경 스크롤 방지
- **다양한 모달 타입**: Alert, Confirm, Prompt 등 여러 모달 유형 지원
- **커스터마이징**: 위치, 크기, 테마 등 다양한 옵션으로 모달 스타일링

## 📌 기본 사용법

```tsx
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} title={{ text: "기본 모달" }}>
        <div style={{ padding: "20px" }}>
          <p>
            모달 컴포넌트의 children으로 다양한 콘텐츠를 추가할 수 있습니다.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={closeModal}>닫기</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
```

## 🎨 모달 유형별 사용 예시

### Alert 모달

```tsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title={{ text: "아이디를 입력해 주세요." }}
>
  <p>아이디는 필수로 입력해야 합니다.</p>
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <Modal.ActionButtons showCancel={false} />
  </div>
</Modal>
```

```tsx
<AlertModal
  isOpen={isOpen}
  onClose={closeModal}
  onConfirm={handleConfirm}
  title={{ text: "아이디를 입력해 주세요." }}
>
  <p>아이디는 필수로 입력해야 합니다.</p>
</AlertModal>
```

### Confirm 모달

```tsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title={{ text: "카드를 삭제하시겠습니까?" }}
>
  <p>삭제하면 복구하실 수 없습니다.</p>
  <Modal.ActionButtons
    onConfirm={handleDelete}
    confirmProps={{ style: { width: "90px" } }}
    cancelProps={{ style: { width: "90px" } }}
  />
</Modal>
```

```tsx
<ConfirmModal
  isOpen={isOpen}
  onClose={closeModal}
  onConfirm={handleSubmit}
  title={{ text: "카드를 삭제하시겠습니까?" }}
>
  <p>삭제하면 복구하실 수 없습니다.</p>
</ConfirmModal>
```

### Prompt 모달

```tsx
const [isOpen, setIsOpen] = useState(false);
const [inputValue, setInputValue] = useState("");

const closeModal = () => setIsOpen(false);
const openModal = () => setIsOpen(true);

const handleSubmit = () => {
  alert(`입력된 값: ${inputValue}`);
  closeModal();
};

<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title={{ text: "쿠폰 번호를 입력해 주세요." }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <Input
      placeholder="CGEXX46Z"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <Modal.ActionButtons
      onConfirm={handleSubmit}
      confirmProps={{ style: { width: "90px" } }}
      cancelProps={{ style: { width: "90px" } }}
    />
  </div>
</Modal>;
```

```tsx
<PromptModal
  inputValue={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  isOpen={isOpen}
  onClose={closeModal}
  onConfirm={handleSubmit}
  placeholder="CGEXX46Z"
  title={{ text: "쿠폰 번호를 입력해 주세요." }}
/>
```

## 🔍 커스터마이징

```tsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  position="bottom"
  size="large"
  theme="dark"
  title={{ text: "커스텀 모달", size: 24 }}
  showCloseButton={false}
>
  <div style={{ padding: "20px", color: "white" }}>
    <p>위치, 크기, 테마 등 다양한 props로 모달을 커스터마이징할 수 있습니다.</p>
    <button
      onClick={closeModal}
      style={{
        background: "#6c5ce7",
        color: "white",
        border: "none",
        padding: "8px 16px",
      }}
    >
      확인
    </button>
  </div>
</Modal>
```

## 👥 Author

[sooyeoniya](https://github.com/sooyeoniya)
