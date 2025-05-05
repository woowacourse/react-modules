import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ModalProps {
	position: "center" | "bottom";
	isOpen: boolean;
	isCloseButton?: boolean;
	isConfirmButton?: boolean;
	children?: ReactNode;
	onClose: () => void;
}

const Modal = ({ position, isOpen, children, onClose, isCloseButton = false, isConfirmButton = false }: ModalProps) => {
	return (
		<>
			<ModalLayout isOpen={isOpen}>
				<ModalContainer position={position}>
					{children}
					{(isCloseButton || isConfirmButton) && (
						<ButtonWrap>
							{isConfirmButton && <ConfirmButton onClick={onClose}>확인</ConfirmButton>}
							{isCloseButton && <CloseButton onClick={onClose}>닫기</CloseButton>}
						</ButtonWrap>
					)}
				</ModalContainer>
			</ModalLayout>
		</>
	);
};

export default Modal;

const ModalLayout = styled.div<{ isOpen: boolean }>`
	position: absolute;
	z-index: 2;
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ position: string }>`
	z-index: 3;
	position: relative;
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.position === "bottom" ? "100%" : "60%")};
	margin: ${(props) => (props.position === "bottom" ? "auto 0 0 0" : "auto")};
	height: auto;
	padding: 24px 32px;
	border-radius: 8px;
	background-color: #fff;
`;

const CloseButton = styled.button`
	width: 100%;
	padding: 8px 0px;
	border: 1px solid #8b95a1;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	background: #fff;
	color: #8b95a1;
	cursor: pointer;
`;

const ConfirmButton = styled.button`
	width: 100%;
	padding: 8px 0px;
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	color: #fff;
	background: #333;
	cursor: pointer;
`;

const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 12px;
`;
