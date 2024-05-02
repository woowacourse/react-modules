# Modal Module

## props 타입 & 설명

| props       | type                  | description                                                                              |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------- |
| position    | 'center', 'bottom'    | modal의 위치를 결정한다.                                                                 |
| closeButton | 'text', 'img'         | modal을 닫는 closeButton의 형태를 선택한다.                                              |
| closeModal  | () => void            | modal을 닫을 떄의 action을 정의한다.                                                     |
| title       | string                | modal의 제목을 작성한다.                                                                 |
| children    | react component       | modal의 내용을 작성한다.                                                                 |
| buttonText  | string (optional)     | 확인 버튼을 사용하고 싶을 경우, 해당 props에 button의 text를 작성한다.                   |
| buttonClick | () => void (optional) | 확인 버튼을 클릭했을 때 action을 정의한다. buttonText가 정의되어 있을 경우에만 동작한다. |

## 사용방법 예시

```tsx
function Example() {
	const [openModal, setOpenModal] = React.useState(false);

	return (
		<>
			<button onClick={() => setOpenModal(true)}>Modal Open</button>
			{openModal && (
				<Modal
					position="center"
					title="제목을 입력해주세요"
					closeButton="img"
					closeModal={() => setOpenModal(false)}
					buttonText="버튼 텍스트틀 넣어주세요"
					buttonClick={() => alert('버튼 누르기 성공')}
				>
					modal 내용은 이곳에 작성해주세요.
				</Modal>
			)}
		</>
	);
}

export default Example;
```
