---
# Seo Meta React Modal

유연하게 커스터마이징 가능한 Compound Modal과 Alert/Confirm/Prompt 등 빠르게 사용할 수 있는 고수준 모달 컴포넌트를 제공합니다.
---

## 🔹 설치

```bash
npm install seo-meta-react-modal
```

---

## 🔹 기본 사용법 (Compound Pattern)

직접 모달의 구성 요소를 조립하여 원하는 형태로 구성할 수 있습니다.

```tsx
<Modal isOpen={isOpen} onClose={handleClose} position="center" size="medium">
  <Modal.BackDrop />
  <Modal.Content>
    <Modal.Title>제목</Modal.Title>
    <p>내용입니다</p>
    <Modal.CloseButton>닫기</Modal.CloseButton>
  </Modal.Content>
</Modal>
```

<<<<<<< HEAD

### 📘 구성 컴포넌트

| 컴포넌트            | 설명                                               |
| ------------------- | -------------------------------------------------- |
| `Modal`             | 루트 컴포넌트. ESC 키, 외부 클릭, 스크롤 차단 내장 |
| `Modal.BackDrop`    | 배경 오버레이                                      |
| `Modal.Content`     | 콘텐츠 영역. 위치 및 사이즈 지정                   |
| `Modal.Title`       | 제목                                               |
| `Modal.CloseButton` | 닫기 버튼                                          |
| `Modal.Footer`      | 푸터 정렬 컨테이너                                 |

---

## 🔹 빠르게 사용하는 고수준 컴포넌트 (Alert / Confirm / Prompt)

직접 `Modal.*`를 조립하지 않고도, 빠르게 사용할 수 있는 **간단한 API**입니다.

### ✅ AlertModal

```tsx
<AlertModal isOpen={isOpen} onClose={handleClose} message="비밀번호가 틀렸습니다." />
```

### ✅ ConfirmModal

```tsx
<ConfirmModal isOpen={isOpen} onClose={handleClose} title="삭제하시겠습니까?" message="복구할 수 없습니다." onConfirm={handleDelete} />
```

### ✅ PromptModal

```tsx
<PromptModal isOpen={isOpen} onClose={handleClose} title="쿠폰 코드를 입력해 주세요" onConfirm={(code) => console.log('입력값:', code)} />
```

> 내부적으로 `Modal` 컴포넌트를 사용하며, 스타일/기능 확장도 가능합니다.

---

## 🧩 언제 어떤 걸 써야 하나요?

| 목적                       | 추천 컴포넌트            |
| -------------------------- | ------------------------ |
| 빠른 확인/입력용 모달      | Alert / Confirm / Prompt |
| 커스터마이징이 필요한 경우 | Modal Compound API       |

---

## 📄 라이선스

MIT License
© 2025 youdame,
=======

### 바텀시트 모달 (Bottom Sheet Modal)

```tsx
<Modal onClose={close}>
  <Modal.BackDrop onClose={close} backgroundColor="rgba(0, 0, 0, 0.6)" />
  <Modal.Content position="bottom" style={{ height: '300px', width: '100%' }}>
    <Modal.Title>바텀 시트</Modal.Title>
    <p>이 모달은 화면 하단에서 올라옵니다.</p>
    <Modal.Button onClick={close}>확인</Modal.Button>
  </Modal.Content>
</Modal>
```

## 컴포넌트 구성

| 컴포넌트            | 설명                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `Modal`             | 모달 루트 컴포넌트. `onClose` prop은 필수입니다. 내부적으로 ESC 키와 스크롤 차단을 처리합니다.  |
| `Modal.BackDrop`    | 배경 오버레이. `backgroundColor`, `onClose`를 받을 수 있습니다. 바깥 클릭 시 닫기를 처리합니다. |
| `Modal.Content`     | 모달 콘텐츠 박스. `position`(`center` or `bottom`) 지정 가능합니다.                             |
| `Modal.Title`       | 제목 영역용 컴포넌트입니다.                                                                     |
| `Modal.CloseButton` | 닫기 버튼으로 사용할 수 있는 컴포넌트입니다. `onClick`은 필수입니다.                            |
| `Modal.Button`      | 확인 등의 용도에 사용할 수 있는 일반 버튼입니다.                                                |

## 주의 사항

- `Modal`은 열고/닫는 상태를 내장하지 않습니다. `useState`를 사용하여 직접 열고 닫는 로직을 구성해야 합니다.

## 라이선스

MIT License

© 2025 youdame, jin123457

> > > > > > > d81f1417918a6e7d7e6fd015419274b3e8808d30
