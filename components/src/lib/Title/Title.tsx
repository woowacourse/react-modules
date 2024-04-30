/** @jsxImportSource @emotion/react */

import { titleStyle } from "./Title.style";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div css={titleStyle}>{children}</div>;
};

export default Title;
