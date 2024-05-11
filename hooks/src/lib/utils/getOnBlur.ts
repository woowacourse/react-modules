export default function getOnBlur<
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>(setState: React.Dispatch<React.SetStateAction<string>>) {
  function onChange(event: React.FocusEvent<T>) {
    const value = event.target.value;
    setState(value);
  }

  return onChange;
}
