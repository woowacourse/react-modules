import styled from "@emotion/styled";

export const Overlay = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div<{ position: "center" | "bottom"; size: string }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 24px 32px;
	border-radius: 8px;
	width: ${({ size }) => size};
	position: ${({ position }) => (position === "bottom" ? "absolute" : "relative")};
	bottom: ${({ position }) => (position === "bottom" ? "0" : "auto")};
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 18px;
	font-weight: 700;
`;

export const Input = styled.input`
	width: 100%;
	margin-top: 16px;
	padding: 8.5px 0 8.5px 8px;
	font-size: 11px;
`;

export const ActionButton = styled.button`
	width: 100%;
	padding: 8px 0;
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	background: #333;
	color: #fff;
	cursor: pointer;

	&:focus {
		outline: 2px solid #007aff;
	}
`;

export const CloseButton = styled.button`
	padding: 8px 0;
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	background: #fff;
	cursor: pointer;

	&:focus {
		outline: 2px solid #007aff;
	}
`;

export const ModalBody = styled.div`
	width: 100%;
`;

export const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	gap: 12px;
	margin-top: 12px;
`;
