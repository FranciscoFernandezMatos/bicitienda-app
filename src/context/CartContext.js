import {createContext, useContext, useState} from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        let index = cartList.findIndex(i => i.id === item.id);

        if (index > -1){
            const oldItem = cartList [index].quantity
            cartList.splice(index, 1)
            setCartList ([...cartList, {...item, quantity: item.quantity + oldItem}])
        }else{
            setCartList ([...cartList, item])
        }
    }

    function emptyCart() {
        setCartList ([])
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider 