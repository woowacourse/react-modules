# River Modal Component Library

## 설치 방법

이 라이브러리를 사용하려면 다음 패키지를 설치해야 합니다:

```bash
npm install river-modal-component
```

## 사용 방법

React 컴포넌트에서 모달 라이브러리를 사용하려면 다음 단계를 따르세요:

```jsx
import { Modal } from "river-modal-component";

function App() {
  return (
    <Modal.Provider>
      <Modal.Trigger>모달 열기</Modal.Trigger>

      <Modal.Content modalPosition="center" closeButtonPosition="top" size="medium">
        <Modal.Header containClose={true} title="모달 제목" />
        <Modal.Body>{/* 모달 내용 */}</Modal.Body>
        <Modal.Footer align="end">
          <Modal.Close>
            <Button backgroundColor="#fff" fontColor="#333" borderColor="#33333340">
              취소
            </Button>
          </Modal.Close>
          <Modal.Close>
            <Button backgroundColor="#333" fontColor="#fff">
              확인
            </Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Provider>
  );
}

export default App;
```

## API

### Modal.Provider

`Modal.Provider` 컴포넌트는 모달 기능에 필요한 컨텍스트를 제공합니다. 모달을 사용하는 컴포넌트를 감싸야 합니다.

### Modal.Trigger

`Modal.Trigger` 컴포넌트는 모달을 열기 위해 사용됩니다. 클릭 시 모달을 트리거할 자식 요소를 받습니다.

### Modal.Content

`Modal.Content` 컴포넌트는 모달의 주요 내용을 나타냅니다. 다음 props를 받습니다:

| Prop                  | Type                                 | Description                         |
| --------------------- | ------------------------------------ | ----------------------------------- |
| `modalPosition`       | `"center"` \| `"bottom"`             | 모달의 위치. 기본값은 `"center"`.   |
| `closeButtonPosition` | `"top"` \| `"bottom"`                | 닫기 버튼의 위치. 기본값은 `"top"`. |
| `size`                | `"small"` \| `"medium"` \| `"large"` | 모달의 크기. 기본값은 `"medium"`.   |

### Modal.Header

`Modal.Header` 컴포넌트는 모달의 헤더 부분을 나타냅니다. 다음 props를 받습니다:

| Prop           | Type      | Description                         |
| -------------- | --------- | ----------------------------------- |
| `title`        | `string`  | 모달의 제목.                        |
| `containClose` | `boolean` | 헤더에 닫기 버튼이 포함되는지 여부. |

### Modal.Body

`Modal.Body` 컴포넌트는 모달의 주요 내용 부분을 나타냅니다. 자식 요소를 내용으로 받습니다.

### Modal.Footer

`Modal.Footer` 컴포넌트는 모달의 푸터 부분을 나타냅니다. 다음 prop을 받습니다:

| Prop    | Type                  | Description            |
| ------- | --------------------- | ---------------------- |
| `align` | `"center"` \| `"end"` | 푸터 내용의 정렬 방식. |

### Modal.Close

`Modal.Close` 컴포넌트는 모달을 닫기 위해 사용됩니다. 선택적으로 `onClick` prop을 받으며, 닫기 버튼이 클릭될 때 호출됩니다. `Modal.Footer` 컴포넌트 내에 위치해야 합니다.

### 사전 제작된 모달 컴포넌트

라이브러리는 일반적인 사용 사례에 대해 사전 제작된 모달 컴포넌트도 제공합니다:

- `Modal.Alert`: 제목, 내용, "취소" 및 "확인" 버튼이 있는 경고 모달을 표시합니다.
- `Modal.Confirm`: 제목, 내용, "확인" 버튼이 있는 확인 모달을 표시합니다.
- `Modal.Prompt`: 제목, 내용, 입력 필드, "취소" 및 "확인" 버튼이 있는 프롬프트 모달을 표시합니다.

이러한 사전 제작된 컴포넌트는 사용자 정의를 위해 `Modal.Content`와 동일한 props를 받습니다.

## 결론

River Modal Component Library는 React 애플리케이션에서 모달을 유연하고 사용자 정의할 수 있는 방법을 제공합니다. 제공된 컴포넌트와 훅을 사용하여 모달을 사용자 인터페이스에 쉽게 통합하고 사용자 상호작용을 원활하게 처리할 수 있습니다.
