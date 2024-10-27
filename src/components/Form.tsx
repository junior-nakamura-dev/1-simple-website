import {useState} from "react";


function Form() {
    const [order, setOrder] = useState({
        name: '',
        quantity: 0,
        comment: '',
        payment: '',
        deliveryType: 'PICKUP'
    })

    function nameOnChange(event: any) {
        setOrder(o => ({...o, name: event.target.value}))
    }

    function quantityOnChange(event: any) {
        setOrder(o => ({...o, quantity: event.target.value}))
    }

    function commentOnChange(event: any) {
        setOrder(o => ({...o, comment: event.target.value}))
    }

    function paymentOnChange(event: any) {
        setOrder(o => ({...o, payment: event.target.value}))
    }

    function deliveryTypeOnChange(event: any) {
        setOrder(o => ({...o, deliveryType: event.target.value}))
    }

    return (
        <div>
            <input type='text' onChange={nameOnChange}/>
            <p>Name: {order.name} </p>
            <input type='number' onChange={quantityOnChange}/>
            <p>Quantity: {order.quantity} </p>
            <textarea onChange={commentOnChange}/>
            <p>Comment: {order.comment} </p>
            <select onChange={paymentOnChange} value={order.comment}>
                <option>Please enter a payment</option>
                <option>Visa</option>
                <option>Money</option>
            </select>
            <p>Payment: {order.payment}</p>
            <label>
                <input type='radio' value='PICK_UP' checked={order.deliveryType === 'PICKUP'}
                       onChange={deliveryTypeOnChange}/> Pickup
            </label><br/>
            <label>
                <input type='radio' value='DELIVERY' checked={order.deliveryType === 'DELIVERY'}
                       onChange={deliveryTypeOnChange}/> Delivery
            </label>
            <p>Delivery type: {order.deliveryType}</p>
        </div>
    );
}

export default Form;
