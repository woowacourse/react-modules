import { ERROR_MESSAGE, ErrorType } from "../constants";

export function getErrorMessage(
  type: ErrorType,
  lang: "ko" | "en" = "ko",
  ...params: any[]
): string {
  const message = ERROR_MESSAGE[lang][type];
  return typeof message === "function" ? message(...params) : message;
}
