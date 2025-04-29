interface ModalPropsType {
  title: string;
}

export const Modal = ({ title }: ModalPropsType) => {
  return (
    <>
      <div></div>
      <div>
        <div>
          <h4>{title}</h4>
          <button>X</button>
        </div>
      </div>
    </>
  );
};
