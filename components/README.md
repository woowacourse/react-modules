# Modal Module

## 설치 방법

> npm install soosoo-react-modal-component

- ### Modal

  - `position`: `bottom | center | top` 입력 값에 따라 모달 중앙, 하단 배치
  - `size` : `small | medium | large` 입력 값에 따라 모달 크기 조절
  - `title`: 모달 제목 설정
  - `isOpen`: `true | false`에 따라 모달 렌더링
  - `onClose`: 모달 닫기 함수 전달
  - `closeButton` : 모달 닫기 버튼 설정
  - `footerButtons` : 모달 하단에 표시되는 버튼 목록
  - `children`: 하위 요소 전달

  - ### 예시 화면

    <img width="496" alt="ModalStorybook" src="https://github.com/woowacourse/react-modules/assets/80167893/7aaba6b7-7042-42c5-aba2-b44b33180313">

  - ### 사용 방법
    ```js
    <Modal
      position="center"
      size="small"
      title={{ position: "left", content: "🍀호프는 몇 살일까?🍀" }}
      isOpen={isOpen}
      onClose={() => {}}
      closeButton={{ onClose: () => {} }}
      footerButtons={modalFooterButtons}
    >
      {children}
    </Modal>
    ```

- ### AlertModal

> 사용자에게 메시지를 전달하고 확인 버튼만 제공

- `position`: `bottom | center | top` 입력 값에 따라 모달 중앙, 하단 배치
- `size` : `small | medium | large` 입력 값에 따라 모달 크기 조절
- `title`: 모달 제목 설정
- `isOpen`: `true | false`에 따라 모달 렌더링
- `confirmButton` : 모달 하단에 표시되는 확인 버튼
  - `content` : 버튼에 표시되는 내용
  - `onConfirm` : 확인 버튼을 클릭했을 때 호출되는 함수
- `children`: 하위 요소 전달

- ### 예시 화면

  <img width="496" alt="스크린샷 2024-05-12 오전 9 56 20" src="https://github.com/woowacourse/react-modules/assets/80167893/84c42922-274c-4610-9ae9-c158fbdeeb85">

- ### 사용 방법

  ```js
  <AlertModal
    position="center"
    size="small"
    title={{ position: "left", content: "🍀호프의 나이를 입력해 주세요.🍀" }}
    isOpen={isOpen}
    confirmButton={{ content: "확인", onConfirm: () => {} }}
  >
    나이는 필수로 입력해야 합니다.
  </AlertModal>
  ```

- ### ConfirmModal

> 사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공

- `position`: `bottom | center | top` 입력 값에 따라 모달 중앙, 하단 배치
- `size` : `small | medium | large` 입력 값에 따라 모달 크기 조절
- `title`: 모달 제목 설정
- `isOpen`: `true | false`에 따라 모달 렌더링
- `confirmButton` : 모달 하단에 표시되는 확인 버튼
  - `content` : 버튼에 표시되는 내용
  - `onConfirm` : 확인 버튼을 클릭했을 때 호출되는 함수
- `cancelButton` : 모달 하단에 표시되는 취소 버튼
  - `content` : 버튼에 표시되는 내용
  - `onCancel` : 취소 버튼을 클릭했을 때 호출되는 함수
- `children`: 하위 요소 전달

- ### 예시 화면

  <img width="496" alt="스크린샷 2024-05-12 오전 10 13 02" src="https://github.com/woowacourse/react-modules/assets/80167893/5f12108a-11d0-4d7b-8df3-61e9a86ee137">

- ### 사용 방법

  ```js
  <ConfirmModal
    position="center"
    size="small"
    title={{ position: "left", content: "🍀호프를 삭제하시겠습니까?🍀" }}
    isOpen={isOpen}
    confirmButton={{ content: "확인", onConfirm: () => {} }}
    cancelButton={{ content: "취소", onCancel: () => {} }}
  >
    삭제하면 복구하실 수 없습니다.
  </ConfirmModal>
  ```

- ### PromptModal

> 사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공

- `position`: `bottom | center | top` 입력 값에 따라 모달 중앙, 하단 배치
- `size` : `small | medium | large` 입력 값에 따라 모달 크기 조절
- `title`: 모달 제목 설정
- `isOpen`: `true | false`에 따라 모달 렌더링
- `confirmButton` : 모달 하단에 표시되는 확인 버튼
  - `content` : 버튼에 표시되는 내용
  - `onConfirm` : 확인 버튼을 클릭했을 때 호출되는 함수
- `cancelButton` : 모달 하단에 표시되는 취소 버튼
  - `content` : 버튼에 표시되는 내용
  - `onCancel` : 취소 버튼을 클릭했을 때 호출되는 함수
- `children`: 하위 요소 전달

- ### 예시 화면

  <img width="496" alt="스크린샷 2024-05-12 오전 10 07 10" src="https://github.com/woowacourse/react-modules/assets/80167893/9c295dd1-1091-47e1-8c7c-2080615c00e0">

- ### 사용 방법

  ```js
  <PromptModal
    position="center"
    size="small"
    title={{ position: "left", content: "🍀호프 번호를 입력해 주세요.🍀" }}
    isOpen={isPromptModalOpen}
    confirmButton={{ content: "확인", onConfirm: () => {} }}
    cancelButton={{ content: "취소", onCancel: () => {} }}
  />
  ```

- ### ModalHeader

  - **props**
    - `title` : 모달 제목 표시
      - `position` : `left | center` 입력 값에 따라 모달 제목 좌측, 중앙 배치
      - `content` : 모달 제목 내용
    - `closeButton` : 모달에 닫기 버튼을 표시하고, 닫기 버튼을 클릭했을 때 실행될 함수를 설정
      - `onClose` : 닫기 버튼을 클릭하면 onClose 함수 실행

- ### ModalContent

  - **props**
    - `children` : 모달 내용을 구성하는 하위 요소

- ### ModalFooter
  - **props**
    - `footerButtons` : 모달 하단에 표시되는 버튼 목록
      - `content` : 버튼에 표시되는 내용
      - `onClick` : 버튼을 클릭했을 때 호출되는 함수
      - `className` : 버튼에 해당하는 css 클래스명
      - `style` : 버튼에 적용되는 스타일
