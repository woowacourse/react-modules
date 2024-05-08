import { StyledModalDescription } from "./ModalDescription..styled"

interface ModalDescriptionProps {
  description: string
}

const ModalDescription = ({ description }: ModalDescriptionProps) => {
  return (
    <StyledModalDescription>{description}</StyledModalDescription>
  )
}

export default ModalDescription;