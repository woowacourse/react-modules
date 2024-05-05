import { ChangeEvent } from 'react';

export default function getOnChange<
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>(setState: React.Dispatch<React.SetStateAction<string>>) {
  function onChange(event: ChangeEvent<T>) {
    const value = event.target.value;
    setState(value);
  }

  return onChange;
}
