/* eslint-disable prettier/prettier */
import { Modal, ModalBody, ModalContent, ModalHeader, ModalHeaderButton } from './style'

type Props = {
  openModal: () => void
  closeModal: () => void
  data: any
  title?: string
  modal: boolean
  setModal: any
  children: any
}

export function ModalCComponent({
  openModal,
  closeModal,
  data,
  modal,
  setModal,
  title,
  children,
}: Props) {
  return (
    <div>
      {modal && (
        <>
          <Modal
            isOpen={modal}
            // onRequestClose={closeModal}
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
