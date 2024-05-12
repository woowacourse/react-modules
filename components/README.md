# @seongjinme/react-modal

우아한테크코스 6기 FE 미션을 위해 제작된 React 기반의 간단한 모달 컴포넌트들입니다. 현재 지원되는 모달 컴포넌트의 종류는 다음과 같습니다.

- `Modal` : 기본 모달 컴포넌트입니다.
- `AlertModal` : 간단한 내용 출력과 "확인" 버튼이 지원되는 모달 컴포넌트입니다.
- `ConfirmModal` : 간단한 내용 출력과 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다.
- `PromptModal` : 입력 필드와 입력값의 전송 기능을 담은 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다.

## 설치 방법

```Bash
npm install @seongjinme/react-modal
```

# 사용 방법

## `Modal` 컴포넌트

```tsx
<Modal
  isOpen={isOpen}
  title="Title"
  size="medium"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttons={buttons}
  buttonsFlexDirection="column"
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</Modal>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttons` : 모달 하단에 배치할 버튼들을 설정합니다. 이 버튼들은 `ModalButtonType` 타입의 배열 형태로 추가 가능합니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`, `row-reverse`, `column`(기본값) 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### `footerButtons`를 통해 버튼을 추가하는 방법

`ModalButtonType` 타입의 데이터로 추가할 버튼 항목과 스타일을 지정합니다. 아래 예시를 참고해주세요.

```TypeScript
[
  {
    text: 'Primary Button Style',
    style: 'primary',
    onClick: () => alert('Clicked primary button!'),
  },
  {
    text: 'Secondary Button Style',
    style: 'secondary',
    onClick: () => alert('Clicked secondary button!'),
  },
]
```

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons: ModalButtonType[] = [
    {
      text: 'Primary Button Style',
      style: 'primary',
      onClick: () => alert('Clicked primary button!'),
    },
    {
      text: 'Secondary Button Style',
      style: 'secondary',
      onClick: () => alert('Clicked secondary button!'),
    },
  ];

  return (
    <>
      <h1>@seongjinme/react-modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <Modal
        isOpen={isOpen}
        title="Title"
        size="medium"
        position="center"
        hasCloseButton={true}
        buttons={buttons}
        onClose={() => setIsOpen(false)}
      >
        <p>Sample Modal!</p>
      </Modal>
    </>
  );
}
```

## `AlertModal` 컴포넌트

간단한 내용 출력과 "확인" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, `buttons`와 `children`이 지원되지 않습니다.

```tsx
<AlertModal
  isOpen={isOpen}
  size="medium"
  title="Title"
  description="Description"
  confirmButtonText="확인"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onConfirm={() => handleConfirm()}
  onClose={() => setIsOpen(false)}
/>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `description` : 모달 본문에 출력시킬 내용을 삽입합니다.
- `onConfirm` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `confirmButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>@seongjinme/react-modal/AlertModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <AlertModal
        isOpen={isOpen}
        title="Title"
        onConfirm={() => setIsOpen(false)}
        description="Description"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```

## `ConfirmModal` 컴포넌트

간단한 내용 출력과 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, `buttons`와 `children`이 지원되지 않습니다.

```tsx
<ConfirmModal
  isOpen={isOpen}
  size="medium"
  title="Title"
  description="Description"
  confirmButtonText="확인"
  cancelButtonText="취소"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onConfirm={() => handleConfirm()}
  onCancel={() => handleCancel()}
  onClose={() => setIsOpen(false)}
/>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `description` : 모달 본문에 출력시킬 내용을 삽입합니다.
- `onConfirm` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다.
- `onCancel` : 모달에서 "취소" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `confirmButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `cancelButtonText` : "취소" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `취소`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>@seongjinme/react-modal/ConfirmModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <ConfirmModal
        isOpen={isOpen}
        title="Title"
        description="Description"
        buttonsFlexDirection="row-reverse"
        onConfirm={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```

## `PromptModal` 컴포넌트

입력 필드와 입력값의 전송 기능을 담은 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, `buttons`와 `children`이 지원되지 않습니다.

```tsx
<ConfirmModal
  isOpen={isOpen}
  size="medium"
  title="Title"
  inputField={inputField}
  submitButtonText="확인"
  cancelButtonText="취소"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onSubmit={() => handleSubmit()}
  onCancel={() => handleCancel()}
  onClose={() => setIsOpen(false)}
/>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `inputField` : 모달 본문 영역에 삽입할 입력 필드를 설정합니다.
- `onSubmit` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다.
- `onCancel` : 모달에서 "취소" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `submitButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `cancelButtonText` : "취소" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `취소`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### `inputField`를 통해 버튼을 추가하는 방법

아래와 같은 양식으로 추가할 입력 필드의 스타일을 지정합니다. 예시를 참고해주세요.

```TypeScript
{
  name: 'promptCouponInput'
  label: '쿠폰 번호를 입력해주세요.',
  placeholder: '쿠폰 번호',
},
```

- `name`(필수) : 해당 입력 필드의 `<input>` 요소에 부여할 이름(name)을 정합니다.
- `label`(옵션) : 입력 필드 상단에 표기할 설명문을 정합니다.
- `placeholder`(옵션) : 해당 입력 필드의 `<input>` 요소에 위치시킬 예시값(placeholder)을 정합니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>@seongjinme/react-modal/PromptModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <PromptModal
        isOpen={isOpen}
        title="쿠폰 번호를 입력해 주세요."
        inputField={{
          name: 'promptCouponInput',
          label: '사용 가능하신 쿠폰 번호를 아래 입력 필드에 기입해주세요.',
          placeholder: '쿠폰 번호',
        }}
        buttonsFlexDirection="row-reverse"
        onSubmit={(value: string) => setInputValue(value)}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```
