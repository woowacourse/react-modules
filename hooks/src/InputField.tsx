export interface InputFormProps {
  title: string;
  label?: string;
  description?: string;
  feedbackMessage?: string;
  children: React.ReactNode;
}

function InputField(props: InputFormProps) {
  const { title, label, description, feedbackMessage } = props;

  return (
    <div className="fieldContainer">
      <div className="titleBox">
        <h3 className="title tx-xl">{title}</h3>
        {description && <p className="tx-md">{description}</p>}
      </div>
      <div className="inputBox">
        <label className="label tx-lg">{label}</label>
        <div className="inputContainer">{props.children}</div>
        <p
          style={
            feedbackMessage
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          className="feedbackMessage"
        >
          {feedbackMessage}
        </p>
      </div>
    </div>
  );
}

export default InputField;
