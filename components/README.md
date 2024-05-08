# 모달 컴포넌트

## 설치 방법

> npm install soosoo-react-payments-components

- ### Modal

  - `position`: `bottom | center | top` 입력 값에 따라 모달 중앙, 하단 배치
  - `title`: 모달 제목 설정
  - `children`: 하위 요소 전달
  - `isOpen`: `true | false`에 따라 모달 렌더링
  - `onClose`: 모달 닫기 함수 전달
  - `closeButton` : 모달 닫기 버튼 설정
  - `footerButtons` : 모달 하단에 표시되는 버튼 목록

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
