# CloseButton Component

## How to use

```ts
//TODO: 문서화 경로 설정
import { CloseButton } from "";

function App() {
    const {isCLose, setIsClose} = useState(false)
  //...
  return <CloseButton handleClick={setIsClose(false)}/>;
}
```

## Attributes

1. `handleClick` [optional] : 버튼을 클릭했을 때 실행할 핸들러 함수
