import "./ModalHeader.css";

interface ModalHeaderProps {
  title: string;
}

const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <div className="modal-header">
      <h3>{title}</h3>
    </div>
  );
};

export default ModalHeader;
