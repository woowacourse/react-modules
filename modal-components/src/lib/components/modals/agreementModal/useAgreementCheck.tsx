import { useState, useCallback, useMemo } from "react";
import ModalLayout from "../common/ModalLayout";
import { agreementContent } from "../../../types/modalTypes";

export const useAgreementModal = ({
  agreementContents,
  modalSize,
}: {
  agreementContents: agreementContent[];
  modalSize?: "small" | "medium" | "large";
}) => {
  const [checkboxes, setCheckboxes] = useState<Record<number, boolean>>(() =>
    agreementContents.reduce(
      (acc, _, index) => ({ ...acc, [index]: false }),
      {}
    )
  );

  const [currentDetails, setCurrentDetails] = useState<{
    isOpen: boolean;
    contentModal: null | React.ReactNode;
  }>({ isOpen: false, contentModal: null });

  const handleCheckboxChange = useCallback(
    (index: number, checked: boolean) => {
      setCheckboxes((prev) => ({ ...prev, [index]: checked }));
    },
    []
  );

  const allRequiredChecked = useMemo(
    () =>
      agreementContents.every(
        (content, index) => !content.isRequired || checkboxes[index]
      ),
    [checkboxes, agreementContents]
  );

  const handleOpenDetail = (content: agreementContent) => {
    if (content.details) {
      setCurrentDetails({
        isOpen: true,
        contentModal: (
          <ModalLayout
            modalPosition="center"
            modalSize={modalSize}
            titleText={content.text}
            descriptionText={content.details}
            closeType="top"
            onClose={() =>
              setCurrentDetails({ isOpen: false, contentModal: null })
            }
          />
        ),
      });
    }
  };

  return {
    checkboxes,
    currentDetails,
    handleCheckboxChange,
    handleOpenDetail,
    allRequiredChecked,
  };
};
