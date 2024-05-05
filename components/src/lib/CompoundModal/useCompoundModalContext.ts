import React from 'react';

interface CompoundModalContextProps {
  onClose?: () => void;
  onConfirm?: () => void;
}

export const CompoundModalContext =
  React.createContext<CompoundModalContextProps>({});

const useCompoundModalContext = () => {
  const context = React.useContext(CompoundModalContext);
  return context;
};

export default useCompoundModalContext;
