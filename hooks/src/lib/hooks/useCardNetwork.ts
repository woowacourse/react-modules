export type CardNetwork = "VISA" | "MASTERCARD" | "DEFAULT";

interface UseCardNetworkReturn {
  cardNetwork: CardNetwork;
  getCardNetwork: (cardNumber: string) => CardNetwork;
}

const getCardNetwork = (cardNumber: string): CardNetwork => {
  const cleanedNumber = cardNumber.replace(/\D/g, "");

  // VISA: 4로 시작
  if (cleanedNumber.startsWith("4")) {
    return "VISA";
  }

  // MasterCard: 51-55로 시작하거나 2221-2720 범위로 시작
  if (/^5[1-5]/.test(cleanedNumber)) {
    return "MASTERCARD";
  }

  // 새로운 MasterCard 범위: 2221-2720
  if (cleanedNumber.length >= 4) {
    const firstFourDigits = parseInt(cleanedNumber.substring(0, 4));
    if (firstFourDigits >= 2221 && firstFourDigits <= 2720) {
      return "MASTERCARD";
    }
  }

  return "DEFAULT";
};

export default function useCardNetwork(): UseCardNetworkReturn {
  return {
    cardNetwork: "DEFAULT",
    getCardNetwork,
  };
}
