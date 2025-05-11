import React from "react";
import ModalLayout from "../common/ModalLayout";
import { DetailModalProps } from "../../../types/modalTypes";

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  content,
  title,
  modalSize,
  onClose,
}) => {
  if (!isOpen || !content) return null;
  return (
    <ModalLayout
      modalPosition="center"
      modalSize={modalSize}
      titleText={title}
      descriptionText={content}
      closeType="top"
      onClose={onClose}
    />
  );
};
