# Modal 컴포넌트

React 애플리케이션을 위한 유연하고 커스터마이징이 가능한 모달 컴포넌트입니다.

## 설치 방법

```bash
npm install compoents-modal-test-kangoll

```

## 사용 방법

```tsx
import { Modal } from "compoents-modal-test-kangoll";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal
        position="center"
        title="모달 제목"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>모달 내용</p>
      </Modal>
    </>
  );
}
```

## 스토리북

https://step1--6812ddd3aa5be0c9ccb7572d.chromatic.com

## Props

| Prop     | Type      | 필수 여부 | 기본값   | 설명                                  |
| -------- | --------- | --------- | -------- | ------------------------------------- |
| position | string    | 아니오    | 'center' | 모달 위치 ('center', 'top', 'bottom') |
| title    | string    | 예        | -        | 모달 제목                             |
| isOpen   | boolean   | 예        | -        | 모달 표시 여부 제어                   |
| onClose  | function  | 예        | -        | 모달이 닫힐 때 호출되는 콜백 함수     |
| children | ReactNode | 예        | -        | 모달 내용                             |

## 기능

- 중앙, 상단, 하단 위치 옵션
- 커스터마이징 가능한 제목과 내용
- 부드러운 열기/닫기 애니메이션
- 외부 클릭 시 닫힘
- 키보드 지원 (ESC 키로 닫기)
