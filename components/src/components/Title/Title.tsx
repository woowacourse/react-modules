/** @jsxImportSource @emotion/react */

import { titleStyle } from "./Title.style";

const Title = ({ children }: React.PropsWithChildren) => {
  return <div css={titleStyle}>{children}</div>;
};

export default Title;
