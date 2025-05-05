# Dialog 컴포넌트 라이브러리

React 애플리케이션을 위한 유연하고 조합 가능한 다이얼로그/모달 컴포넌트 라이브러리입니다.

## 주요 기능

- 🧩 **컴파운드 컴포넌트 패턴**: 작은 특수 컴포넌트를 조합하여 맞춤화된 다이얼로그 생성
- 🎨 **스타일링 자유도**: 기본 스타일이 제공되지만 쉽게 커스터마이징 가능
- 📱 **위치 설정 옵션**: 중앙 정렬 다이얼로그와 하단 시트 기본 지원
- ⌨️ **접근성**: Escape 키 및 오버레이 클릭으로 닫기 기능 제공

## 1. 설치 방법

```bash
npm install @except-woody-modal
```

## 2. 사용 예시

### 기본 다이얼로그

가장 기본적인 다이얼로그 사용법:

```tsx
import { Dialog } from "@except-woody-modal";

function App() {
  return (
    <Dialog>
      <Dialog.Trigger>
        <button>다이얼로그 열기</button>
      </Dialog.Trigger>

      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Header>
              <h2>다이얼로그 제목</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>
            <div>
              <p>다이얼로그 내용이 여기에 들어갑니다.</p>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}
```

### 하단 시트 다이얼로그

화면 하단에 표시되는 다이얼로그:

```tsx
import { Dialog } from "@except-woody-modal";

function App() {
  return (
    <Dialog>
      <Dialog.Trigger>
        <button>하단 시트 열기</button>
      </Dialog.Trigger>

      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content position="bottom">
            <Dialog.Header>
              <h2>하단 시트 제목</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>
            <div>
              <p>하단 시트 내용이 여기에 들어갑니다.</p>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}
```

## 2. API 레퍼런스

### `Dialog` 컴포넌트

다이얼로그의 상태와 콘텍스트를 관리하는 컴포넌트입니다.

#### Props

- `children`: React 노드

#### 복합 컴포넌트

- `Dialog.Trigger`: 클릭하면 다이얼로그를 여는 요소
- `Dialog.Root`: 다이얼로그 콘텐츠의 루트 컨테이너 (document.body에 포탈링됨)
- `Dialog.Overlay`: 배경 오버레이 (클릭 시 다이얼로그 닫힘)
- `Dialog.Content`: 다이얼로그 콘텐츠 컨테이너
- `Dialog.Header`: 다이얼로그 헤더 (선택 사항)
- `Dialog.CloseButton`: 클릭 시 다이얼로그를 닫는 버튼

### 각 컴포넌트 프롭스

#### Trigger

- `children`: React 노드

#### Root

- `children`: React 노드

#### Overlay

- `children`: React 노드

#### Content

- `children`: React 노드
- `position`: "center" (기본값) 또는 "bottom"

#### Header

- `children`: React 노드

#### CloseButton

- `children`: React 노드

## 접근성 기능

- Escape 키를 누르면 다이얼로그가 닫힙니다.
- 오버레이 영역을 클릭하면 다이얼로그가 닫힙니다.
