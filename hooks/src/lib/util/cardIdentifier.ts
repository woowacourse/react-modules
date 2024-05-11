export type CardIdentifier = (typeof cardIdentifiers)[number]["name"];

const cardIdentifiers = [
  { name: "Diners", regex: /^36\d{12}$/ },
  { name: "AMEX", regex: /^(?:34|37)\d{13}$/ },
  {
    name: "UnionPay",
    regex:
      /^(?:622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5])|62[4-6]\d|628[2-8])\d{12}$/,
  },
  { name: "Master", regex: /^(51|52|53|54)/ },
  { name: "Visa", regex: /^4/ },
];

const identifyCard = (value: string): CardIdentifier | undefined => {
  const clearedValue = value.replace(/\D/g, "");
  for (const { name, regex } of cardIdentifiers) {
    if (regex.test(clearedValue)) {
      return name;
    }
  }
  return undefined;
};

export default identifyCard;
