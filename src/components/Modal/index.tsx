import { format, parseISO } from 'date-fns'
import Modal from 'react-modal'
import {
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
}

const customStyles = {
  content: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    border: 'none',
    backgroundColor: '#121214',
  },
}
Modal.setAppElement('#root')

export default function ModalComponent({
  openModal,
  closeModal,
  data,
  modal,
}: Props) {
  // const [modal, setModal] = useState(false)

  // const openModal: any = (param: any) => {
  //   setCharacter(param)
  //   setModal(true)
  // }

  // const closeModal: any = () => {
  //   setModal(false)
  // }

  return (
    <div>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
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
    </div>
  )
}
