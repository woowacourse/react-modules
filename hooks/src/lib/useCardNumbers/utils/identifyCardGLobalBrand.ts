export enum CardGlobalBrand {
  VISA = "Visa",
  MASTER = "Master",
  DINERS = "Diners",
  AMEX = "AMEX",
  UNION_PAY = "UnionPay",
  NOT_IDENTIFIED = "notIdentified",
}

const identifyCardGlobalBrand = (cardNumber: string): CardGlobalBrand => {
  if (isVisaCard(cardNumber)) {
    return CardGlobalBrand.VISA;
  }
  if (isMasterCard(cardNumber)) {
    return CardGlobalBrand.MASTER;
  }
  if (isDinersCard(cardNumber)) {
    return CardGlobalBrand.DINERS;
  }
  if (isAmexCard(cardNumber)) {
    return CardGlobalBrand.AMEX;
  }
  if (isUnionPayCard(cardNumber)) {
    return CardGlobalBrand.UNION_PAY;
  }
  return CardGlobalBrand.NOT_IDENTIFIED;
};

export default identifyCardGlobalBrand;

// ---

const isVisaCard = (cardNumber: string): cardNumber is CardGlobalBrand.VISA => {
  return cardNumber.startsWith("4");
};

const isMasterCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.MASTER => {
  return ["51", "52", "53", "54", "55"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isDinersCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.DINERS => {
  return cardNumber.startsWith("36");
};

const isAmexCard = (cardNumber: string): cardNumber is CardGlobalBrand.AMEX => {
  return ["34", "37"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isUnionPayCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.UNION_PAY => {
  if (cardNumber.length >= 3) {
    const targetNumber = parseInt(cardNumber.slice(0, 3));
    if (624 <= targetNumber && targetNumber <= 626) {
      return true;
    }
  }

  if (cardNumber.length >= 4) {
    const targetNumber = parseInt(cardNumber.slice(0, 4));
    if (6282 <= targetNumber && targetNumber <= 6288) {
      return true;
    }
  }

  if (cardNumber.length >= 6) {
    const targetNumber = parseInt(cardNumber.slice(0, 6));
    if (622126 <= targetNumber && targetNumber <= 622925) {
      return true;
    }
  }

  return false;
};
