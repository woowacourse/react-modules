const Button = ({ onclick }: { onclick: () => void }) => {
	return <button onClick={onclick}>모달 테스트 버튼</button>;
};

export default Button;
