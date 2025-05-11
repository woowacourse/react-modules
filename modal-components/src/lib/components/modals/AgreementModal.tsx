import ModalLayout from "./common/ModalLayout";
import Button from "../common/Button";
import styled from "@emotion/styled";
import { AgreementModalProps } from "../../types/modalTypes";
import Checkbox from "../common/CheckBox";
import React, { useState } from "react";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

const AgreementContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AgreementContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const ContentText = styled.span<{ details: boolean }>`
  cursor: ${({ details }) => (details ? "pointer" : "text")};
  &:hover {
    text-decoration: ${({ details }) => (details ? "underline" : "none")};
  }
`;

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
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [currentDetails, setCurrentDetailsClicked] = useState<{
    isOpen: boolean;
    content: null | React.ReactNode;
  }>({
    isOpen: false,
    content: null,
  });

  const handleOpenDetail = (content: {
    text: string;
    details?: string;
    isRequired: boolean;
  }) => {
    if (content.details) {
      setCurrentDetailsClicked({
        isOpen: true,
        content: (
          <ModalLayout
            modalPosition="center"
            modalSize={modalSize}
            titleText={content.text}
            descriptionText={content.details}
            closeType="top"
            onClose={() => {
              setCurrentDetailsClicked({ isOpen: false, content: null });
            }}
          />
        ),
      });
    }
  };

  const agreementContent = agreementContents.map((content, index) => (
    <AgreementContentBox key={index}>
      <Checkbox
        checked={content.isRequired ? checked : secondChecked}
        onChange={content.isRequired ? setChecked : setSecondChecked}
        {...(index === 0 ? { autoFocus: true } : {})}
      />
      <span style={{ opacity: 0.6 }}>
        {content.isRequired ? "[필수]" : "[선택]"}
      </span>
      <ContentText
        details={!content.details || content.details === "" ? false : true}
        onClick={() => {
          if (!content.details || content.details === "") return;
          handleOpenDetail(content);
        }}
      >
        {content.text}
      </ContentText>
    </AgreementContentBox>
  ));

  const footer = (
    <ButtonContainer>
      <Button onClick={onConfirm} variant="primary" disabled={!checked}>
        확인
      </Button>
    </ButtonContainer>
  );

  return (
    <>
      <ModalLayout
        modalPosition={modalPosition}
        modalSize={modalSize}
        titleText={titleText}
        descriptionText={descriptionText}
        closeType={closeType}
        onClose={onClose}
        footer={footer}
      >
        <AgreementContentContainer>
          {agreementContent}
        </AgreementContentContainer>
        {children}
      </ModalLayout>
      {currentDetails.isOpen && currentDetails.content}
    </>
  );
};

export default AgreementModal;
