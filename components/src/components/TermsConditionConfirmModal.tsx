import { useEffect, useState } from 'react';
import Modal from '../lib/Modal';

export default function TermsConditionConfirmModal({
  position,
  isModalOpen,
  closeButtonType,
}: {
  position: 'bottom' | 'center';
  isModalOpen: boolean;
  closeButtonType: 'icon' | 'box';
}) {
  const [isOpen, setIsOpen] = useState(isModalOpen);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  const action = () => {
    confirm('동의하십니까?');
  };

  return (
    <Modal position={position} isModalOpen={isOpen} closeModal={closeModal}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Modal.Title>약관에 동의해 주세요</Modal.Title>
        {closeButtonType === 'icon' && <Modal.CloseButton buttonType="icon" />}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#8B95A1' }}>
        <p style={{ margin: '0', height: '1.5rem' }}>[필수] 개인정보 수집이용 동의</p>
        <p style={{ margin: '0', height: '1.5rem' }}>[필수] 고객정보 제 3자 제공동의</p>
      </div>
      <Modal.Button action={action} closeAfterAction={true}>
        동의하고 저장하기
      </Modal.Button>
      {closeButtonType === 'box' && <Modal.CloseButton buttonType="box">닫기</Modal.CloseButton>}
    </Modal>
  );
}
