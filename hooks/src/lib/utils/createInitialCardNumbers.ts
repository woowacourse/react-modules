import { CardNumberFieldType } from '../config';

export function createInitialCardNumbers<T extends string>(
  fields: CardNumberFieldType<T>[]
) {
  return Object.fromEntries(fields.map(({ name }) => [name, ''])) as Record<
    T,
    string
  >;
}
