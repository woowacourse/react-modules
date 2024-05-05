export default interface ErrorMessages {
  inputType: string;
  inputLength?: (length: number) => string;
  allowedLengthOutOfRange?: string;
}
