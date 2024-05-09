# ryan-modal

## 간단한 설명

`ryan-modal`은 일반적으로 재사용 가능한 모달 컴포넌트입니다. 합성 컴포넌트 형태로, 커스터마이징할 수 있는 다양한 옵션을 제공하여 사용 맥락에 맞게 모달을 쉽게 구성할 수 있습니다.

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Dimmer />
      <Modal.Content position={position} size={contentSize}>
        <header>
          <h2>{title}</h2>
        </header>
        <main style={{ margin: "16px 0" }}>{contentText}</main>
        <footer style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Modal.Button theme={confirmButtonTheme} size={buttonSize} onClick={onModalButtonClick}>
            {confirmButtonText}
          </Modal.Button>
        </footer>
      </Modal.Content>
    </Modal>
  );
};
```

## API 명세

### `Modal` 컴포넌트 구성

`Modal` 컴포넌트는 다음과 같이 구성됩니다.

- `Modal`: 모달의 바탕을 이루는 루트 컴포넌트입니다.
- `Modal.Dimmer`: 배경 뒷배경을 나타내는 컴포넌트입니다.
- `Modal.Content`: 모달 내용을 담는 컴포넌트입니다.
- `Modal.CloseButton`: 모달을 닫는 닫기 버튼에 해당하는 컴포넌트입니다.
- `Modal.Button`: 모달 내에서 사용되는 버튼에 해당하는 컴포넌트입니다.
- `Modal.Input`: 모달 내에서 사용되는 프롬프트 입력 필드에 해당하는 컴포넌트입니다.

### `Modal` 인터페이스

```ts
export interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDimmerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  length?: string;
}

export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme?: "dark" | "light" | "inactive";
  size?: "small" | "large";
}

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
}

export interface ModalInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
}
```

## 개발 및 기여

이 패키지는 [GitHub 저장소](https://github.com/Parkhanyoung/react-modules)에서 관리되고 있습니다. 기여를 환영합니다!

## 라이센스

이 패키지는 MIT 라이센스 하에 배포됩니다.
