import "./AddWarehouse.scss";

export default function AddWarehouse() {
  return (
    <section>
      <h1>Add New Warehouse</h1>
      <form>
        <section>
          <h2>Warehouse Details</h2>
          <label for="warehouseName">Warehouse Name</label>
          <input
            id="warehouseName"
            placeholder="
      Warehouse Name"
          ></input>
          <label for="streetAdress">Street Address</label>
          <input
            id="streetAddress"
            placeholder="
      Street Address"
          ></input>
          <label for="city">City</label>
          <input
            id="city"
            placeholder="
      City"
          ></input>
          <label for="country">Country</label>
          <input
            id="country"
            placeholder="
      Country"
          ></input>
        </section>
        <section>
          <h2>Contact Details</h2>
          <label for="contactName">Contact Name</label>
          <input
            id="contactName"
            placeholder="
      Contact Name"
          ></input>
          <label for="position">Position</label>
          <input
            id="position"
            placeholder="
      Position"
          ></input>
          <label for="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            placeholder="
      PhoneNumber"
          ></input>
          <label for="email">Email</label>
          <input
            id="email"
            placeholder="
      Email"
          ></input>
        </section>
        <button>Cancel</button>
        <button>+ Add Warehouse</button>
      </form>
    </section>
  );
}
