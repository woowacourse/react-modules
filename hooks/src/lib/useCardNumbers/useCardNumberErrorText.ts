import { useEffect, useState } from "react";

interface UseCardNumberErrorTextProps {
  firstErrorText: string;
  secondErrorText: string;
  thirdErrorText: string;
  fourthErrorText: string;
}

const useCardNumberErrorText = ({
  firstErrorText,
  secondErrorText,
  thirdErrorText,
  fourthErrorText,
}: UseCardNumberErrorTextProps) => {
  const [errorText, setErrorText] = useState<string>("");

  useEffect(() => {
    setErrorText(firstErrorText);
    if (!firstErrorText)
      setErrorText(secondErrorText || thirdErrorText || fourthErrorText);
  }, [firstErrorText]);

  useEffect(() => {
    setErrorText(secondErrorText);
    if (!secondErrorText)
      setErrorText(firstErrorText || thirdErrorText || fourthErrorText);
  }, [secondErrorText]);

  useEffect(() => {
    setErrorText(thirdErrorText);
    if (!thirdErrorText)
      setErrorText(firstErrorText || secondErrorText || fourthErrorText);
  }, [thirdErrorText]);

  useEffect(() => {
    setErrorText(fourthErrorText);
    if (!fourthErrorText)
      setErrorText(firstErrorText || secondErrorText || thirdErrorText);
  }, [fourthErrorText]);

  return { errorText };
};

export default useCardNumberErrorText;
