# 컴포넌트

### 모달 컴포넌트

- [x] 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.
- [x] 피그마 시안 예시처럼 모바일에서 사용 가능한 모달 컴포넌트를 만들어야 한다.
- [x] 모달 위치 및 내용 구성 옵션을 `prop`으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.
  - `position`: `bottom | center` 입력 값에 따라 모달 중앙, 하단 배치
  - `title`: 모달 제목 설정
  - `children`: 하위 요소 전달
  - `isOpen`: `true | false`에 따라 모달 렌더링
  - `onClose`: 모달 닫기 함수 전달
  - `closeButton` : 모달 닫기 버튼 설정
  - `confirmButton` : 모달 확인 버튼 설정
  - `cancelButton` : 모달 취소 버튼 설정
- [x] 사용자 정의 이벤트 핸들러를 지원해야 한다.

  - [x] 모달 닫기 이벤트 핸들러 구현

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
    - `confirmButton` : 모달에 확인 버튼을 표시하고, 확인 버튼을 클릭했을 때 실행될 함수를 설정
      - `content` : 확인 버튼의 텍스트 내용
      - `onConfirm` : 사용자가 확인 버튼을 클릭하면 onConfirm 함수 실행
    - `cancelButton` : 모달에 취소 버튼을 표시하고, 취소 버튼을 클릭했을 때 실행될 함수를 설정
      - `content` : 취소 버튼의 텍스트 내용
      - `onCancel` : 사용자가 취소 버튼을 클릭하면 onCancel 함수 실행
