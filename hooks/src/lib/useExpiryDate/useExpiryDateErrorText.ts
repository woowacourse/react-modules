import { useEffect, useState } from "react";

interface UseExpiryDateErrorTextProps {
  monthErrorText: string;
  yearErrorText: string;
  expiredDateErrorText: string;
}

const useCardNumberErrorText = ({
  monthErrorText,
  yearErrorText,
  expiredDateErrorText,
}: UseExpiryDateErrorTextProps) => {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setErrorText(monthErrorText);
    if (!monthErrorText) setErrorText(yearErrorText || expiredDateErrorText);
  }, [monthErrorText]);

  useEffect(() => {
    setErrorText(yearErrorText);
    if (!yearErrorText) setErrorText(monthErrorText || expiredDateErrorText);
  }, [yearErrorText]);

  useEffect(() => {
    setErrorText(expiredDateErrorText);
    if (!expiredDateErrorText) setErrorText(monthErrorText || yearErrorText);
  }, [expiredDateErrorText]);

  return { errorText };
};

export default useCardNumberErrorText;
