// import Modal from 'react-modal'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalHeaderButton,
} from './style'

type Props = {
  openModal: () => void
  closeModal: () => void
  data: any
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
