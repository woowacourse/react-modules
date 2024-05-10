const sliceCreditCardNumber = (value: string, format: number[]) => {
  let newValue = value;
  const numbers: string[] = [];

  format.forEach((sliceLength) => {
    if (newValue === '') return;
    numbers.push(newValue.slice(0, sliceLength));

    newValue = newValue.slice(sliceLength);
  });

  return numbers;
};

export default sliceCreditCardNumber;
