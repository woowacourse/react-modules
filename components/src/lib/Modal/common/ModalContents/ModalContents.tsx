import "./ModalContents.css";

interface ModalContents {
  contents: string;
}

const ModalContents = ({ contents }: ModalContents) => {
  return (
    <div className="modal-contents">
      <h4>{contents}</h4>
    </div>
  );
};

export default ModalContents;
