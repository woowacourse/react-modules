import {
  ERROR_MESSAGE,
  ERROR_TYPE,
  ValidationError,
} from "../../types/ValidationResult";

import { Validation } from "@cys4585/card-validation";

const validateBeforeUpdate = (value: string, maxCardNumberLength: number) => {
  if (!Validation.isNumeric(value)) {
    throw new ValidationError(
      ERROR_TYPE.numericOnly,
      ERROR_MESSAGE[ERROR_TYPE.numericOnly]
    );
  }
  if (value.length > maxCardNumberLength) {
    throw new ValidationError(
      ERROR_TYPE.maxLength,
      ERROR_MESSAGE[ERROR_TYPE.maxLength](maxCardNumberLength)
    );
  }
};

const validateAfterUpdate = (value: string, validCardNumberLength: number) => {
  if (!Validation.hasLength(value, validCardNumberLength)) {
    throw new ValidationError(
      ERROR_TYPE.invalidLength,
      ERROR_MESSAGE[ERROR_TYPE.invalidLength](validCardNumberLength)
    );
  }
};

export { validateBeforeUpdate, validateAfterUpdate };
