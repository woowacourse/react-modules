import { ConfirmButtonStyle } from "../styles";
import ModalButton from "./ModalButton";

interface ConfirmButtonProps extends React.ComponentProps<typeof ModalButton> {
  onConfirm?: () => void;
  onHide: () => void;
}

const ConfirmButton = ({ children = "확인", onConfirm, onHide, ...rest }: ConfirmButtonProps) => {
  const handleClick = () => {
    onConfirm?.(); // 사용자 정의 동작
    onHide(); // 모달 닫기
  };

  return (
    <ModalButton css={ConfirmButtonStyle} onClick={handleClick} {...rest}>
      {children}
    </ModalButton>
  );
};

export default ConfirmButton;
