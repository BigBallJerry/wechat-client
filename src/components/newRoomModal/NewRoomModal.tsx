import {
  Container,
  ModalDialog,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  RoomIdLabel,
  RoomNameLabel,
  RoomNameInput,
} from './styles';

type ModalProps = {
  showModal: boolean;
};

const NewRoomModal = ({ showModal }: ModalProps) => {
  console.log(`showModal=${showModal}`);

  let id = '95279527';
  return (
    <>
      {showModal && (
        <Container id='new-room-modal' aria-hidden='true'>
          <ModalDialog>
            <ModalHeader>
              <h2>Create a new chat room</h2>
              <CloseButton href='#' aria-hidden='true'>
                ×
              </CloseButton>
              <RoomIdLabel>
                Room id ( <span>{id}</span> )
              </RoomIdLabel>
            </ModalHeader>
            <ModalBody>
              <RoomNameLabel>Room Name</RoomNameLabel>
              <RoomNameInput type='text' placeholder='name' />
            </ModalBody>
            <ModalFooter className='modal-footer'>
              <button>Create</button>
            </ModalFooter>
          </ModalDialog>
        </Container>
      )}
    </>
  );
};

export default NewRoomModal;
