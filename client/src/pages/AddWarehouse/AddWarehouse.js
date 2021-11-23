import "./AddWarehouse.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import { useState } from "react";
const apiUrl = "http://localhost:8080";

export default function AddWarehouse(props) {
  const [validation, setValidation] = useState({
    name: true,
    address: true,
    city: true,
    country: true,
    contactName: true,
    position: true,
    phone: true,
    email: true,
  });

  const handleClick = (event) => {
    event.preventDefault();
    props.history.push("/warehouses");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      warehouseName,
      streetAddress,
      city,
      country,
      contactName,
      position,
      phoneNumber,
      email,
    } = event.target;

    const nameIsValid = warehouseName.value.length > 0;
    const addressIsValid = streetAddress.value.length > 0;
    const cityIsValid = city.value.length > 0;
    const countryIsValid = country.value.length > 0;
    const contactNameIsValid = contactName.value.length > 0;
    const positionIsValid = position.value.length > 0;
    const phoneIsValid = !!phoneNumber.value.match(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    const emailIsValid = !!email.value.match(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    setValidation({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      country: countryIsValid,
      contactName: contactNameIsValid,
      position: positionIsValid,
      phone: phoneIsValid,
      email: emailIsValid,
    });

    if (
      !nameIsValid ||
      !addressIsValid ||
      !cityIsValid ||
      !countryIsValid ||
      !contactNameIsValid ||
      !positionIsValid ||
      !phoneIsValid ||
      !emailIsValid
    ) {
      return;
    }

    const newWarehouse = {
      name: warehouseName.value,
      address: streetAddress.value,
      city: city.value,
      country: country.value,
      contactName: contactName.value,
      position: position.value,
      phone: phoneNumber.value,
      email: email.value,
    };

    console.log(newWarehouse);
    axios
      .post(`${apiUrl}/warehouses/add`, newWarehouse)
      .then(() => {
        props.history.push("/warehouses");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(validation);

  return (
    <section className="add-warehouse">
      <div className="add-warehouse__header">
        <img onClick={handleClick} src={arrow} alt="arrow" />
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>

      <form onSubmit={handleSubmit} className="add-warehouse__form">
        <div className="add-warehouse__flex-container">
          <section className="add-warehouse__form-section">
            <h2 className="add-warehouse__section-title">Warehouse Details</h2>
            <div className="add-warehouse__form-field">
              <label
                className="add-warehouse__input-label"
                htmlFor="warehouseName"
              >
                Warehouse Name
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="warehouseName"
                placeholder="
      Warehouse Name"
              ></input>
              {!validation.name && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label
                className="add-warehouse__input-label"
                htmlFor="streetAdress"
              >
                Street Address
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="streetAddress"
                placeholder="
      Street Address"
              ></input>
              {!validation.address && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label className="add-warehouse__input-label" htmlFor="city">
                City
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="city"
                placeholder="
      City"
              ></input>
              {!validation.city && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label className="add-warehouse__input-label" htmlFor="country">
                Country
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="country"
                placeholder="
      Country"
              ></input>
              {!validation.country && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
          </section>
          <section className="add-warehouse__form-section">
            <h2 className="add-warehouse__section-title">Contact Details</h2>
            <div className="add-warehouse__form-field">
              <label
                className="add-warehouse__input-label"
                htmlFor="contactName"
              >
                Contact Name
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="contactName"
                placeholder="
      Contact Name"
              ></input>
              {!validation.contactName && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label className="add-warehouse__input-label" htmlFor="position">
                Position
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="position"
                placeholder="
      Position"
              ></input>
              {!validation.position && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label
                className="add-warehouse__input-label"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="phoneNumber"
                placeholder="
      Phone Number"
              ></input>
              {!validation.phone && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
            <div className="add-warehouse__form-field">
              <label className="add-warehouse__input-label" htmlFor="email">
                Email
              </label>
              <input
                className={`add-warehouse__input ${
                  !validation.name && "add-warehouse__input--invalid"
                }`}
                type="text"
                name="email"
                placeholder="
      Email"
              ></input>
              {!validation.email && (
                <div className="add-warehouse__input-error">
                  <img
                    src={error}
                    alt="error icon"
                    className="add-warehouse__input-error-icon"
                  />
                  <span>This field is required</span>
                </div>
              )}
            </div>
          </section>
        </div>
        <section className="add-warehouse__buttons">
          <button
            onClick={handleClick}
            className="add-warehouse__cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="add-warehouse__add-button">
            + Add Warehouse
          </button>
        </section>
      </form>
    </section>
  );
}
