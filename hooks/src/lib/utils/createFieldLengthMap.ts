import { CardNumberFieldType } from '../config';

export function createFieldLengthMap<T extends string>(
  fields: CardNumberFieldType<T>[]
) {
  return Object.fromEntries(
    fields.map(({ name, length }) => [name, length])
  ) as Record<T, number>;
}
