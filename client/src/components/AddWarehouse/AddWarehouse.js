import "./AddWarehouse.scss";

export default function AddWarehouse() {
  return (
    <section className="add-warehouse">
      <h1 className="add-warehouse__title">Add New Warehouse</h1>
      <form className="add-warehouse__form">
        <section className="add-warehouse__form-section">
          <h2 className="add-warehouse__section-title">Warehouse Details</h2>
          <label className="add-warehouse__input-label" for="warehouseName">
            Warehouse Name
          </label>
          <input
            className="add-warehouse__input"
            id="warehouseName"
            placeholder="
      Warehouse Name"
          ></input>
          <label className="add-warehouse__input-label" for="streetAdress">
            Street Address
          </label>
          <input
            className="add-warehouse__input"
            id="streetAddress"
            placeholder="
      Street Address"
          ></input>
          <label className="add-warehouse__input-label" for="city">
            City
          </label>
          <input
            className="add-warehouse__input"
            id="city"
            placeholder="
      City"
          ></input>
          <label className="add-warehouse__input-label" for="country">
            Country
          </label>
          <input
            className="add-warehouse__input"
            id="country"
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
            id="contactName"
            placeholder="
      Contact Name"
          ></input>
          <label className="add-warehouse__input-label" for="position">
            Position
          </label>
          <input
            className="add-warehouse__input"
            id="position"
            placeholder="
      Position"
          ></input>
          <label className="add-warehouse__input-label" for="phoneNumber">
            Phone Number
          </label>
          <input
            className="add-warehouse__input"
            id="phoneNumber"
            placeholder="
      PhoneNumber"
          ></input>
          <label className="add-warehouse__input-label" for="email">
            Email
          </label>
          <input
            className="add-warehouse__input"
            id="email"
            placeholder="
      Email"
          ></input>
        </section>
        <button className="add-warehouse__cancel-button">Cancel</button>
        <button className="add-warehouse__add-button">
          + Add Warehouse
        </button>
      </form>
    </section>
  );
}
