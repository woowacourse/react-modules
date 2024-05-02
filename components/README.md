# Button Module

### 페이먼츠 커스텀 훅

- package 이름 : rian-modal-compoent
- Writer : 헤일리, 리안

## Installation

```
npm install rian-modal-compoent
```

## Props

`children` : 모달안에 들어갈 자식 요소

`isOpen` : 모달이 현재 열렸는지 닫혔는지를 알려주는 state

`position` : `center` | `bottom`;

`onClose` : 모달을 닫는 메서드 함수

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

### (4) ConfirmButton : 모달의 확인 버튼

onConfirm에 확인시 실행될 함수를 연결할 수 있습니다.

> `label` : 해당 버튼에 들어갈 텍스트  
> `onConfirm`: 확인 버튼 클릭시 실행될 사용자 정의 이벤트 핸들러

```tsx
<Modal.ConfirmButton label="동의" onConfirm={handleConfirm} />
```

### (5) CloseButton : 모달의 닫기 버튼

> `label` : 해당 버튼에 들어갈 텍스트  
> `onClose`: 닫기 버튼 클릭시 실행될 사용자 정의 이벤트 핸들러

```tsx
<Modal.CloseButton label="닫기" onClose={handleClose} />
```

## Usage

```tsx
<Modal isOpen={isModalOpen} position="center" onClose={handleClose}>
  <Modal.Title> 약관에 동의해 주세요</Modal.Title>
  <Modal.CloseIcon onClick={handleClose}>
    <DeleteIcon />
  </Modal.CloseIcon>
  <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
  <Modal.ConfirmButton label="동의" onConfirm={handleConfirm} />
  <Modal.CloseButton label="닫기" onClose={handleClose} />
</Modal>
```
