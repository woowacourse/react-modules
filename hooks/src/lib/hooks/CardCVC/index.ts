import { useState } from "react";
import { CardCVCState } from "./types";
import { INITIAL_CVC_STATE } from "./constants";
import { validateCardCVC } from "./utils";

const useCardCVC = () => {
  const [cvcState, setCVCState] = useState<CardCVCState>(INITIAL_CVC_STATE);

  const handleCVCState = (value: string) => {
    if (value.length > 3) {
      return;
    }

    setCVCState({ value });
  };

  return {
    cvcState,
    handleCVCState,
    errorState: validateCardCVC(cvcState.value),
  };
};

export default useCardCVC;
