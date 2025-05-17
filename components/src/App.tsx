import { useState } from "react";
import Modal, { ModalType } from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("alert");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    console.log("폼 데이터:", formData);
    handleClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderIncorrectUsageModal = () => (
    <Modal onClose={handleClose} modalType="alert" modalSize="medium">
      <Modal.Header>
        <Modal.Title>Alert 모달에서 Input 사용 (잘못된 사용)</Modal.Title>
        <Modal.CloseButton onClick={handleClose} />
      </Modal.Header>

      <Modal.Content>
        <p>
          이것은 Alert 모달입니다. Input 컴포넌트를 사용하면 경고가 발생합니다.
        </p>

        {/* 잘못된 사용: Alert 모달에서 Modal.Input 사용 */}
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#fff4f4",
            borderRadius: "4px",
            border: "1px solid #ffdddd",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#d32f2f",
              fontWeight: "bold",
            }}
          >
            잘못된 사용 예시: Alert 모달에서 Modal.Input 사용
          </p>

          <label
            htmlFor="incorrectInput"
            style={{ display: "block", marginBottom: "5px" }}
          >
            입력해보세요 (경고가 발생합니다):
          </label>

          {/* 이 Input에 포커스하거나 클릭하거나 입력하면 경고가 발생 */}
          <Modal.Input
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="이 필드와 상호작용하면 경고가 발생합니다"
          />
        </div>
      </Modal.Content>

      <Modal.Footer>
        <Modal.Button primary onClick={handleClose}>
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );

  const renderCorrectUsageModal = () => (
    <Modal onClose={handleClose} modalType="prompt" modalSize="medium">
      <Modal.Header>
        <Modal.Title>Prompt 모달에서 Input 사용 (올바른 사용)</Modal.Title>
        <Modal.CloseButton onClick={handleClose} />
      </Modal.Header>

      <Modal.Content>
        <p>
          이것은 Prompt 모달입니다. Input 컴포넌트를 사용해도 경고가 발생하지
          않습니다.
        </p>

        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#f4fff4",
            borderRadius: "4px",
            border: "1px solid #ddffdd",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#2e7d32",
              fontWeight: "bold",
            }}
          >
            올바른 사용 예시: Prompt 모달에서 Modal.Input 사용
          </p>

          <label
            htmlFor="correctInput"
            style={{ display: "block", marginBottom: "5px" }}
          >
            입력해보세요 (경고가 발생하지 않습니다):
          </label>

          {/* 이 Input은 prompt 모달 내에 있어 경고가 발생하지 않음 */}
          <Modal.Input
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="이 필드는 경고가 발생하지 않습니다"
          />
        </div>
      </Modal.Content>

      <Modal.Footer>
        <Modal.Button onClick={handleClose}>취소</Modal.Button>
        <Modal.Button primary onClick={handleConfirm}>
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );

  const renderConfirmWithInputModal = () => (
    <Modal onClose={handleClose} modalType="confirm" modalSize="medium">
      <Modal.Header>
        <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
        <Modal.CloseButton onClick={handleClose} />
      </Modal.Header>

      <Modal.Content>
        <p>삭제하면 복구하실 수 없습니다.</p>

        {/* 잘못된 사용: Confirm 모달에서 Modal.Input 사용 */}
        <div style={{ marginTop: "15px" }}>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>
            삭제 이유를 입력하세요 (선택사항):
          </p>

          {/* 이 Input에 포커스하거나 클릭하거나 입력하면 경고가 발생 */}
          <Modal.Input
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder="삭제 이유"
          />
        </div>
      </Modal.Content>

      <Modal.Footer>
        <Modal.Button onClick={handleClose}>취소</Modal.Button>
        <Modal.Button primary onClick={handleConfirm}>
          삭제
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <h1>Modal.Input 경고 테스트</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => {
            setModalType("alert");
            setIsOpen(true);
          }}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          잘못된 사용 예시 (Alert+Input)
        </button>
        <button
          onClick={() => {
            setModalType("confirm");
            setIsOpen(true);
          }}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          잘못된 사용 예시 (Confirm+Input)
        </button>
        <button
          onClick={() => {
            setModalType("prompt");
            setIsOpen(true);
          }}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          올바른 사용 예시 (Prompt+Input)
        </button>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <h3>테스트 방법:</h3>
        <ol>
          <li>"잘못된 사용 예시" 버튼을 클릭하여 Alert 모달을 엽니다.</li>
          <li>입력 필드를 클릭하거나 입력해 봅니다.</li>
          <li>브라우저 콘솔(F12)에서 경고 메시지를 확인합니다.</li>
          <li>동일한 방식으로 다른 예시도 테스트해 봅니다.</li>
        </ol>
      </div>

      {isOpen &&
        (modalType === "alert"
          ? renderIncorrectUsageModal()
          : modalType === "confirm"
            ? renderConfirmWithInputModal()
            : renderCorrectUsageModal())}
    </>
  );
}

export default App;
