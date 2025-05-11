import { useState } from "react";
import { Modal, ModalType } from "bunju-react-modal";

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

  const renderFormModal = () => (
    <Modal onClose={handleClose} modalType="alert" modalSize="large">
      <Modal.Header>
        <Modal.Title>사용자 정보 입력</Modal.Title>
        <Modal.CloseButton onClick={handleClose} />
      </Modal.Header>

      <Modal.Content>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{ display: "block", marginBottom: "5px" }}
            >
              전화번호
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px" }}
            >
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      </Modal.Content>

      <Modal.Footer>
        <Modal.Button onClick={handleClose}>취소</Modal.Button>
        <Modal.Button primary onClick={handleConfirm}>
          제출
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => {
            setModalType("alert");
            setIsOpen(true);
          }}
        >
          Alert 모달 열기
        </button>
        <button
          onClick={() => {
            setModalType("confirm");
            setIsOpen(true);
          }}
        >
          Confirm 모달 열기
        </button>
        <button
          onClick={() => {
            setModalType("prompt");
            setIsOpen(true);
          }}
        >
          Prompt 모달 열기
        </button>
        <button
          onClick={() => {
            setModalType("confirm");
            setIsOpen(true);
          }}
        >
          Form 모달 열기
        </button>
      </div>

      {isOpen && modalType === "confirm"
        ? renderFormModal()
        : isOpen && (
            <Modal
              onClose={handleClose}
              modalType={modalType}
              modalSize="medium"
            >
              <Modal.Header>
                <Modal.Title>
                  {modalType === "alert"
                    ? "아이디를 입력해주세요"
                    : modalType === "confirm"
                      ? "카드를 삭제하시겠습니다?"
                      : "쿠폰번호를 입력해주세요"}
                </Modal.Title>
                <Modal.CloseButton onClick={handleClose} />
              </Modal.Header>

              <Modal.Content>
                {modalType === "alert" && (
                  <p>아이디는 필수로 입력해야합니다.</p>
                )}
                {modalType === "confirm" && (
                  <p>삭제하면 복구하실 수 없습니다.</p>
                )}
                {modalType === "prompt" && (
                  <Modal.Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="아이디를 입력하세요"
                  />
                )}
              </Modal.Content>

              <Modal.Footer>
                {(modalType === "confirm" || modalType === "prompt") && (
                  <Modal.Button onClick={handleClose}>취소</Modal.Button>
                )}
                <Modal.Button primary onClick={handleConfirm}>
                  확인
                </Modal.Button>
              </Modal.Footer>
            </Modal>
          )}
    </>
  );
}

export default App;
