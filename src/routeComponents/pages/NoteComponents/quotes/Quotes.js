import React, { useState, createContext } from "react";
import { Modal, Button } from "react-bootstrap";

function Quotes(props) {
  const [showQuotes, setShowQuotes] = useState(false);
  
  const handleShow = () => setShowQuotes(true);
  const handleClose = () => setShowQuotes(false);

  return (
    <Modal id="modalQuotes" style={{height: "100%", width: "100%", position: "fixed"}} show={showQuotes} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Funny Cohort Quotes! &#128540;</Modal.Title>
      </Modal.Header>
      <Modal.Body>text</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Quotes;
