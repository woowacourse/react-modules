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

## 🧪 사용 예시

### BasicModal

```tsx
import { useState } from "react";
import BasicModal from "@dev-dino22/modal-components";

export const BasicModalExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>기본 모달 열기 버튼</button>
      {isOpened && (
        <BasicModal
          modalPosition="center"
          modalSize="medium"
          closeType="top"
          titleText="기본 모달"
          onClose={onCloseHandler}
        >
          <div>여기에 원하는 내용을 넣으세요.</div>
        </BasicModal>
      )}
    </>
  );
```

### AgreementModal

- agreementContent {
  text: string;
  details?: string;
  isRequired: boolean;
  } 의 형식으로 이루어진 배열을 agreementContents로 받습니다.
- 이렇게 사용자는 쉽게 필수 약관과 선택 약관에 따른 확인 버튼 활성화 기능을 구현할 수 있습니다.
- 또한 details 를 정의할 경우, text 클릭 시 details 내용을 띄워주는 [전문 보기] 모달이 띄워집니다.

```tsx
import { useState } from "react";
import AgreementModal from "@dev-dino22/modal-components";

const detailsText = `## 개인정보취급방침 상세보기

본 서비스는 이용자의 개인정보를 중요시하며, 아래와 같이 개인정보를 안전하게 처리하고 보호하기 위해 최선을 다합니다.

### 1. 수집하는 개인정보 항목
- 이름, 이메일, 연락처 등 회원가입 또는 서비스 이용 시 필요한 최소한의 정보

### 2. 개인정보의 수집 및 이용 목적
- 서비스 제공 및 회원 관리
- 고객 문의 및 민원 처리
- 서비스 개선 및 신규 서비스 개발

### 3. 개인정보의 보유 및 이용 기간
- 회원 탈퇴 시 또는 법령에 따른 보관 기간 종료 시까지 보관 후 파기

### 4. 개인정보의 제3자 제공
- 원칙적으로 이용자의 동의 없이 제3자에게 제공하지 않으며, 법령에 정해진 경우에만 예외적으로 제공

### 5. 개인정보의 파기 절차 및 방법
- 목적 달성 후 즉시 파기
- 전자적 파일 형태는 복구 불가능한 방법으로 삭제

### 6. 이용자의 권리와 행사 방법
- 언제든지 본인의 개인정보 열람, 수정, 삭제, 처리 정지 요청 가능

### 7. 개인정보 보호책임자
- 개인정보 보호책임자: 홍길동
- 이메일: privacy@example.com

자세한 내용은 고객센터 또는 이메일로 문의해 주시기 바랍니다.
`;

export const agreementContents = [
  {
    isRequired: true,
    text: "개인정보 수집 및 이용 동의",
    details: detailsText,
  },
  {
    isRequired: false,
    text: "마케팅 정보 수신 동의",
    details: "",
  },
];

export const AgreementModalExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>
        약관 동의 모달 열기 버튼
      </button>
      {isOpened && (
        <AgreementModal
          modalPosition="bottom"
          modalSize="large"
          closeType="top"
          titleText="약관에 동의해 주세요"
          onClose={onCloseHandler}
          agreementContents={agreementContents}
          descriptionText="필수 약관에 동의하셔야 서비스 이용이 가능합니다."
        />
      )}
    </>
  );
};
```

### PromptModal

```tsx
import { useState } from "react";
import PromptModal from "@dev-dino22/modal-components";

export const PromptModalExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => {
    setIsOpened(false);
  };
  return (
    <>
      <button onClick={() => setIsOpened(true)}>프롬프트 모달 열기 버튼</button>
      {isOpened && (
        <PromptModal
          modalPosition="center"
          modalSize="large"
          closeType="top"
          titleText="쿠폰 번호를 입력해주세요"
          onClose={onCloseHandler}
          onCancel={() => {
            alert("취소버튼을 눌렀습니다");
            onCloseHandler();
          }}
          onConfirm={() => {
            alert("확인버튼을 눌렀습니다");
            onCloseHandler();
          }}
        />
      )}
    </>
  );
};
```

### AlertModal

```tsx
import { useState } from "react";
import AlertModal from "@dev-dino22/modal-components";

export const AlertModalExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>Alert 모달 열기 버튼</button>
      {isOpened && (
        <AlertModal
          modalPosition="center"
          modalSize="large"
          closeType="top"
          titleText="카드를 삭제하시겠습니까?"
          descriptionText="삭제하면 복구하실 수 없습니다."
          onClose={onCloseHandler}
        />
      )}
    </>
  );
};
```

### 🔹 **ConfirmModal**

---

````tsx
import { useState } from "react";
import { ConfirmModal } from "@dev-dino22/modal-components";

export const ConfirmModalExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>Confirm 모달 열기 버튼</button>
      {isOpened && (
        <ConfirmModal
          modalPosition="center"
          modalSize="large"
          closeType="none"
          titleText="카드를 삭제하시겠습니까?"
          descriptionText="삭제하면 복구하실 수 없습니다."
          onClose={onCloseHandler}
          onConfirm={() => {
            alert("삭제되었습니다.");
            onCloseHandler();
          }}
          onCancel={() => {
            alert("취소버튼을 눌렀습니다");
            onCloseHandler();
          }}
        />
      )}
    </>
  );
};

```


### useModal()

```tsx
import { useModal } from "@dev-dino22/modal-components";

const MyComponent = () => {
  const { isModalOpened, openModalHandler, closeModalHandler } = useModal();

  return (
    <div>
      <button onClick={openModalHandler}>모달 열기</button>
      {isModalOpened && (
        <BasicModal
          modalPosition="center"
          modalSize="medium"
          closeType="top"
          titleText="모달이 열렸습니다."
          onClose={closeModalHandler}
        >
          내용이 들어갑니다.
        </BasicModal>
      )}
    </div>
  );
};
````

---

## 🪪 License

MIT
