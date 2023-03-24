/* eslint-disable prettier/prettier */
import { Modal, ModalBody, ModalContent, ModalHeader, ModalHeaderButton } from './style'

type Props = {
  openModal: () => void
  closeModal: () => void
  title?: string
  modal: boolean
  children: any
}

export function ModalCComponent({
  closeModal,
  modal,
  title,
  children,
}: Props) {
  return (
    <div>
      {modal && (
        <>
          <Modal
            isOpen={modal}
          >
            <ModalContent>
              <ModalHeader>
                <h1>{title}</h1>
                <ModalHeaderButton onClick={closeModal}>X</ModalHeaderButton>
              </ModalHeader>

              <ModalBody>{children}</ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  )
}
