import React, { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, deleteItem } from "../slices/cartSlice";
const CartItem = ({item}) => {
  const  INR = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrease = async() => {
    try{
      const response = await fetch("https://shopwave-xmkp.onrender.com/cart/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({user_id: user._id, product: item}),
      });
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.log({error: err.message});
    }
    const q = quantity;
    setQuantity(q+1);
    dispatch(addItem({newItem: item}));
  }

  const handleDecrease = async () => {
    try{
      const response = await fetch("https://shopwave-xmkp.onrender.com/cart/remove", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({user_id: user._id, prod_id: item.id})
      });
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.log({error: err.message});
    }
    const q = quantity;
    setQuantity(q-1);
    dispatch(removeItem({item}));
  }

  const handleDelete = async () => {
    try{
      const response = await fetch("https://shopwave-xmkp.onrender.com/cart/delete", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({user_id: user._id, prod_id: item.id})
      });
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.log({error: err.message});
    }
    dispatch(deleteItem({item}));
  }
  return (
    <div className='flex justify-start w-full h-fit mt-6 mb-3'>
      <div className='w-1/2 flex'>
        <img src={item.thumbnail} alt="item" className='me-8 h-44 ' />
        <div className='flex flex-col'>
          <p className='text-lg text-green-950 '>{item.name}</p>
          <p className='text-md text-green-900 mb-2 font-light'>{INR.format(item.price)}</p>
          <p className='text-md text-green-900 mb-2 font-light'>Size: {item.size}</p>
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