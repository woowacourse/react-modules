export interface CardFormats {
  name: string;
  pattern: number[];
  match: (bin: number, digits: string) => boolean;
  length: number;
}
