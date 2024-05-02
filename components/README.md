# ryan-modal

## 간단한 설명

`ryan-modal`은 일반적으로 재사용 가능한 모달 컴포넌트입니다. 사용자가 커스터마이징할 수 있는 다양한 옵션을 제공하여 모달을 쉽게 구성할 수 있습니다.

## 설치 방법

```bash
npm install ryan-modal
```

## 사용 예시

```jsx
import { Modal } from "ryan-modal";

// 모달 사용 예시
const App = () => {
  return (
    <Modal
      onClose={() => {
        /* 모달을 닫는 로직 */
      }}
      onConfirm={() => {
        /* 확인 버튼을 클릭한 경우의 로직 */
      }}
      title="제목"
      buttonText="확인"
      hasCloseButton={true}
      position={position}
    >
      {/* 모달 내용 */}
    </Modal>
  );
};
```

## API 문서

### `Modal` 컴포넌트

#### Props

- `onClose`: 모달을 닫을 때 호출되는 콜백 함수입니다.
- `onConfirm`: 확인 버튼을 클릭할 때 호출되는 콜백 함수입니다. (선택 사항)
- `title`: 모달의 제목입니다. (선택 사항)
- `buttonText`: 확인 버튼 텍스트입니다. (선택 사항)
- `hasCloseButton`: 닫기 버튼의 표시 여부를 결정하는 불리언 값입니다. (선택 사항, 기본값: `true`)
- `position`: 모달의 위치를 지정하는 문자열입니다. `"center"` 또는 `"bottom"`으로 설정할 수 있습니다. (선택 사항, 기본값: `"center"`)

## 개발 및 기여

이 패키지는 [GitHub 저장소](https://github.com/Parkhanyoung/react-modules/tree/main)에서 관리되고 있습니다. 기여를 환영합니다!

## 라이센스

이 패키지는 MIT 라이센스 하에 배포됩니다.
