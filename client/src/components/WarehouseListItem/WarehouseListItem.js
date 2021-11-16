import './WarehouseListItem.scss';

export default function WarehouseListItem(props) {

    return (
        <div className='warehouse-item'>
            <div className='warehouse-item__left'>
                <div className='warehouse-item__name'>
                    <p className='warehouse-item__title'>WAREHOUSE</p>
                    <p className='warehouse-item__warehouse'>
                        {props.warehouse.name}
                        <span className='warehouse-item__warehouse-icon'/>
                    </p>
                </div>
                <div className='warehouse-item__section'>
                    <p className='warehouse-item__title'>ADDRESS</p>
                    <p className='warehouse-item__text'>{`${props.warehouse.address}, ${props.warehouse.city}, ${props.warehouse.country}`}</p>
                </div>
            </div>
            <div className='warehouse-item__right'>
                <div className='warehouse-item__section'>
                    <p className='warehouse-item__title'>CONTACT NAME</p>
                    <p className='warehouse-item__text'>{props.warehouse.contact.name}</p>
                </div>
                <div className='warehouse-item__section'>
                    <p className='warehouse-item__title'>CONTACT INFORMATION</p>
                    <p className='warehouse-item__text'>{`${props.warehouse.contact.phone} ${props.warehouse.contact.email}`}</p>
                </div>
            </div>
            <div className='warehouse-item__buttons'>
                <div className='warehouse-item__delete'/>
                <div className='warehouse-item__edit'/>
            </div>
        </div>
    );
}