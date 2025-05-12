import { CardNumberFieldType } from '../config';

export function createFieldLengthMap<T extends string>(
  fields: CardNumberFieldType<T>[]
): Record<T, number> {
  return fields.reduce(
    (acc, field) => {
      acc[field.name] = field.length;
      return acc;
    },
    {} as Record<T, number>
  );
}
