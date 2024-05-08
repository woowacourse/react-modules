import { ErrorStatus } from '@/types/errorStatus';

export type PasswordError =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH;
