import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import Button from '../Button/Button';
import useModalContext from './hooks/useModalContext';
import Input from '../Input/Input';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger>
        <Button>기본 모달 열기</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <div>
            <Modal.Title>기본 모달</Modal.Title>
            <Modal.Description>기본 모달 컴포넌트 설명</Modal.Description>
          </div>
          <Modal.CloseButton />
        </Modal.Header>
        <div>
          <p>기본 모달 내용</p>
        </div>
      </Modal.Content>
    </Modal>
  ),
};

export const NestedModals: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger>
        <Button>첫 번째 모달 열기</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>첫 번째 모달</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <div style={{ marginTop: '1rem' }}>
          <p>아래 버튼을 클릭하여 두 번째 모달을 열기</p>
          <Modal>
            <Modal.Trigger>
              <Button>두 번째 모달 열기</Button>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>두 번째 모달</Modal.Title>
                <Modal.CloseButton />
              </Modal.Header>
              <p>두 번째 모달 내용</p>
              <Modal.Footer>
                <Button>확인</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </div>
        <Modal.Footer>
          <Button variant="secondary">닫기</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

const Checkbox = ({ label }: { label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
    <input type="checkbox" id={label} style={{ marginRight: '8px' }} />
    <label htmlFor={label}>{label}</label>
  </div>
);

const renderCheckboxes = () => (
  <>
    <Checkbox label="[필수] 개인정보 수집이용 동의" />
    <Checkbox label="[필수] 고객정보 제 3자 제공동의" />
  </>
);

export const SmallModal: Story = {
  name: 'Small Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();

      return (
        <>
          <Modal.Header>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <div style={{ padding: '0 16px' }}>{renderCheckboxes()}</div>
          <Modal.Footer>
            <Button
              fullWidth
              onClick={() => {
                alert('저장하기 클릭');
                setOpen(false);
              }}
            >
              동의하고 저장하기
            </Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal size="small">
        <Modal.Trigger>
          <Button>Small Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};

export const MediumModal: Story = {
  name: 'Medium Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();

      return (
        <>
          <Modal.Header>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <div style={{ padding: '0 16px' }}>{renderCheckboxes()}</div>
          <Modal.Footer>
            <Button
              fullWidth
              onClick={() => {
                alert('저장하기 클릭');
                setOpen(false);
              }}
            >
              동의하고 저장하기
            </Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal size="medium">
        <Modal.Trigger>
          <Button>Medium Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};

export const LargeModal: Story = {
  name: 'Large Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();

      return (
        <>
          <Modal.Header>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <div style={{ padding: '0 16px' }}>{renderCheckboxes()}</div>
          <Modal.Footer>
            <Button
              fullWidth
              onClick={() => {
                alert('저장하기 클릭');
                setOpen(false);
              }}
            >
              동의하고 저장하기
            </Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal size="large">
        <Modal.Trigger>
          <Button>Large Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};

export const AlertModal: Story = {
  name: 'Alert Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();

      return (
        <>
          <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
          <Modal.Description>아이디는 필수로 입력해야 합니다.</Modal.Description>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>확인</Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal>
        <Modal.Trigger>
          <Button>Alert Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};

export const ConfirmModal: Story = {
  name: 'Confirm Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();

      const handleConfirm = () => {
        alert('카드가 삭제되었습니다.');
        setOpen(false);
      };

      return (
        <>
          <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
          <Modal.Description>삭제하면 복구하실 수 없습니다.</Modal.Description>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button onClick={handleConfirm}>확인</Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal>
        <Modal.Trigger>
          <Button>Confirm Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};

export const PromptModal: Story = {
  name: 'Prompt Modal',
  render: () => {
    const ModalContent = () => {
      const { setOpen } = useModalContext();
      const [inputValue, setInputValue] = useState('CGEXX46Z');

      const handleConfirm = () => {
        alert(`입력한 쿠폰 번호: ${inputValue}`);
        setOpen(false);
      };

      return (
        <>
          <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
          <div style={{ marginTop: '16px' }}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="CGEXX46Z" />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button onClick={handleConfirm}>확인</Button>
          </Modal.Footer>
        </>
      );
    };

    return (
      <Modal>
        <Modal.Trigger>
          <Button>Prompt Modal 열기</Button>
        </Modal.Trigger>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    );
  },
};
