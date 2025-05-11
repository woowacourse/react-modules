import { ReactNode } from "react";
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";
import { ButtonProps } from "../Common/Button/Button";

export interface ActionButtonsProps {
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
}

const ActionButtons = ({
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  confirmProps = {},
  cancelProps = {},
}: ActionButtonsProps) => {
  return (
    <>
      <CancelButton {...cancelProps}>{cancelText}</CancelButton>
      <ConfirmButton onClick={onConfirm} {...confirmProps}>
        {confirmText}
      </ConfirmButton>
    </>
  );
};

export default ActionButtons;
