interface ModalFooterProps {
  children: React.ReactNode;
}

export default function ModalFooter({ children }: ModalFooterProps) {
  return <footer>{children}</footer>;
}
