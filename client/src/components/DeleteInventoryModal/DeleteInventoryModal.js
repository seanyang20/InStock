import React, { Component } from "react";
import "./DeleteInventoryModal.scss";
// const apiURL = "http://localhost:8080";

export default function Modal({ handleClose, show, inventory, handleDelete }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClick = () => {
    handleDelete();
    handleClose();
  };

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
          <h1 className="modal-main__header">{`Delete ${
            inventory && inventory.itemName
          } warehouse?`}</h1>
          <p className="modal-main__text">
            {`Please confirm that you'd like to delete the ${
              inventory && inventory.itemName
            } from the list
            of warehouses. You won't be able to undo this action.`}
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
          <button
            className="modal-button--delete"
            type="button"
            onClick={handleClick}
          >
            Delete
          </button>
        </footer>
      </section>
    </div>
  );
}
