import { Modal, Button } from 'react-bootstrap';

export const MyModal = ({ showModal, setShowModal, message }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};