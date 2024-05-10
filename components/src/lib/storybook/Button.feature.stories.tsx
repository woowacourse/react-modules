import Button from '../Button/Button';

export default {
  title: 'Components/Button/Features',
  tags: ['autodocs'],
}


export const Default = () => <Button text="default" />
export const Medium = () => <Button text="medium" size='medium' />
export const Large = () => <Button text="large" size='large' />
export const Fit = () => <Button text="fit" width='fit' />
export const Full = () => <Button text="full" width='full' />
export const Border = () => <Button text="border" buttonStyle='border' />
export const Text = () => <Button text="text" buttonStyle='text' />
export const BrightColor = () => <Button text="bright" primaryColor='#ffd09e' />
export const DarkColor = () => <Button text="dark" primaryColor='#0076d0' />
export const Disabled = () => <Button text="disabled" disabled={true} />