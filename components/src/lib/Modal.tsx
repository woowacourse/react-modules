import * as S from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  title: string;
  position: "center" | "bottom";
}

const Modal = ({
  isOpen,
  setIsOpen,
  title,
  children,
  position = "center",
}: ModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <S.Background>
          <S.ModalContainer position={position}>
            <S.HeaderSection>
              <S.Title>{title}</S.Title>
              <S.ModalCloseButton onClick={handleCloseModal}>
                <img src="./closeIcon.png" />
              </S.ModalCloseButton>
            </S.HeaderSection>

            <S.ModalContent>{children}</S.ModalContent>
          </S.ModalContainer>
        </S.Background>
      )}
    </>
  );
};

export default Modal;
