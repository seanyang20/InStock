import './EditInventory.scss';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router'
import axios from 'axios'
const apiUrl = 'http://localhost:8080'

// const inventory_API_URL = "http://localhost:8080/inventories";

export default function EditInventory(props) {
    const [inventory, setInventory] = useState()
    const [validation, setValidation] = useState({
        warehouseName: true,
        itemName: true,
        description: true,
        category: true,
        status: true,
      });
    const history = useHistory()

    useEffect(() => {
        axios.get(`${apiUrl}/inventories/${props.match.params.id}`)
        .then((response) => {
            setInventory(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.match.params.id])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("inside handleSubmit for edit Inventory");
       
        const updatedInventory = {
            warehouseName: event.target.warehouseName.value,
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            // status: event.target.status.value,
 
        }
        console.log(inventory.id);
        console.log(updatedInventory);

        const warehouseNameIsValid = updatedInventory.warehouseName.value.length > 0;
        const itemNameIsValid = updatedInventory.itemName.value.length > 0;
        const descriptionIsValid = updatedInventory.description.value.length > 0;
        const categoryIsValid = updatedInventory.category.value.length > 0;
        // const statusIsValid = status.value.length > 0;

        setValidation({
            warehouseName: warehouseNameIsValid,
            itemName: itemNameIsValid,
            description: descriptionIsValid,
            category: categoryIsValid,
            // status: statusIsValid,
          });

          if (
            !warehouseNameIsValid ||
            !itemNameIsValid ||
            !descriptionIsValid ||
            !categoryIsValid 
            // !statusIsValid 
          ) {
            alert("Please fill in the empty fields");
            return;
          }
      
        //   const newWarehouse = {
        //     name: warehouseName.value,
        //     address: streetAddress.value,
        //     city: city.value,
        //     country: country.value,
        //     contactName: contactName.value,
        //     position: position.value,
        //     phone: phoneNumber.value,
        //     email: email.value,
        //   };
    

        axios.put(`${apiUrl}/inventories/${inventory.id}`, updatedInventory)
        .then((response) => {
            history.push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(validation);

  return (
    <div className='editInventory'>
    <form onSubmit={handleSubmit} className='editInventory__container'>
        <div className='editInventory__header'>
            <span onClick={() => {history.push('/inventories')}} className='editInventory__arrow'/>
            <h1 className='editInventory__title'>Edit Inventory Item</h1>
        </div>
        <div className='editInventory__sections'>
            <div className='editInventory__details'>
                <h2 className='editInventory__details-title'>Item Details</h2>
                <p className='editInventory__input-title'>Item Name</p>
                <input name='itemName' className='editInventory__input' />
                <p className='editInventory__input-title'>Description</p>
                <input name='description' className='editInventory__input editInventory__description' />
                <p className='editInventory__input-title'>Category</p>
                {/* <input name='warehouseCountry' className='editInventory__input' /> */}
                <select name="category" className='editInventory__input'>
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                </select>
            </div>
            <div className='editInventory__sections-divider' ></div>
            <div className='editInventory__availability'>
                <h2 className='editInventory__details-title'>Item Availability</h2>
                <p className='editInventory__input-title'>Status</p>
                <div name='status' className='editInventory__status' >
                  <input type="radio" id="inStock" name="fav_language" value="In stock"/>
                  <label htmlFor="html">In stock</label>
                  <input type="radio" id="css" name="fav_language" value="Out of stock"/>
                  <label htmlFor="css">Out of stock</label>
                </div>
                <p className='editInventory__input-title'>Warehouse</p>
                {/* <input name='contactPosition' className='editInventory__input' /> */}
                <select name='warehouseName' className='editInventory__input'>
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                </select>
            </div>
        </div>
        <div className='editInventory__actions'>
            <button className='editInventory__actions--cancel'>Cancel</button>
            <button type='submit' className='editInventory__actions--save'>Save</button>
        </div>
    </form>
</div>
  );
}