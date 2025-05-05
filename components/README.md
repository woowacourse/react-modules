# @mlnwns/modal

## 설치 방법

```bash
# npm 사용
npm install @mlnwns/modal

# yarn 사용
yarn add @mlnwns/modal

# pnpm 사용
pnpm add @mlnwns/modal
```

---

## 📦 Props

| 이름                  | 타입                                            | 필수 | 설명                                                                                |
| --------------------- | ----------------------------------------------- | ---- | ----------------------------------------------------------------------------------- |
| `position`            | `"center"` \| `"top"` \| `"bottom"`             | ✅   | 모달이 화면에 표시될 위치를 설정합니다.                                             |
| `title`               | `string`                                        | ✅   | 모달의 제목입니다.                                                                  |
| `content`             | `React.ReactNode`                               | ✅   | 모달에 표시할 내용입니다.                                                           |
| `hasCloseButton`      | `boolean`                                       | ✅   | 닫기 버튼 표시 여부입니다.                                                          |
| `onClose`             | `() => void`                                    | ✅   | 닫기 버튼 또는 바깥 영역 클릭 시 호출됩니다.                                        |
| `handleBackdropClick` | `(e: React.MouseEvent<HTMLDivElement>) => void` | ❌   | 오버레이 클릭 시 실행할 핸들러입니다.                                               |
| `confirmText`         | `string`                                        | ❌   | 확인 버튼의 텍스트입니다. 기본값은 `"확인"`입니다.                                  |
| `onConfirm`           | `() => void`                                    | ❌   | 확인 버튼 클릭 시 호출됩니다. `confirmText`와 함께 사용하면 확인 버튼이 표시됩니다. |

---

## 💡 사용 예시

### ✅ 기본 모달 (중앙 위치)

```tsx
import Modal from "@mlnwns/modal";

<Modal
  position="center"
  title="삭제하시겠습니까?"
  content={<p>한 번 삭제하면 복구할 수 없습니다.</p>}
  hasCloseButton={true}
  onClose={() => console.log("닫기")}
  onConfirm={() => console.log("확인")}
  confirmText="삭제"
/>;
```

---

### 📍 바닥 고정 모달 (Bottom)

```tsx
<Modal
  position="bottom"
  title="설정"
  content={<p>여기서 설정을 변경할 수 있습니다.</p>}
  hasCloseButton={true}
  onClose={() => console.log("닫기")}
/>
```

---

### 📍 상단 고정 모달 (Top)

```tsx
<Modal
  position="top"
  title="알림"
  content={<p>업데이트가 완료되었습니다.</p>}
  hasCloseButton={false}
  onClose={() => console.log("닫기")}
/>
```
