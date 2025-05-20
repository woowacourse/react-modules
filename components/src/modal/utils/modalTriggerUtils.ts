import { isValidElement, ReactNode } from 'react';

export function isTriggerButtonElement(children: ReactNode): boolean {
  if (!isValidElement(children)) return false;

  const isHTMLButton =
    typeof children.type === 'string' && children.type === 'button';

  const isCustomButtonComponent =
    typeof children.type === 'function' &&
    (children.type.name === 'Button' || children.type.name === 'WideButton');

  return isHTMLButton || isCustomButtonComponent;
}
