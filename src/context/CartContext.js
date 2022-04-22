import {createContext, useContext, useState} from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        let index = cartList.findIndex(i => i.id === item.id);

        if (index > -1){
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList ([...cartList, {...item, quantity: item.quantity + oldItem}])
        }else{
            setCartList ([...cartList, item])
        }
    }

    function addQuantity(product) {
        let index = cartList.findIndex(i => i.id === product.id);
        if (index > -1 && product.quantity < product.stock) {
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...product, quantity: oldItem + 1 }])
        }
    }

    function subtractQuantity(product) {
        let index = cartList.findIndex(i => i.id === product.id);
        if (index > -1 && product.quantity > 1) {
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...product, quantity: oldItem - 1 }])
            }
        }

    function removeFromCart(id) {
        setCartList (cartList.filter(prod => prod.id !== id))
        }

    function emptyCart() {
        setCartList ([])
        }

    function totalQuantity () {
        return cartList.reduce((acc, prod) => acc + prod.quantity, 0)
        }

    function totalPurchase () {
        return cartList.reduce ((acc, prod) => acc + prod.precioEfectivo * prod.quantity, 0)
        }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            removeFromCart, 
            emptyCart,
            totalQuantity,
            totalPurchase,
            addQuantity,
            subtractQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;