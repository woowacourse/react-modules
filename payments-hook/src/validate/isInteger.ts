export default function isInteger(value: string) {
  return /^[0-9]*$/.test(value);
}
