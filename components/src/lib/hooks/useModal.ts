import { useEffect, useState } from 'react';

interface Props {
  initialState: boolean;
}
export default function useModal(props: Props) {
  const [open, setOpen] = useState(props.initialState);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return { open: open, openModal, closeModal };
}
