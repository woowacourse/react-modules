import { ErrorStatus } from '@/types/errorStatus';

export type CardHolderError =
  | ErrorStatus.ONLY_UPPERCASE
  | ErrorStatus.IS_DOUBLE_BLANK;
