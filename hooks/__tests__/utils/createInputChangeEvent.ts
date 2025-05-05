const createInputChangeEvent = (
  value: string
): React.ChangeEvent<HTMLInputElement> => {
  return {
    target: { value },
  } as React.ChangeEvent<HTMLInputElement>;
};

export default createInputChangeEvent;
