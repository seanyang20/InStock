import "./DeleteWarehouse.scss";
import React, { Component } from "react";
import Modal from "./DeleteModal.js";
// import { Link } from "react-router-dom";
// import axios from "axios";

// MUST tie modal to body to app element
// Modal.setAppElement("#root");

class DeleteWarehouse extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1></h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button
          className="deleteModal__button"
          type="button"
          onClick={this.showModal}
        >
          Open
        </button>
      </main>
    );
  }
}

export default DeleteWarehouse;

// // Set state
// state = {
//   modalIsOpen: true,
//   warehouses: [],
// };
// // Modal ON.OFF
// toggleModal = () => {
//   if (this.state.modalIsOpen === false) {
//     this.setState({
//       modalIsOpen: true,
//     });
//   } else {
//     this.setState({
//       modelIsOpen: false,
//     });
//   }
// };

//
// componentDidMount() {
//   axios
//     .get("http://localhost:8080/warehouses")
//     .then((res) => {
//       const warehouses = res.data;
//       console.log(warehouses);
//       this.setState({ warehouses: warehouses });
//     })
//     .catch((err) => console.log(err));
// }
