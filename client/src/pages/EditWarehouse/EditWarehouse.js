import './EditWarehouse.scss'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
const apiUrl = 'http://localhost:8080'

export default function EditWarehouse(props) {
    const [warehouse, setWarehouse] = useState({contact: {}})
    const history = useHistory()

    useEffect(() => {
        axios.get(`${apiUrl}/warehouses/${props.match.params.id}`)
        .then((response) => {
            setWarehouse(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.match.params.id])

    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedWarehouse = {
            name: event.target.warehouseName.value,
            address: event.target.warehouseAddress.value,
            city: event.target.warehouseCity.value,
            country: event.target.warehouseCountry.value,
            contact: {
                name: event.target.contactName.value,
                position: event.target.contactPosition.value,
                phone: event.target.contactPhone.value,
                email: event.target.contactEmail.value
            }
        }

        axios.put(`${apiUrl}/warehouses/${warehouse.id}`, updatedWarehouse)
        .then((response) => {
            history.push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='editWarehouse'>
            <form onSubmit={handleSubmit} className='editWarehouse__container'>
                <div className='editWarehouse__header'>
                    <span onClick={() => {history.push('/')}}className='editWarehouse__arrow'/>
                    <h1 className='editWarehouse__title'>Edit Warehouse</h1>
                </div>
                <div className='editWarehouse__sections'>
                    <div className='editWarehouse__details'>
                        <h2 className='editWarehouse__details-title'>Warehouse Details</h2>
                        <p className='editWarehouse__input-title'>Warehouse Name</p>
                        <input name='warehouseName' className='editWarehouse__input' defaultValue={warehouse.name}/>
                        <p className='editWarehouse__input-title'>Street Address</p>
                        <input name='warehouseAddress' className='editWarehouse__input' defaultValue={warehouse.address}/>
                        <p className='editWarehouse__input-title'>City</p>
                        <input name='warehouseCity' className='editWarehouse__input' defaultValue={warehouse.city}/>
                        <p className='editWarehouse__input-title'>Country</p>
                        <input name='warehouseCountry' className='editWarehouse__input' defaultValue={warehouse.country}/>
                    </div>
                    <div className='editWarehouse__sections-divider' ></div>
                    <div className='editWarehouse__details'>
                        <h2 className='editWarehouse__details-title'>Contact Details</h2>
                        <p className='editWarehouse__input-title'>Contact Name</p>
                        <input name='contactName' className='editWarehouse__input' defaultValue={warehouse.contact.name}/>
                        <p className='editWarehouse__input-title'>Position</p>
                        <input name='contactPosition' className='editWarehouse__input' defaultValue={warehouse.contact.position}/>
                        <p className='editWarehouse__input-title'>Phone Number</p>
                        <input name='contactPhone' className='editWarehouse__input' defaultValue={warehouse.contact.phone}/>
                        <p className='editWarehouse__input-title'>Email</p>
                        <input name='contactEmail' className='editWarehouse__input' defaultValue={warehouse.contact.email}/>
                    </div>
                </div>
                <div className='editWarehouse__actions'>
                    <button className='editWarehouse__actions--cancel'>Cancel</button>
                    <button type='submit' className='editWarehouse__actions--save'>Save</button>
                </div>
            </form>
        </div>
    )
}