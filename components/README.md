# Modal Module
리액트, Emotion 환경에서 사용할 수 있는 Modal 컴포넌트 모듈입니다.
끄기버튼, 확인/취소 버튼을 사용할지 말지 개별적으로 선택할수있습니다.


## 예시화면
<img src="https://i.imgur.com/Su9DjPp.png" width="300px"/>

### 사용법
```typescript
const MyComponent = () => {
  const { isOpen, closeModal, confirmModal } = useModalState(true, { onOpen:()=>{}, onClose:()=>{}, onConfirm:()=>{} });
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      confirmModal={confirmModal}
      close={true}
    >{"안에 띄우고 싶은 내용"}</Modal>
  );
};

```
### Props
isOpen, closeModal, confirmModal은 필수항목이며, useModalState의 반환값입니다.
이외의 props는 선택적 항목입니다.

<img src="https://i.imgur.com/MEvBqJK.png" width="500px" />
