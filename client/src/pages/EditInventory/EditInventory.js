import './EditInventory.scss';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router'
import axios from 'axios'
const apiUrl = 'http://localhost:8080'

// const inventory_API_URL = "http://localhost:8080/inventories";

export default function EditInventory(props) {
    const [inventory, setInventory] = useState();
    const [inStock, setInStock] = useState(false);
    // const [selectOptions, setSelectOptions] = useState([]);
    const [validation, setValidation] = useState({
        warehouseName: true,
        itemName: true,
        description: true,
        category: true,
        // status: true,
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

    const handleRadioTrue = () => {
        setInStock(true);
        console.log(inStock);
      };
    
      const handleRadioFalse = () => {
        setInStock(false);
        console.log(inStock);
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

    const handleSubmit = (event) => {
        event.preventDefault()
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
        }
        console.log(inventory);
        console.log(updatedInventory);

        // const warehouseNameIsValid = updatedInventory.warehouseName.value.length > 0;
        // const itemNameIsValid = updatedInventory.itemName.value.length > 0;
        // const descriptionIsValid = updatedInventory.description.value.length > 0;
        // const categoryIsValid = updatedInventory.category.value.length > 0;
        // // const statusIsValid = status.value.length > 0;
 

        // setValidation({
        //     warehouseName: warehouseNameIsValid,
        //     itemName: itemNameIsValid,
        //     description: descriptionIsValid,
        //     category: categoryIsValid,
        //     // status: statusIsValid,
        //   });

        //   if (
        //     !warehouseNameIsValid ||
        //     !itemNameIsValid ||
        //     !descriptionIsValid ||
        //     !categoryIsValid 
        //     // !statusIsValid 
        //   ) {
        //     alert("Please fill in the empty fields");
        //     return;
        //   }
      
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
            console.log(response);
            history.push('/inventories')
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
                <input name='itemName' className='editInventory__input' d/>
                <p className='editInventory__input-title'>Description</p>
                <input name='description' className='editInventory__input editInventory__description'  />
                <p className='editInventory__input-title'>Category</p>
                {/* <input name='warehouseCountry' className='editInventory__input' /> */}
                <select  name="category" className='editInventory__input' defaultValue="Electronics" >
                    <option value="electronics">Electronics</option>
                    <option value="gear">Gear</option>
                    <option value="apparel">Apparel</option>
                    <option value="accessories">Accessories</option>
                </select>
            </div>
            <div className='editInventory__sections-divider' ></div>
            <div className='editInventory__availability'>
                <h2 className='editInventory__details-title'>Item Availability</h2>
                <p className='editInventory__input-title'>Status</p>
                <div name='status' className='editInventory__status' >
                  <input type="radio" id="inStock" name="fav_language" value="In stock" onClick={handleRadioTrue}/>
                  <label htmlFor="inStock">In stock</label>
                  <input type="radio" id="outOfStock" name="fav_language" value="Out of stock" onClick={handleRadioFalse}/>
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
                <p className='editInventory__input-title'>Warehouse</p>
                {/* <input name='contactPosition' className='editInventory__input' /> */}
                <select name='warehouseName' className='editInventory__input' defaultValue='Manhattan'>
                    <option value="Manhattan">Manhattan</option>
                    <option value="King West">King West</option>
                    <option value="Granville">Granville</option>
                    <option value="San Fran">San Fran</option>
                    <option value="Santa Monica">Santa Monica</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Montreal">Montreal</option>
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