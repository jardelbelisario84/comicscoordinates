/* eslint-disable prettier/prettier */
import { ModalBody, ModalContent, ModalHeader, ModalHeaderButton, ModalStyled } from './style'

type Props = {
  openModal: () => void
  closeModal: () => void
  title?: string
  modal: boolean
  children: any
}

export function Modal({
  closeModal,
  modal,
  title,
  children,
}: Props) {
  return (
    <div>
      {modal && (
        <>
          <ModalStyled
            isOpen={modal}
          >
            <ModalContent>
              <ModalHeader>
                <h1>{title}</h1>
                <ModalHeaderButton onClick={closeModal}>X</ModalHeaderButton>
              </ModalHeader>

              <ModalBody>{children}</ModalBody>
            </ModalContent>
          </ModalStyled>
        </>
      )}
    </div>
  )
}
