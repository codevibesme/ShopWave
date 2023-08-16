import React, { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from "../slices/cartSlice";
const CartItem = ({item}) => {
  const  INR = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrease = () => {
    const q = quantity;
    setQuantity(q+1);
    dispatch(addItem({newItem: item}));
  }

  const handleDecrease = () => {
    const q = quantity;
    setQuantity(q-1);
    dispatch(removeItem({item}));
  }

  const handleDelete = () => {
    dispatch(deleteItem({item}));
  }
  return (
    <div className='flex justify-start w-full h-fit mt-6 mb-3'>
      <div className='w-1/2 flex'>
        <img src={item.img} alt="item" className='me-3 h-44 ' />
        <div className='flex flex-col'>
          <p className='text-lg text-green-950 '>{item.name}</p>
          <p className='text-md text-green-900 mb-2 font-light'>{INR.format(item.price)}</p>
        </div>
      </div>
      <div className="w-1/4 flex" >
        <div className='border border-green-950 w-fit h-10 rounded-md flex me-3'>
          {quantity > 1 && <button className='inline w-10 h-full text-center' onClick={handleDecrease}>-</button>}
          {quantity === 1 && <button className='inline w-10 h-full text-center cursor-not-allowed' disabled>-</button> }
          <input className='inline w-10 text-center text-green-950 h-full' value={quantity}/>
          {quantity<5 && <button className='inline w-10 text-center h-full' onClick={handleIncrease}>+</button>}
          {quantity>=5 && <button className='inline w-10 text-center h-full cursor-not-allowed'>+</button>}
        </div>
        <div className='w-fit h-fit text-xl mt-4 text-green-950'>
          <button onClick={handleDelete}><IoTrashOutline /></button>
        </div>
      </div>
      <h6 className='w-1/4 text-green-950 text-lg'>{INR.format(quantity*item.price)}</h6>
    </div>
  );
}

export default CartItem;