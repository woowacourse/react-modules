import { useState } from "react";

export default function useCardInfo<T extends Record<string, string>>({
  initValues,
  maxLength,
}: {
  initValues: T;
  maxLength: number;
}) {
  const [values, setValues] = useState<T>(initValues);

  function changeValues(type: keyof T, data: string) {
    setValues((prev) => ({
      ...prev,
      [type]: data,
    }));
  }

  function isFullFilled() {
    return Object.values(values).every((value) => value.length >= maxLength);
  }

  return {
    values,
    changeValues,
    isFullFilled,
  };
}
