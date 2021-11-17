import './Warehouses.scss';
import WarehouseListItem from '../../components/WarehouseListItem/WarehouseListItem';
import { useState, useEffect } from 'react';
import axios from 'axios'
const apiUrl = 'http://localhost:8080'

export default function Warehouses() {
    const [warehouses, setWarehouses] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/warehouses`)
        .then((response) => {
            console.log(response)
            setWarehouses(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div className='warehouses'>
            <div className='warehouses__container'>
                <div className='warehouses__header'>
                    <h1 className='warehouses__title'>Warehouses</h1>
                    <div className='warehouses__header-actions'>
                        <input className='warehouses__search' placeholder='Search...'/>
                        <button className='warehouses__button'>+ Add New Warehouse</button>
                    </div>
                </div>
                {warehouses.map((warehouse, index) => (
                    <WarehouseListItem key={index} warehouse={warehouse}/>
                ))}
            </div>
        </div>
    );
}
