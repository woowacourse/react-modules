# woowacourse-modal-component-marvin

React 애플리케이션을 위한 유연하고 커스터마이징이 가능한 모달 컴포넌트입니다.

## 설치 방법

```bash
npm i woowacourse-modal-component-marvin
```

## 기본 사용 방법

```tsx
import React, { useState } from "react";
import { Modal } from "woowacourse-modal-component-marvin";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={toggleModal} id="trigger-button">
        모달창 트리거
      </button>

      <Modal isOpen={isOpen} onClose={closeModal} position="center">
        <Modal.Background>
          <Modal.Container>
            <Modal.Header>모달 제목입니다</Modal.Header>
            <Modal.Content>
              <p>모달 내용입니다.</p>
            </Modal.Content>
          </Modal.Container>
        </Modal.Background>
      </Modal>
    </>
  );
}

export default App;
```

## 모달 타입

### 1. 기본 모달

사용자 정의 컨텐츠를 포함할 수 있는 기본 모달입니다.

```tsx
<Modal isOpen={isOpen} onClose={closeModal} position="center">
  <Modal.Background>
    <Modal.Container>
      <Modal.Header>모달 제목입니다</Modal.Header>
      <Modal.Content>
        <p>모달 내용입니다.</p>
      </Modal.Content>
    </Modal.Container>
  </Modal.Background>
</Modal>
```

### 2. Alert 모달

간단한 알림 메시지를 표시하는 모달입니다.

```tsx
<Modal.Alert
  isOpen={isAlertOpen}
  onClose={() => setIsAlertOpen(false)}
  title="알림"
  message="작업이 완료되었습니다!"
  onConfirm={() => console.log("확인 버튼 클릭")}
  position="center"
  size="medium"
/>
```

### 3. Confirm 모달

사용자에게 확인/취소 옵션을 제공하는 모달입니다.

```tsx
<Modal.Confirm
  isOpen={isConfirmOpen}
  onClose={() => setIsConfirmOpen(false)}
  title="확인"
  message="정말로 삭제하시겠습니까?"
  onConfirm={() => console.log("확인 버튼 클릭")}
  onCancel={() => console.log("취소 버튼 클릭")}
  position="center"
  size="medium"
/>
```

### 4. Prompt 모달

사용자 입력을 받는 모달입니다.

```tsx
<Modal.Prompt
  isOpen={isPromptOpen}
  onClose={() => setIsPromptOpen(false)}
  title="입력하세요"
  onConfirm={(value) => console.log("입력값:", value)}
  onCancel={() => console.log("취소 버튼 클릭")}
  placeholder="여기에 입력하세요"
  position="center"
  size="medium"
/>
```

## 모달 위치 옵션

- `center`: 화면 중앙에 표시 (기본값)
- `bottom`: 화면 하단에서 올라오는 형태로 표시

## 모달 크기 옵션

- `small`: 작은 크기
- `medium`: 중간 크기 (기본값)
- `large`: 큰 크기

## Props

### Modal 컴포넌트 Props

| Prop       | Type                                          | 필수 여부 | 기본값    | 설명                              |
| ---------- | --------------------------------------------- | --------- | --------- | --------------------------------- |
| isOpen     | boolean                                       | 예        | -         | 모달 표시 여부 제어               |
| onClose    | () => void                                    | 예        | -         | 모달이 닫힐 때 호출되는 콜백 함수 |
| position   | 'center' \| 'bottom'                          | 아니오    | 'center'  | 모달 위치                         |
| dialogType | 'default' \| 'alert' \| 'confirm' \| 'prompt' | 아니오    | 'default' | 모달 대화상자 유형                |
| children   | React.ReactNode                               | 예        | -         | 모달 내용                         |

### Modal.Alert Props

| Prop      | Type                           | 필수 여부 | 기본값   | 설명                              |
| --------- | ------------------------------ | --------- | -------- | --------------------------------- |
| isOpen    | boolean                        | 예        | -        | 모달 표시 여부 제어               |
| onClose   | () => void                     | 예        | -        | 모달이 닫힐 때 호출되는 콜백 함수 |
| title     | string                         | 예        | -        | 모달 제목                         |
| message   | string                         | 예        | -        | 표시할 메시지                     |
| onConfirm | () => void                     | 예        | -        | 확인 버튼 클릭 시 호출되는 함수   |
| position  | 'center' \| 'bottom'           | 아니오    | 'center' | 모달 위치                         |
| size      | 'small' \| 'medium' \| 'large' | 아니오    | 'medium' | 모달 크기                         |

### Modal.Confirm Props

| Prop      | Type                           | 필수 여부 | 기본값   | 설명                              |
| --------- | ------------------------------ | --------- | -------- | --------------------------------- |
| isOpen    | boolean                        | 예        | -        | 모달 표시 여부 제어               |
| onClose   | () => void                     | 예        | -        | 모달이 닫힐 때 호출되는 콜백 함수 |
| title     | string                         | 예        | -        | 모달 제목                         |
| message   | string                         | 예        | -        | 표시할 메시지                     |
| onConfirm | () => void                     | 예        | -        | 확인 버튼 클릭 시 호출되는 함수   |
| onCancel  | () => void                     | 예        | -        | 취소 버튼 클릭 시 호출되는 함수   |
| position  | 'center' \| 'bottom'           | 아니오    | 'center' | 모달 위치                         |
| size      | 'small' \| 'medium' \| 'large' | 아니오    | 'medium' | 모달 크기                         |

### Modal.Prompt Props

| Prop        | Type                           | 필수 여부 | 기본값            | 설명                              |
| ----------- | ------------------------------ | --------- | ----------------- | --------------------------------- |
| isOpen      | boolean                        | 예        | -                 | 모달 표시 여부 제어               |
| onClose     | () => void                     | 예        | -                 | 모달이 닫힐 때 호출되는 콜백 함수 |
| title       | string                         | 예        | -                 | 모달 제목                         |
| onConfirm   | (value: string) => void        | 예        | -                 | 확인 버튼 클릭 시 호출되는 함수   |
| onCancel    | () => void                     | 예        | -                 | 취소 버튼 클릭 시 호출되는 함수   |
| position    | 'center' \| 'bottom'           | 아니오    | 'center'          | 모달 위치                         |
| size        | 'small' \| 'medium' \| 'large' | 아니오    | 'medium'          | 모달 크기                         |
| placeholder | string                         | 아니오    | '값을 입력하세요' | 입력 필드 플레이스홀더 텍스트     |

## 특징

- **접근성**: 키보드 트랩 및 ESC 키로 닫기 지원
- **위치 옵션**: 중앙 또는 하단 위치 선택 가능
- **크기 옵션**: 작은, 중간, 큰 크기 선택 가능
- **다양한 대화상자 유형**: 기본, 알림(Alert), 확인(Confirm), 입력(Prompt) 모달 지원
- **커스터마이징**: 컴포넌트 기반 API로 유연한 구성 가능
- **포털 렌더링**: 모달이 DOM 계층 구조에 관계없이 body에 렌더링됨

## 스토리북

https://step2--6812ddd3aa5be0c9ccb7572d.chromatic.com
