### Modal 컴포넌트

- package 이름 : rian-modal-component
- Writer : 헤일리, 리안

## Installation

```
npm install rian-modal-component
```

## Props

`children` : 모달안에 들어갈 자식 요소

`isOpen` : 모달이 현재 열렸는지 닫혔는지를 알려주는 state

`onClose` : 모달을 닫는 메서드 함수

`position` : `center` | `bottom`;

`size`: `full` | `large` | `small` | `auto`

## Children Components

### (1) Title : 모달의 제목

> `children` : 제목으로 넣고 싶은 컨텐츠

```tsx
<Modal.Title> 제목</Modal.Title>
```

### (2) CloseIcon : 모달 상단 우측의 x 버튼

안에 아이콘을 넣으면 닫기 버튼으로 사용할 수 있습니다.

> `onClick` : 사용자 정의 닫기 이벤트 핸들러

```tsx
<Modal.CloseIcon onClick={handleClose}>
  <DeleteIcon />
</Modal.CloseIcon>
```

### (3) Content : 모달의 내용

> `children` : 컨텐츠 내부에 넣고 싶은 컨텐츠

```tsx
<Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
```

### (4) StyledButton : 모달의 버튼

버튼에 이벤트를 연결해 삭제, 제출 버튼 등 다양한 버튼으로 사용할 수 있습니다.

> `label` : 해당 버튼에 들어갈 텍스트
> <br/> `onClickEvent`: 확인 버튼 클릭시 실행될 사용자 정의 이벤트 핸들러
> `backgroundColor` :`white`(default) | `black`| string
> `textColor` :`black`(default) | `white` <br/> `size` : `small` | `medium` | `large` | `full` ;

```tsx
<Modal.StyledButton
  label="동의"
  onClickEvent={() => {}}
  backgroundColor="black"
  size={"small"}
/>
```

### (5) CloseButton : 모달의 닫기 버튼

> `label` : 해당 버튼에 들어갈 텍스트  
> `onClose`: 닫기 버튼 클릭시 실행될 사용자 정의 이벤트 핸들러
> `size` : `small` | `medium` | `large` | `full` ;

```tsx
<Modal.CloseButton label="닫기" onClose={handleClose} />
```

## Usage

```tsx
import { Modal } from "rian-modal-components";

<Modal isOpen={true} position="center" onClose={() => {}} size="full">
  <Modal.Title> 약관에 동의해 주세요</Modal.Title>
  <Modal.CloseIcon onClick={() => {}}>
    <DeleteIcon />
  </Modal.CloseIcon>
  <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
  <Modal.StyledButton
    label="동의"
    onClickEvent={() => {}}
    backgroundColor="white"
  />
  <Modal.CloseButton label="닫기" onClose={() => {}} />
</Modal>;
```

## Styled Modal Components

- 필요한 props 만 넣어주면 완성되는 템플릿 형식의 modal을 제공합니다.
- `AlertModal`,`ConfirmModal`,`PromptModal` 이 있습니다.

### AlertModal

> `isOpen`[boolean] : 모달이 열려 있는지 여부
> `onClose`: 모달을 열고 닫는 함수
> `onConfirm`: 확인 버튼을 클릭할 시 들어갈 함수
> `title`: 모달의 제목
> `message`: 모달의 내용
> `buttonText?`: 확인 버튼 내용. '확인'이 기본값입니다.
> `position?`: "center" | "bottom"
> `modalSize?`: "small" | "medium" | "large" | "full"

```tsx
<AlertModal
  isOpen={true}
  onClose={() => {}}
  onConfirm={() => {}}
  title="아이디를 입력해 주세요."
  message="아이디는 필수로 입력해야 합니다."
/>
```

### ConfirmModal

> `isOpen`[boolean] : 모달이 열려 있는지 여부
> `onClose`: 모달을 열고 닫는 함수
> `onConfirm`: 확인 버튼을 클릭할 시 들어갈 함수
> `title`: 모달의 제목
> `message`: 모달의 내용
> `confirmButtonText?`: 확인 버튼 내용. '확인'이 기본값입니다.
> `cancelButtonText?`: 취소 버튼 내용. '취소'가 기본값입니다.
> `position?`: "center" | "bottom"
> `modalSize?`: "small" | "medium" | "large" | "full"

```tsx
<ConfirmModal
  isOpen={true}
  onClose={() => {}}
  onConfirm={() => {}}
  title="아이디를 입력해 주세요."
  message="아이디는 필수로 입력해야 합니다."
/>
```

### PromptModal

> `isOpen`[boolean] : 모달이 열려 있는지 여부
> `onClose`: 모달을 열고 닫는 함수
> `onConfirm`: 확인 버튼을 클릭할 시 들어갈 함수
> `title`: 모달의 제목
> `message`: 모달의 내용
> `confirmButtonText?`: 확인 버튼 내용. '확인'이 기본값입니다.
> `cancelButtonText?`: 취소 버튼 내용. '취소'가 기본값입니다.
> `position?`: "center" | "bottom"
> `modalSize?`: "small" | "medium" | "large" | "full"
> `inputProps?`: 인풋 태그에 들어갈 props 를 정의할 수 있습니다;
> `value`: 인풋의 값을 지정합니다. ;
> `onChange`: 인풋의 값을 관리하는 onChange 메서드입니다.

```tsx
<PromptModal
  isOpen={true}
  onClose={() => {}}
  onConfirm={() => {}}
  title="아이디를 입력해 주세요."
  message="아이디는 필수로 입력해야 합니다."
  onChange={onChange}
  value={value}
/>
```
