const FOCUSABLE_SELECTOR = "button, input";

export const focusFirstElement = (container: HTMLElement | null) => {
	if (!container) return;
	const elements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
	elements[0]?.focus();
};

export const handleFocusTrap = (e: KeyboardEvent, modalContainer: HTMLElement | null) => {
	if (e.key !== "Tab" || !modalContainer) return;

	const focusables = Array.from(modalContainer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
	if (focusables.length === 0) return;

	const firstElement = focusables[0];
	const lastElement = focusables[focusables.length - 1];
	const active = document.activeElement;

	if (e.shiftKey && active === firstElement) {
		e.preventDefault();
		lastElement.focus();
	} else if (!e.shiftKey && active === lastElement) {
		e.preventDefault();
		firstElement.focus();
	}
};
