import { ModalPositionType, ModalSizeType } from "@/lib/types";

export const getModalPositionStyle = (position: ModalPositionType) => {
  switch (position) {
    case "bottom":
      return `
        width: 100%;
        bottom: 0;      
        border-radius: 8px 8px 0 0;
      `;
    default: // "center"
      return `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
      `;
  }
};

export const getModalSizeStyle = (size: ModalSizeType) => {
  switch (size) {
    case "small":
      return `
        width: 20rem;
      `;
    case "large":
      return `
        width: 37.5rem;
      `;
    default: // "medium"
      return `
        width: 30rem;
      `;
  }
};

export const getModalAnimation = (position: ModalPositionType) => {
  switch (position) {
    case "bottom":
      return {
        keyframes: `
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      `,
        duration: "0.6s",
      };
    default: // "center"
      return {
        keyframes: `
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      `,
        duration: "0.3s",
      };
  }
};
