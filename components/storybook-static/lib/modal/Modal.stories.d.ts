import { StoryObj } from '@storybook/react';
import { default as Modal } from './Modal';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Modal').ModalProps> & {
        ModalHeader: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        ModalTitle: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>>;
        ModalCloseButton: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>;
        ModalButton: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
            size: "S" | "M" | "L";
        }>;
        ModalContent: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        ModalInputLabel: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLLabelElement> & {
            htmlFor?: string | undefined;
        }>>;
        ModalInput: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement> & {
            type: string;
            placeholder?: string | undefined;
        }>>;
        ModalFooter: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>>>;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        isOpen: {
            control: "boolean";
            default: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onClose: {
            description: string;
        };
        style: {
            control: "object";
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        size: {
            control: {
                type: "radio";
            };
            options: string[];
            description: string;
        };
        position: {
            control: {
                type: "radio";
            };
            options: string[];
            description: string;
        };
    };
    args: {
        onClose: import('@vitest/spy').Mock<[], void>;
    };
    render: ({ style, ...args }: import('./Modal').ModalProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Modal>;
export declare const 기본: Story;
export declare const 제목이_있는_모달: Story;
export declare const 상단_닫기_버튼이_있는_모달: Story;
export declare const 하단_닫기_버튼이_있는_모달: Story;
export declare const S_사이즈_모달: Story;
export declare const M_사이즈_모달: Story;
export declare const L_사이즈_모달: Story;
export declare const 알림_모달: Story;
export declare const 제목이_없는_알림_모달: Story;
export declare const 확인_모달: Story;
export declare const 입력_모달: Story;
export declare const 입력이_3개인_모달: Story;
