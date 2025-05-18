import { ButtonProps } from "../Common/Button/Button";
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";

export interface ActionButtonsProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
  showCancel?: boolean;
}

const ActionButtons = ({
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  confirmProps = {},
  cancelProps = {},
  showCancel = true,
}: ActionButtonsProps) => {
  return (
    <>
      {showCancel && <CancelButton {...cancelProps}>{cancelText}</CancelButton>}
      <ConfirmButton onClick={onConfirm} {...confirmProps}>
        {confirmText}
      </ConfirmButton>
    </>
  );
};

export default ActionButtons;
