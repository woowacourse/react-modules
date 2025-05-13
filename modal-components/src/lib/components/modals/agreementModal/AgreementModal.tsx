import ModalLayout from "../common/ModalLayout";
import Button from "../../common/Button";
import { AgreementModalProps } from "../../../types/modalTypes";
import Checkbox from "../../common/CheckBox";
import * as S from "./AgreementModal.styled";
import { useAgreementModal } from "./useAgreementCheck";

const AgreementModal = ({
  modalPosition,
  modalSize,
  titleText,
  children,
  closeType,
  agreementContents,
  descriptionText,
  onClose,
  onConfirm = onClose,
}: AgreementModalProps) => {
  const {
    checkboxes,
    currentDetails,
    handleCheckboxChange,
    handleOpenDetail,
    allRequiredChecked,
  } = useAgreementModal({
    agreementContents,
    modalSize,
  });

  const agreementContent = agreementContents.map((content, index) => (
    <S.AgreementContentBox key={index}>
      <Checkbox
        checked={checkboxes[index]}
        onChange={(checked) => handleCheckboxChange(index, checked)}
        {...(index === 0 ? { autoFocus: true } : {})}
      />
      <span style={{ opacity: 0.6 }}>
        {content.isRequired ? "[필수]" : "[선택]"}
      </span>
      <S.ContentText
        details={!!content.details}
        onClick={() => content.details && handleOpenDetail(content)}
      >
        {content.infoText}
      </S.ContentText>
    </S.AgreementContentBox>
  ));

  return (
    <>
      <ModalLayout
        modalPosition={modalPosition}
        modalSize={modalSize}
        titleText={titleText}
        descriptionText={descriptionText}
        closeType={closeType}
        onClose={onClose}
        footer={
          <S.ButtonContainer>
            <Button
              onClick={onConfirm}
              variant="primary"
              disabled={!allRequiredChecked}
            >
              확인
            </Button>
          </S.ButtonContainer>
        }
      >
        <S.AgreementContentContainer>
          {agreementContent}
        </S.AgreementContentContainer>
        {children}
      </ModalLayout>
      {currentDetails.isOpen && currentDetails.contentModal}
    </>
  );
};

export default AgreementModal;
