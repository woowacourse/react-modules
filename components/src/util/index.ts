export const isValidColorCode = (color: string): boolean => {
  const hexColorCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbaColorCodeRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/;
  return hexColorCodeRegex.test(color) || rgbaColorCodeRegex.test(color);
};
