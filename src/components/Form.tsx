import {useState} from "react";


function Form() {
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState()
    const [payment, setPayment] = useState()
    const [deliveryType, setDeliveryType] = useState()

    function nameOnChange(event: any) {
        setName(event.target.value)
    }

    function quantityOnChange(event: any) {
        setQuantity(event.target.value)
    }

    function commentOnChange(event: any) {
        setComment(event.target.value)
    }

    function paymentOnChange(event: any) {
        setPayment(event.target.value)
    }

    function deliveryTypeOnChange(event: any) {
        setDeliveryType(event.target.value)
    }

    return (
        <div>
            <input type='text' onChange={nameOnChange}/>
            <p>Name: {name} </p>
            <input type='number' onChange={quantityOnChange}/>
            <p>Quantity: {quantity} </p>
            <textarea onChange={commentOnChange}/>
            <p>Comment: {comment} </p>
            <select onChange={paymentOnChange} value={comment}>
                <option>Please enter a payment</option>
                <option>Visa</option>
                <option>Money</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type='radio' value='PICK_UP' checked={deliveryType === 'PICKUP'}
                       onChange={deliveryTypeOnChange}/> Pickup
            </label><br/>
            <label>
                <input type='radio' value='DELIVERY' checked={deliveryType === 'DELIVERY'}
                       onChange={deliveryTypeOnChange}/> Delivery
            </label>
            <p>Delivery type: {deliveryType}</p>
        </div>
    );
}

export default Form;
