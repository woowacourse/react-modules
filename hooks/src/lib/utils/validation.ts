export const isNumber = (value: string) => {
  const error = !/^[0-9]*$/.test(value);

  if (error) return { error, message: '숫자만 입력 가능합니다.' };
  return { error, message: '' };
};
