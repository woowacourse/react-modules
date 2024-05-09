import styles from "./ModalFooter.module.css";
import Button, { ButtonProps } from "../../Button/Button";

interface ModalFooterProps {
  className: string;
  buttons: ButtonProps[];
}

const ModalFooter = ({ className, buttons }: ModalFooterProps) => {
  return (
    <div className={`${styles.footerContainer} ${styles[className]}`}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            content={button.content}
            onClick={button.onClick}
            className={button.className}
            style={button.style}
          />
        );
      })}
    </div>
  );
};

export default ModalFooter;
