export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export type Size = 'sm' | 'md' | 'lg';
