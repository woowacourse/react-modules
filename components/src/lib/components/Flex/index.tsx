interface FlexProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * CSS Flexbox 레이아웃을 쉽게 적용할 수 있도록 도와줍니다.
 *
 * @default alignItems = 'center' - css상의 기본값은 'stretch'입니다.
 */
export default function Flex({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'center',
  flexWrap = 'nowrap',
  alignContent = 'stretch',
  style,
  children,
}: FlexProps) {
  const flexStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
    ...style,
  };

  return <div style={flexStyle}>{children}</div>;
}
