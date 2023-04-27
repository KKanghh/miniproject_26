import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useCallback } from "react";

function InfoModal({ meet, openInfoModal, setOpenInfoModal }) {
    const closeModal = useCallback(() => {
        setOpenInfoModal(false);
      }, [setOpenInfoModal]);

    return (
        <Modal
          show={openInfoModal}
          onHide={closeModal}
          className="modal show"
          style={{ display: "block", position: "absoulte" }}
        >
            <Modal.Header>
                오픈 채팅에 참여하세요!
            </Modal.Header>
            <Modal.Body>
                {meet.place.place_name}
                <br />
                {new Date(meet.date).toLocaleString()}
                <br />
                {meet.link}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={closeModal}>
                    확인
                </Button>
            </Modal.Footer>
        </Modal>
      );
}

export default InfoModal;
