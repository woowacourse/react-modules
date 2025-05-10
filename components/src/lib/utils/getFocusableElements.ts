const getFocusableElements = (element: HTMLElement | null) => {
  if (!element) return [];
  const selectors = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];

  return Array.from(element.querySelectorAll<HTMLElement>(selectors.join(','))).filter(
    (element) => !element.hasAttribute('disabled') && !element.getAttribute('aria-hidden')
  );
};

export default getFocusableElements;
