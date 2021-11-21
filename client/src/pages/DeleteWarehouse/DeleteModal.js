import React, { Component } from "react";
import "./DeleteWarehouse.scss";
import Button from "react-bootstrap/Button";
// import Modal from "react-modal";

// state = {
//   warehouses: [],
// };

// componentDidMount() {
//       axios
//         .get("http://localhost:8080/warehouses")
//         .then((res) => {
//           const warehouses = res.data;
//           console.log(warehouses);
//           this.setState({ warehouses: warehouses });
//         })
//         .catch((err) => console.log(err));
//     };

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-box">
        <header className="modal-header">
          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
            aria-label="Close"
          >
            <span className="modal-close--cross" aria-hidden="true">
              &times;
            </span>
          </button>
        </header>
        <div className="modal-main">
          <h1 className="modal-main__header">Delete King West warehouse?</h1>
          <p className="modal-main__text">
            Please confirm that you'd like to delete the King West from the list
            of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <footer className="modal-footer">
          <button
            className="modal-button--cancel"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="modal-button--delete" type="button">
            Delete
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
