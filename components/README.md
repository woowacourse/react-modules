# le-sserafim

`le-sserrafim`은 React 기반 프로젝트에서 사용할 수 있는 모달 컴포넌트 라이브러리입니다. 이 모달 컴포넌트는 `styled-components` 및 `@emotion/styled`를 사용하여 스타일링되어 있으며, 사용자가 종료, 확인 작업을 쉽게 수행할 수 있도록 다양한 속성을 지원합니다. 또한, 모달의 위치를 설정할 수 있는 기능(중앙 혹은 하단에 배치)과 닫기 버튼의 표시 여부를 선택할 수 있는 옵션도 포함하고 있습니다.

## 공통 기능

- **이스케이프(ESC) 키로 모달 닫기:** 사용자가 이스케이프(ESC) 키를 누를 때 모달이 닫히는 기능을 지원합니다.
- **커스터마이징 가능한 버튼 텍스트 및 이벤트 핸들러:** 확인 버튼의 텍스트를 사용자 정의할 수 있으며, 선택적으로 버튼에 대한 커스텀 클릭 이벤트 핸들러도 설정할 수 있습니다.
- **모달 위치 설정:** 모달을 화면의 중앙 혹은 하단에 위치시키는 옵션을 제공합니다.
- **닫기 버튼 옵션:** 모달에 닫기 버튼을 표시할지 여부를 결정하는 옵션을 포함합니다.

## 설치 방법

```bash
npm i le-sserrafim
```

## Modal 사용 방법

```jsx
import React from 'react';
import Modal from 'le-sserafim';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title='제목'
          buttonText='확인'
          position='center'
          hasCloseButton={true}
        >
          모달에 들어간 컴포넌트는 여기에 위치합니다.
        </Modal>
      )}
    </>
  );
}
```

## Modal Props

`Modal` 컴포넌트는 다음과 같은 props를 지원합니다:

- `onClose`: 닫기 이벤트 시 호출될 함수입니다. 필수입니다.
- `onConfirm`: 확인 버튼 클릭 시 호출될 함수입니다. 선택 사항입니다.
- `title`: 모달의 제목입니다. 선택 사항입니다.
- `buttonText`: 확인 버튼의 텍스트입니다. 선택 사항입니다.
- `children`: 모달의 내용으로 렌더링될 요소입니다.
- `hasCloseButton`: 닫기 버튼의 표시 여부를 결정합니다. 기본값은 `true`입니다.
- `size`: 모달의 사이즈를 설정합니다. `'small'` 또는 `'medium'`, `'large'`, `'full-width'`을 설정할 수 있습니다. 기본값은 `'medium'`입니다.
- `position`: 모달의 위치를 설정합니다. `'center'` 또는 `'bottom'`을 설정할 수 있으며, 기본값은 `'center'`입니다.

## AlertModal 사용 방법

```jsx
import React from 'react';
import Modal from 'le-sserafim';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      {isModalOpen && (
        <AlertModal
          title={'아이디를 입력해주세요'}
          onConfirm={() => setIsModalOpen(false)}
        >
          아이디는 필수로 입력해야 합니다.
        </AlertModal>
      )}
    </>
  );
}
```

## AlertModal Props

`AlertModal` 컴포넌트는 다음과 같은 props를 지원합니다:

- `title`: 모달의 제목입니다. 선택 사항 입니다.
- `onConfirm`: 확인 버튼 클릭 시 호출될 함수입니다. 선택 사항입니다.
- `children`: 모달의 내용으로 렌더링될 요소입니다.
- `size`: 모달의 사이즈를 설정합니다. `'small'` 또는 `'medium'`, `'large'`, `'full-width'`을 설정할 수 있습니다. 기본값은 `'medium'`입니다.
- `position`: 모달의 위치를 설정합니다. `'center'` 또는 `'bottom'`을 설정할 수 있으며, 기본값은 `'center'`입니다.

## ConfirmModal 사용 방법

```jsx
import React from 'react';
import Modal from 'le-sserafim';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      {isModalOpen && (
        <ConfirmModal
          title={'아이디를 삭제하시겠습니까?'}
          onCancel={() => alert('취소할 수 없습니다.')}
          onConfirm={() => setIsModalOpen(false)}
        >
          삭제하면 복구하실 수 없습니다.
        </ConfirmModal>
      )}
    </>
  );
}
```

## ConfirmModal Props

`ConfirmModal` 컴포넌트는 다음과 같은 props를 지원합니다:

- `title`: 모달의 제목입니다. 선택 사항 입니다.
- `onConfirm`: 확인 버튼 클릭 시 호출될 함수입니다. 필수 사항입니다.
- `onCancel`: 취소 버튼 클릭 시 호출될 함수입니다. 필수 사항입니다.
- `children`: 모달의 내용으로 렌더링될 요소입니다.
- `size`: 모달의 사이즈를 설정합니다. `'small'` 또는 `'medium'`, `'large'`, `'full-width'`을 설정할 수 있습니다. 기본값은 `'medium'`입니다.
- `position`: 모달의 위치를 설정합니다. `'center'` 또는 `'bottom'`을 설정할 수 있으며, 기본값은 `'center'`입니다.

## PromptModal 사용 방법

```jsx
import React from 'react';
import Modal from 'le-sserafim';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      {isModalOpen && (
        <PromptModal
          title={'아이디를 삭제하시겠습니까?'}
          onCancel={() => alert('취소할 수 없습니다.')}
          onConfirm={() => setIsModalOpen(false)}
        >
          삭제하면 복구하실 수 없습니다.
        </PromptModal>
      )}
    </>
  );
}
```

## PromptModal Props

`ProptModal` 컴포넌트는 다음과 같은 props를 지원합니다:

- `title`: 모달의 제목입니다. 선택 사항 입니다.
- `onConfirm`: 확인 버튼 클릭 시 호출될 함수입니다. 필수 사항입니다.
- `size`: 모달의 사이즈를 설정합니다. `'small'` 또는 `'medium'`, `'large'`, `'full-width'`을 설정할 수 있습니다. 기본값은 `'medium'`입니다.
- `position`: 모달의 위치를 설정합니다. `'center'` 또는 `'bottom'`을 설정할 수 있으며, 기본값은 `'center'`입니다.

## PromptModal 주의사항

- children을 넣을 수 없는 엘리먼트로 self-closing 해야 합니다.

## CompoundModal 사용예시

```jsx
import React from 'react';
import Modal from 'le-sserrafim/CompoundModal';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <CompoundModal position='bottom' onClose={() => setIsOpen(false)}>
          <CompoundModal.titleBar>
            <CompoundModalTitle>123</CompoundModalTitle>
            <CompoundModal.closeButton />
          </CompoundModal.titleBar>
          컨텐츠 내용
          <CompoundModal.button buttonTheme='primary' isCloseButton={true}>
            닫기
          </CompoundModal.button>
        </CompoundModal>
      )}
    </>
  );
}
```

## CompoundModal 주의사항

`<CompoundModal.closeButton>`은 오직 `<CompoundModal.titleBar>`의 하위요소에서 사용할 것을 권장합니다.
