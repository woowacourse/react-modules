declare module '*.svg';

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};
