import "./AddWarehouse.scss";
import axios from "axios";
const apiUrl = "http://localhost:8080";

export default function AddWarehouse() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newWarehouse = {
      name: event.target.warehouseName.value,
      address: event.target.streetAddress.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact: {
        name: event.target.contactName.value,
        position: event.target.position.value,
        phone: event.target.phoneNumber.value,
        email: event.target.email.value,
      },
    };
    console.log(newWarehouse);
    axios
      .post(`${apiUrl}`, newWarehouse)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article className="temp-background">
      <section className="add-warehouse">
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
        <form onSubmit={handleSubmit} className="add-warehouse__form">
          <section className="add-warehouse__form-section">
            <h2 className="add-warehouse__section-title">Warehouse Details</h2>
            <label className="add-warehouse__input-label" for="warehouseName">
              Warehouse Name
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="warehouseName"
              placeholder="
      Warehouse Name"
            ></input>
            <label className="add-warehouse__input-label" for="streetAdress">
              Street Address
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="streetAddress"
              placeholder="
      Street Address"
            ></input>
            <label className="add-warehouse__input-label" for="city">
              City
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="city"
              placeholder="
      City"
            ></input>
            <label className="add-warehouse__input-label" for="country">
              Country
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="country"
              placeholder="
      Country"
            ></input>
          </section>
          <section className="add-warehouse__form-section">
            <h2 className="add-warehouse__section-title">Contact Details</h2>
            <label className="add-warehouse__input-label" for="contactName">
              Contact Name
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="contactName"
              placeholder="
      Contact Name"
            ></input>
            <label className="add-warehouse__input-label" for="position">
              Position
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="position"
              placeholder="
      Position"
            ></input>
            <label className="add-warehouse__input-label" for="phoneNumber">
              Phone Number
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="phoneNumber"
              placeholder="
      PhoneNumber"
            ></input>
            <label className="add-warehouse__input-label" for="email">
              Email
            </label>
            <input
              className="add-warehouse__input"
              type="text"
              name="email"
              placeholder="
      Email"
            ></input>
          </section>
          <section className="add-warehouse__buttons">
            <button className="add-warehouse__cancel-button">Cancel</button>
            <button type="submit" className="add-warehouse__add-button">
              + Add Warehouse
            </button>
          </section>
        </form>
      </section>
    </article>
  );
}
