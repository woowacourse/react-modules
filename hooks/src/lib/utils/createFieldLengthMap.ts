import { CardNumberFieldType } from '../config';

export function createFieldLengthMap<T extends string>(
  fields: CardNumberFieldType<T>[]
) {
  return fields.reduce<Record<T, number>>(
    (acc, field) => {
      acc[field.name] = field.length;
      return acc;
    },
    {} as Record<T, number>
  );
}
