import Modal from "../../Modal";

type ConfirmButtonProps = {
  /** 왽쪽 버튼 */
  leftButtonTitle: string;
  /** 오른쪽 버튼 */
  rightButtonTitle: string;
  /** 왼쪽 버튼 클릭 시 동작 */
  onLeftButtonClick: () => void;
  /** 오른쪽 버튼 클릭 시 동작 */
  onRightButtonClick: () => void;
};

const ConfirmButton = ({
  leftButtonTitle = "취소",
  rightButtonTitle = "확인",
  onLeftButtonClick,
  onRightButtonClick,
}: ConfirmButtonProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          gap: "10px",
        }}
      >
        <Modal.Button
          title={leftButtonTitle}
          variant="secondary"
          size="small"
          onClick={onLeftButtonClick}
        ></Modal.Button>
        <Modal.Button
          title={rightButtonTitle}
          variant="primary"
          size="small"
          onClick={onRightButtonClick}
        ></Modal.Button>
      </div>
    </>
  );
};

export default ConfirmButton;
