# @dev-dino22/modal-components

간단하게 사용할 수 있는 모달 컴포넌트와 관련 훅을 제공합니다.

## 📦 Install

```js
npm install @dev-dino22/modal-components
```

---

## ✨ **제공 컴포넌트**

- **BasicModal** - 기본 모달
- **AlertModal** - 경고 모달
- **ConfirmModal** - 확인/취소 모달
- **PromptModal** - 사용자 입력 모달
- **AgreementModal** - 약관 동의 모달
- **useModal** - 모달 상태 관리 훅

---

## 🔧 **Modal Props**

| Prop                           | Type                                 | Description                                    |
| ------------------------------ | ------------------------------------ | ---------------------------------------------- |
| `modalPosition`                | `'center'` \| `'bottom'`             | 모달의 위치 설정                               |
| `modalSize`                    | `'small'` \| `'medium'` \| `'large'` | 모달의 크기 설정                               |
| `titleText` _(optional)_       | `string`                             | 모달의 제목                                    |
| `descriptionText` _(optional)_ | `string`                             | 모달의 설명                                    |
| `children` _(optional)_        | `ReactNode`                          | 모달에 들어갈 내용                             |
| `closeType`                    | `'top'` \| `'bottom'` \| `'none'`    | 닫기 버튼 위치 설정                            |
| `onClose`                      | `() => void`                         | 모달이 닫힐 때 호출되는 함수                   |
| `onConfirm` _(optional)_       | `() => void`                         | 확인 버튼 클릭 시 호출되는 함수                |
| `onCancel` _(optional)_        | `() => void`                         | 취소 버튼 클릭 시 호출되는 함수                |
| `isCloseFocus` _(optional)_    | `boolean`                            | 모달창 오픈 첫 포커스로 닫기 버튼을 할 지 여부 |

---

## 🪪 License

MIT
