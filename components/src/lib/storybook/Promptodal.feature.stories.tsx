import { useState } from 'react';
import PromptModal from '../Modal/PromptModal';
import Button from '../Button/Button';

export default {
  title: 'Components/PromptModal/Features',
  tags: ['autodocs'],
}

export const Default = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const Medium = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} size='medium' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const Large = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const Children = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')}>
      <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
    </PromptModal>
  </>)
}

export const Overflow = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
      </div>
    </PromptModal >
  </>)
}

export const Bottom = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} modalPosition='bottom' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const Placeholder = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} placeholder='' buttonPosition='column' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const Column = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} buttonPosition='column' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}

export const PrimaryColor = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <PromptModal {...args} primaryColor='#3355DD' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
  </>)
}