import { ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader } from "../Modal/Modal";
import Button from "../common/Button";
import { ModalProps } from "../type";

export const ConfirmModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, ...props }) => {
  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter align="end">
        <ModalClose>
          <Button backgroundColor="#333" fontColor="#fff">
            확인
          </Button>
        </ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};
