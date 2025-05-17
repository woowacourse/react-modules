export const hasVisaPrefix = (cardInput: string) => {
  return cardInput.startsWith("4");
};

export const hasMasterCardPrefix = (cardInput: string) => {
  return cardInput.startsWith("51") || cardInput.startsWith("52");
};

export const hasDinersPrefix = (cardInput: string) => {
  return cardInput.startsWith("36");
};

export const hasAMEXPrefix = (cardInput: string) => {
  return cardInput.startsWith("34") || cardInput.startsWith("37");
};

export const hasUnionPayPrefix = (cardInput: string) => {
  const threePrefix = Number(cardInput.slice(0, 3));
  const fourPrefix = Number(cardInput.slice(0, 4));
  const sixPrefix = Number(cardInput.slice(0, 6));

  if (threePrefix >= 624 && threePrefix <= 626) {
    return true;
  }
  if (fourPrefix >= 6282 && fourPrefix <= 6288) {
    return true;
  }
  if (sixPrefix >= 622126 && sixPrefix <= 622925) {
    return true;
  }
  return false;
};
