import styles from "./ModalFooter.module.css";
import Button, { ButtonProps } from "./Button/Button";

interface ModalFooterProps {
  buttons: ButtonProps[];
}

const ModalFooter = ({ buttons }: ModalFooterProps) => {
  return (
    <div className={styles.footerContainer}>
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
