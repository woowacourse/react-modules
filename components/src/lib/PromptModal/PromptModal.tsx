import { useState } from "react";
import { ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader } from "../Modal/Modal";
import { StyledModalInput } from "../Modal/Modal.style";
import Button from "../common/Button";
import { ModalProps } from "../type";

export const PromptModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, placeholder, onSubmit, size, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(value);
    setValue("");
  };

  return (
    <ModalContent {...props} size={size}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>
        {children}
        <StyledModalInput value={value} onChange={handleChange} placeholder={placeholder} />
      </ModalBody>
      <ModalFooter align="end">
        <ModalClose>
          <Button backgroundColor="#fff" fontColor="#333" borderColor="#33333340">
            취소
          </Button>
        </ModalClose>
        <ModalClose>
          <Button backgroundColor="#333" fontColor="#fff" onClick={() => handleSubmit()}>
            확인
          </Button>
        </ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};
