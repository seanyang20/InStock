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
    <div>
        <p>
     EDIT
     </p>
    </div>
  );
}