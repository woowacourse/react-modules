const textColorGenerator = (primaryColor: string) => {
  const bigint = parseInt(primaryColor.slice(1, 7), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (r + g + b <= 384) return '#FFFFFF';
  return '#000000';
};

export default textColorGenerator;
