import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const CustomTokenSelectModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div>Select NFT</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>

        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            gap: "3em",
            padding: "0em 3em",
          }}
        >
          <Button
            style={{ width: "100%", backgroundColor: "#08089A" }}
            onClick={props.onHide}
          >
            Close
          </Button>
          <Button
            style={{ width: "100%", backgroundColor: "#08089A" }}
            onClick={props.onSelect}
          >
            Select
          </Button>
        </div>
      </Modal>
    </div>
  );
};
