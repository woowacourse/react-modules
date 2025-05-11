import { FieldDefinition } from '../config/fieldType';

export function createInitialCardNumbers<T extends string>(
  fields: FieldDefinition<T>[]
): Record<T, string> {
  return fields.reduce(
    (acc, field) => {
      acc[field.name] = '';
      return acc;
    },
    {} as Record<T, string>
  );
}
