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
    <div className='editWarehouse'>
    <form className='editWarehouse__container'>
        <div className='editWarehouse__header'>
            <span className='editWarehouse__arrow'/>
            <h1 className='editWarehouse__title'>Edit Warehouse</h1>
        </div>
        <div className='editWarehouse__sections'>
            <div className='editWarehouse__details'>
                <h2 className='editWarehouse__details-title'>Warehouse Details</h2>
                <p className='editWarehouse__input-title'>Warehouse Name</p>
                <input name='warehouseName' className='editWarehouse__input' />
                <p className='editWarehouse__input-title'>Street Address</p>
                <input name='warehouseAddress' className='editWarehouse__input' />
                <p className='editWarehouse__input-title'>City</p>
                <input name='warehouseCity' className='editWarehouse__input'/>
                <p className='editWarehouse__input-title'>Country</p>
                <input name='warehouseCountry' className='editWarehouse__input' />
            </div>
            <div className='editWarehouse__sections-divider' ></div>
            <div className='editWarehouse__details'>
                <h2 className='editWarehouse__details-title'>Contact Details</h2>
                <p className='editWarehouse__input-title'>Contact Name</p>
                <input name='contactName' className='editWarehouse__input' />
                <p className='editWarehouse__input-title'>Position</p>
                <input name='contactPosition' className='editWarehouse__input' />
                <p className='editWarehouse__input-title'>Phone Number</p>
                <input name='contactPhone' className='editWarehouse__input' />
                <p className='editWarehouse__input-title'>Email</p>
                <input name='contactEmail' className='editWarehouse__input' />
            </div>
        </div>
        <div className='editWarehouse__actions'>
            <button className='editWarehouse__actions--cancel'>Cancel</button>
            <button type='submit' className='editWarehouse__actions--save'>Save</button>
        </div>
    </form>
</div>
  );
}