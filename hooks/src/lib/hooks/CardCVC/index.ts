import { useState } from "react";
import { CardCVCState } from "./types";
import { INITIAL_CVC_STATE } from "./constants";
import { validateCardCVC } from "./utils";

const useCardCVC = () => {
  const [cvcState, setCVCState] = useState<CardCVCState>(INITIAL_CVC_STATE);

  const handleCVCStateChange = (value: string) => {
    if (value.length > 3) {
      return;
    }

    setCVCState({ value });
  };

  return {
    cvcState,
    handleCVCStateChange,
    errorState: validateCardCVC(cvcState.value),
  };
};

export default useCardCVC;
