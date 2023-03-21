import { format, parseISO } from 'date-fns'
// import Modal from 'react-modal'
import {
  Modal,
  ModalBody,
  ModalBodyContent,
  ModalContent,
  ModalHeader,
  ModalHeaderButton,
  ModalTitle,
} from './style'

type Props = {
  openModal: () => void
  closeModal: () => void
  data: any
  modal: boolean
  setModal: any
}

export function ModalComponent({
  openModal,
  closeModal,
  data,
  modal,
  setModal,
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

              <ModalBody>
                <img
                  src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
                  alt=""
                />

                <ModalBodyContent>
                  <ModalTitle>{data?.title}</ModalTitle>

                  <li>
                    <h2>Publicados:</h2>
                    <span>
                      Data:{' '}
                      {data?.dates?.[0]?.date &&
                        format(parseISO(data?.dates?.[0]?.date), 'dd/MM/yyyy')}
                    </span>
                  </li>

                  <li>
                    <h2>Versão digital:</h2>
                    <span>
                      {data?.prices?.[1]
                        ? 'Preço: $ ' + data?.prices?.[1]?.price
                        : 'A edição digital não está disponível no momento'}
                    </span>
                  </li>
                </ModalBodyContent>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  )
}
