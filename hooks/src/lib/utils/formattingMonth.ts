const formattingMonth = (name: string, value: string) => {
  return name === "month" ? value.padStart(2, "0") : value;
};

export default formattingMonth;
