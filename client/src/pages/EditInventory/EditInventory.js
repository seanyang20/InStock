import './EditInventory.scss';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router'
import axios from 'axios'
const apiUrl = 'http://localhost:8080'

// const inventory_API_URL = "http://localhost:8080/inventories";

export default function EditInventory(props) {
    const [inventory, setInventory] = useState({contact: {}})
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

  return (
    <div className='editInventory'>
    <form className='editInventory__container'>
        <div className='editInventory__header'>
            <span className='editInventory__arrow'/>
            <h1 className='editInventory__title'>Edit Inventory</h1>
        </div>
        <div className='editInventory__sections'>
            <div className='editInventory__details'>
                <h2 className='editInventory__details-title'>Item Details</h2>
                <p className='editInventory__input-title'>Item Name</p>
                <input name='warehouseName' className='editInventory__input' />
                <p className='editInventory__input-title'>Description</p>
                <input name='warehouseAddress' className='editInventory__input editInventory__description' />
                <p className='editInventory__input-title'>Category</p>
                {/* <input name='warehouseCountry' className='editInventory__input' /> */}
                <select name="warehouseCountry" className='editInventory__input'>
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
                <div name='contactName' className='editInventory__status' >
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label htmlFor="html">In stock</label>
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label htmlFor="css">Out of stock</label>
                </div>
                <p className='editInventory__input-title'>Warehouse</p>
                {/* <input name='contactPosition' className='editInventory__input' /> */}
                <select name='contactPosition' className='editInventory__input'>
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