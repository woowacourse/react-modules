import { useState } from 'react';
import CustomModal from '../Modal/CustomModal';
import Button from '../Button/Button';

export default {
  title: 'Components/CustomModal/Features',
  tags: ['autodocs'],
}

export const Default = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
  </>)
}

export const PrimaryButton = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}
      primaryButton={{
        text: 'primary',
        onClick: () => { alert('click primary'); },
        width: 'full',
        buttonStyle: 'primary',
      }} />
  </>)
}

export const SecondaryButton = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}
      primaryButton={{
        text: 'primary',
        onClick: () => { alert('click primary'); },
        width: 'full',
        buttonStyle: 'primary',
      }}
      secondaryButton={{
        text: 'secondary',
        onClick: () => { alert('click secondary'); },
        width: 'full',
        buttonStyle: 'border',
      }} />
  </>)
}

export const Medium = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} size='medium' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
  </>)
}

export const Large = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
  </>)
}

export const Children = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}>
      <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
    </CustomModal>
  </>)
}

export const Overflow = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} size='large' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
      </div>
    </CustomModal >
  </>)
}

export const Bottom = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} modalPosition='bottom' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
  </>)
}

export const Column = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} buttonPosition='column' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}
      primaryButton={{
        text: 'primary',
        onClick: () => { alert('click primary'); },
        width: 'full',
        buttonStyle: 'primary',
      }}
      secondaryButton={{
        text: 'secondary',
        onClick: () => { alert('click secondary'); },
        width: 'full',
        buttonStyle: 'border',
      }} />
  </>)
}

export const PrimaryColor = ({ ...args }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (<>
    <Button text='show modal' onClick={() => setIsOpened(true)} />
    <CustomModal {...args} primaryColor='#3355DD' title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)}
      primaryButton={{
        text: 'primary',
        onClick: () => { alert('click primary'); },
        width: 'full',
        buttonStyle: 'primary',
      }}
      secondaryButton={{
        text: 'secondary',
        onClick: () => { alert('click secondary'); },
        width: 'full',
        buttonStyle: 'border',
      }} />
  </>)
}

