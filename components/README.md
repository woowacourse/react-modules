# 📦 Modal 컴포넌트

우아한테크코스 components 모듈 배포 실습용 **조립형 모달 컴포넌트**입니다.  
`isOpen`, `handleCloseModal`과 함께 내부 구조를 구성할 수 있는 여러 컴포넌트를 제공하여, **유연하게 레이아웃을 조합**할 수 있습니다.

---

## ✨ Features

- Compound Component Pattern 기반 구조 제공
- `Modal.Title`, `Modal.Content`, `Modal.CloseButton` 등 **조립 가능한 서브 컴포넌트**
- 가운데 또는 하단 위치 지정 가능 (`"center"`, `"bottom"`)
- 외부 영역 클릭 및 키보드 이벤트로 모달 닫기 지원
- React + TypeScript 기반

---

## 📦 설치

```bash
npm install @woowacourse/modal
# 또는
yarn add @woowacourse/modal
```

---

## ♿️ 키보드 접근성을 위한 FocusTrap

모달 내에서 키보드(Tab 키)로 포커스를 순환하도록 제한합니다.
키보드 포커스 제어가 필요한 컴포넌트를 직접 래핑하여 사용할 수 있습니다.
Shift + Tab 또는 Tab 키를 누를 때 포커스가 순환되며 모달 외부로 벗어나지 않습니다.

```typescript
<Modal isOpen={isOpen} onModalClose={handleCloseModal}>
  <Modal.Background onClick={handleCloseModal} />
  <Modal.ModalContainer $position="center" $size="large">
    <Modal.ModalFocusTrap>
      <Modal.Title>접근성 테스트</Modal.Title>
      <Modal.ModalContent>
        <input type="text" placeholder="이름" />
        <button>확인</button>
      </Modal.ModalContent>
    </Modal.ModalFocusTrap>
  </Modal.ModalContainer>
</Modal>
```

## 🧩 사용 예시

## 🧪 사용 예제

### ✅ Alert 모달 (확인만 있는 단순 메시지)

```typescript
<Modal isOpen={isOpen} onModalClose={handleModalClose}>
  <Modal.Background onClick={handleModalClose} />
  <Modal.ModalContainer $position="center" $size="medium">
    <Modal.Title>알림</Modal.Title>
    <Modal.ModalContent>
      카드 정보가 정상적으로 저장되었습니다.
    </Modal.ModalContent>
    <Modal.ModalButtonContainer>
      <Modal.ModalButton onClick={handleModalClose}>확인</Modal.ModalButton>
    </Modal.ModalButtonContainer>
  </Modal.ModalContainer>
</Modal>
```

### ✅ Confirm 모달 (확인 + 취소 버튼 제공)

```typescript
<Modal isOpen={isOpen} onModalClose={handleModalClose}>
  <Modal.Background onClick={handleModalClose} />
  <Modal.ModalContainer $position="center" $size="medium">
    <Modal.Title>카드 삭제</Modal.Title>
    <Modal.ModalContent>이 카드를 정말 삭제하시겠습니까?</Modal.ModalContent>
    <Modal.ModalButtonContainer>
      <Modal.ModalButton onClick={handleConfirm}>확인</Modal.ModalButton>
      <Modal.ModalButton onClick={handleModalClose}>취소</Modal.ModalButton>
    </Modal.ModalButtonContainer>
  </Modal.ModalContainer>
</Modal>
```

### ✅ Prompt 모달 (입력 필드 포함)

```typescript
<Modal isOpen={isOpen} onModalClose={handleModalClose}>
  <Modal.Background onClick={handleModalClose} />
  <Modal.ModalContainer $position="center" $size="medium">
    <Modal.Title>카드 별칭 설정</Modal.Title>
    <Modal.ModalContent>
      <input
        type="text"
        value={nickname}
        onChange={handleChange}
        placeholder="ex) 내 첫 카드"
      />
    </Modal.ModalContent>
    <Modal.ModalButtonContainer>
      <Modal.ModalButton onClick={handleSubmit}>저장</Modal.ModalButton>
      <Modal.ModalButton onClick={handleModalClose}>취소</Modal.ModalButton>
    </Modal.ModalButtonContainer>
  </Modal.ModalContainer>
</Modal>
```

---
