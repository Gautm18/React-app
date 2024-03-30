import Accordian from "./Accordian"
import { addItem, clearCart } from "../utils/cartSlice"
import { useDispatch, useSelector } from "react-redux"


const Cart = () => {
    const dispatch = useDispatch()

    const clearCartItemsCart =()=> {
        dispatch(clearCart())
    }

    const addedItem = useSelector((store)=> store.cart.items);
    console.log(addedItem)


    return (
       <div className="text-center m-4 p-4"> 
       <h1 className="text-2xl font-bold">Cart</h1>

       <button className="border-gray-200 border-b-2" onClick={() => clearCartItemsCart()}>Clear Cart</button>
       <div className="w-6/12 m-auto">
        <Accordian items={addedItem} showAddButton={false} />
       </div>
       </div>
    )
}

export default Cart