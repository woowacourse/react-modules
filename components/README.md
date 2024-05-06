# 페이먼츠 컴포넌트

### install

```
npm install nakta-react-payments-components
```

## 📦 Modal

페이먼츠 모달 컴포넌트입니다.

### attribute

- `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
- `title`: 모달 제목
- `onClose`: 모달 닫기 함수
- `existCloseButton`: 모달 닫기 버튼 유무
- `closeOnBackdropClick`: 모달 바깥을 클릭했을 때 모달 창이 닫아지는지 유무
- `children`: 하위 요소

### 사용 예시

```tsx
function App() {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: '100vw', height: '300vh' }}>
      <button onClick={onClick}>modal open</button>
      {isOpen && (
        <Modal position='center' title='제목' onClose={onClose} existCloseButton={true}>
          <div>test</div>
        </Modal>
      )}
    </div>
  );
}
```
