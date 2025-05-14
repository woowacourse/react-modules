import { CardNumberFieldType } from '../config';

export function createInitialCardNumbers<T extends string>(
  fields: CardNumberFieldType<T>[]
) {
  return fields.reduce<Record<T, string>>(
    (acc, field) => {
      acc[field.name] = '';
      return acc;
    },
    {} as Record<T, string>
  );
}
