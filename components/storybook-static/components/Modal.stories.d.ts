import { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from '../types/Modal.type';
type ModalStoryProps = ModalProps & {
    title?: string;
    showCloseButton?: boolean;
};
declare const meta: Meta<ModalStoryProps>;
export default meta;
type Story = StoryObj<ModalStoryProps>;
export declare const Default: Story;
export declare const CenterWithAction: Story;
export declare const Bottom: Story;
export declare const ESCClose: Story;
export declare const BackdropClose: Story;
