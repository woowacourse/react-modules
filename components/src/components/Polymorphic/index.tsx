import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

type PolymorphicRef<C extends ElementType> = ComponentPropsWithoutRef<C>["ref"];

type PolymorphicProps<C extends ElementType> = {
  as?: C;
} & ComponentPropsWithoutRef<C>;

const Polymorphic = forwardRef(
  <C extends ElementType = "div">(
    { as, ...props }: PolymorphicProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = as || "div";
    return <Element ref={ref} {...props} />;
  }
);

Polymorphic.displayName = "Polymorphic";
export default Polymorphic;
