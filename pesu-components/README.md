# Pesu Components / Modal 컴포넌트

`Modal.tsx`는 React 환경에서 재사용 가능한 모달 UI를 제공하는 컴포넌트입니다.  
컨텍스트 기반의 제어, 다양한 위치/크기/마진/z-index 옵션, 트리거 및 내부 구조 분할 등 확장성과 커스터마이즈에 중점을 두고 설계되었습니다.

---

## 주요 특징

- **컨텍스트 기반 제어**: `ModalContext`를 통해 모달의 열림/닫힘 상태를 전역적으로 관리
- **다양한 옵션**: 위치(`center`/`bottom`), 마진, z-index, 크기(`small`/`medium`/`large`) 등 다양한 UI 옵션 제공
- **컴포지션 패턴**: `Modal.Top`, `Modal.Content`, `Modal.Bottom` 등 slot 기반의 구조적 분할
- **트리거/닫기/확인/취소 버튼 등 내장**
- **포커스 관리 및 ESC 키 닫기 지원**

---

## 사용 예시

```tsx
import Modal from 'pesu-components/src/components/Modal/Modal';

function Example() {
  return (
    <Modal.Wrapper>
      <Modal.Trigger>모달 열기</Modal.Trigger>
      <Modal position="center" size="medium">
        <Modal.Top>
          <Modal.Title>제목</Modal.Title>
          <Modal.Close>
            <Modal.CloseIcon />
          </Modal.Close>
        </Modal.Top>
        <Modal.Content>모달 내용</Modal.Content>
        <Modal.Bottom>
          <Modal.ButtonContainer>
            <Modal.CancelButton>취소</Modal.CancelButton>
            <Modal.ConfirmButton onClick={() => alert('확인')}>확인</Modal.ConfirmButton>
          </Modal.ButtonContainer>
        </Modal.Bottom>
      </Modal>
    </Modal.Wrapper>
  );
}
```

---

## 컴포넌트 구조

- **Modal.Wrapper**  
  모달의 컨텍스트를 제공하며, 내부에서 모달 상태를 관리합니다.

- **Modal.Trigger**  
  모달을 여는 버튼 역할을 합니다.

- **Modal**  
  실제 모달 UI를 렌더링합니다.  
  주요 props:

  - `position`: `'center' | 'bottom'` (기본값: `'center'`)
  - `margin`: `number` (기본값: `20`)
  - `zIndex`: `number` (기본값: `10`)
  - `size`: `'small' | 'medium' | 'large'` (기본값: `'medium'`)

- **Modal.Top / Modal.Title / Modal.Close**  
  모달 상단 영역, 제목, 닫기 버튼

- **Modal.Content**  
  모달 본문 영역

- **Modal.Bottom / Modal.ButtonContainer / Modal.CancelButton / Modal.ConfirmButton**  
  하단 버튼 영역 및 버튼들

- **Modal.PromptInput**  
  입력이 필요한 모달에서 사용

---

## 컨텍스트 API

```ts
type ModalContext = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};
```

- `useContext(ModalContext)`로 모달 상태 및 제어 함수 사용 가능

---

## 기타

- ESC 키로 모달 닫기 지원
- 포커스 자동 이동 지원 (`useAutoFocus` 사용)
- `createPortal`로 body에 모달 렌더링
