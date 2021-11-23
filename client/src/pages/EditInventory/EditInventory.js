import "./EditInventory.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import axios from "axios";
const apiUrl = "http://localhost:8080";

// const inventory_API_URL = "http://localhost:8080/inventories";

export default function EditInventory(props) {
  const [warehouses, setWarehouses] = useState([]);
  const [allWarehouseData, setAllWarehouseData] = useState([]);
  const [inventory, setInventory] = useState({});
  const [inStock, setInStock] = useState(false);
  // const [selectOptions, setSelectOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [validation, setValidation] = useState({
    warehouseName: true,
    itemName: true,
    description: true,
    category: true,
    status: true,
  });
  const history = useHistory();

  useEffect(() => {
    console.log(props.match.params.id);
    axios
      .get(`${apiUrl}/inventories/${props.match.params.id}`)
      .then((response) => {
        setInventory(response.data);

        axios
          .get(`${apiUrl}/warehouses`)
          .then((res) => {
            setAllWarehouseData(res.data);
            let warehouseArr = res.data.map((warehouse) => {
              const container = {};
              container.value = warehouse.name;
              container.label = warehouse.name;
              console.log(container);
              return container;
            });
            setWarehouses(warehouseArr);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  const handleRadioTrue = () => {
    setInStock(true);
    console.log(inStock);
  };

  const handleRadioFalse = () => {
    setInStock(false);
    console.log(inStock);
  };

  const categoryOptions = [
    { value: "accessories", label: "Accessories" },
    { value: "apparel", label: "Apparel" },
    { value: "electronics", label: "Electronics" },
    { value: "gear", label: "Gear" },
    { value: "health", label: "Health" },
  ];

  //   const warehouseOptions = [
  //     { value: "Manhattan", label: "Manhattan" },
  //     { value: "King West", label: "King West" },
  //     { value: "Granville", label: "Granville" },
  //     { value: "San Fran", label: "San Fran" },
  //     { value: "Santa Monica", label: "Santa Monica" },
  //     { value: "Seattle", label: "Seattle" },
  //     { value: "Montreal", label: "Montreal" },
  //   ];

  const handleWarehouseChange = (selectedWarehouse) => {
    setSelectedWarehouse(selectedWarehouse);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  // const getOptions = () => {
  //     console.log("Inside getOptions");

  // }

  // let invItems = [];
  // axios
  // .get(`${apiUrl}/inventories`)
  // .then((res) => {
  //     console.log(res.data);
  //     res.data.find((inv) => {
  //         console.log(inv.warehouseName);
  //         invItems.push(inv.warehouseName);
  //     })
  // })
  // console.log(invItems);
  // let uniqueInvItems = [...new Set(invItems)];
  // console.log(uniqueInvItems);
  const handleClick = (event) => {
    event.preventDefault();
    props.history.push("/inventories");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside handleSubmit for edit Inventory");
    console.log(event.target);

    const status = inStock ? "In Stock" : "Out of Stock";
    const updatedQuantity = inStock ? inventory.value : 0;

    const updatedInventory = {
      warehouseName: event.target.warehouseName.value,
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      category: event.target.category.value,
      // status: event.target.status.value,
      status: status,
      quantity: updatedQuantity,
    };
    console.log(inventory);
    console.log(updatedInventory);

    const warehouseNameIsValid = updatedInventory.warehouseName.length > 0;
    const itemNameIsValid = updatedInventory.itemName.length > 0;
    const descriptionIsValid = updatedInventory.description.length > 0;
    const categoryIsValid = updatedInventory.category.length > 0;
    const statusIsValid = updatedInventory.status.length > 0;
    // const quantityIsValid = updatedInventory.quantity.length > 0;
    // console.log(warehouseNameIsValid);

    setValidation({
      warehouseName: warehouseNameIsValid,
      itemName: itemNameIsValid,
      description: descriptionIsValid,
      category: categoryIsValid,
      status: statusIsValid,
      // quantity: quantityIsValid,
    });

    if (
      !warehouseNameIsValid ||
      !itemNameIsValid ||
      !descriptionIsValid ||
      !categoryIsValid ||
      !statusIsValid
      // !quantityIsValid
    ) {
      alert("Fields cannot be empty");
      return;
    }

    axios
      .put(`${apiUrl}/inventories/edit/${inventory.id}`, updatedInventory)
      .then((response) => {
        console.log(response);
        history.push("/inventories");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(validation);

  // console.log(inventory.category);
  return (
    <div className="editInventory">
      <form onSubmit={handleSubmit} className="editInventory__container">
        <div className="editInventory__header">
          <span
            onClick={() => {
              history.push("/inventories");
            }}
            className="editInventory__arrow"
          />
          <h1 className="editInventory__title">Edit Inventory Item</h1>
        </div>
        <div className="editInventory__sections">
          <div className="editInventory__details">
            <h2 className="editInventory__details-title">Item Details</h2>
            <p className="editInventory__input-title">Item Name</p>
            <input
              name="itemName"
              defaultValue={inventory.itemName}
              className={`editInventory__input ${
                !validation.itemName && "editInventory__input--invalid"
              }`}
            />
            <p className="editInventory__input-title">Description</p>
            <input
              name="description"
              defaultValue={inventory.description}
              className={`editInventory__description ${
                !validation.description && "editInventory__description--invalid"
              }`}
            />
            <p className="editInventory__input-title">Category</p>
            {/* <input name='warehouseCountry' className='editInventory__input' /> */}
            <Select
              id="category"
              className="editInventory__select"
              options={categoryOptions}
              placeholder={inventory.category}
              name="category"
              onChange={handleCategoryChange}
            />
            {/* <select  name="category" id="category" className='editInventory__input'  >
                    <option value="electronics">Electronics</option>
                    <option value="gear">Gear</option>
                    <option value="apparel">Apparel</option>
                    <option value="accessories">Accessories</option>
                </select> */}
          </div>
          <div className="editInventory__sections-divider"></div>
          <div className="editInventory__availability">
            <h2 className="editInventory__details-title">Item Availability</h2>
            <p className="editInventory__input-title">Status</p>
            <div name="status" className="editInventory__status">
              <input
                type="radio"
                id="inStock"
                name="fav_language"
                value="In stock"
                onClick={handleRadioTrue}
                defaultChecked="checked"
              />
                <label htmlFor="inStock">In stock</label> {" "}
              <input
                type="radio"
                id="outOfStock"
                name="fav_language"
                defaultChecked="checked"
                value="Out of stock"
                onClick={handleRadioFalse}
              />
                <label htmlFor="outOfStock">Out of stock</label>
            </div>
            <p className="editInventory__input-title">Warehouse</p>
            {/* <input name='contactPosition' className='editInventory__input' /> */}
            <Select
              className="editInventory__select"
              options={warehouses}
              placeholder={inventory.warehouseName}
              name="warehouseName"
              onChange={handleWarehouseChange}
              id="warehouseName"
            />
            {/* <select name='warehouseName' id='warehouseName' className='editInventory__input'>
                    <option value="Manhattan">Manhattan</option>
                    <option value="King West">King West</option>
                    <option value="Granville">Granville</option>
                    <option value="San Fran">San Fran</option>
                    <option value="Santa Monica">Santa Monica</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Montreal">Montreal</option>
                </select> */}
          </div>
        </div>
        <div className="editInventory__actions">
          <button
            onClick={handleClick}
            className="editInventory__actions--cancel"
          >
            Cancel
          </button>
          <button type="submit" className="editInventory__actions--save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
