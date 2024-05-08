import { StyledModalTitle } from "./ModalTitle.styled"

interface ModalTitleProps {
  title: string
}

const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <StyledModalTitle>
      {title}
    </StyledModalTitle>
  )
}

export default ModalTitle;
