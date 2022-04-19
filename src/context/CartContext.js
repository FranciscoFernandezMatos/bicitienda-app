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
        let productExist = cartList.find((item) => item.id === product.id);
        setCartList (
            cartList.map((item) => item.id === product.id 
                ? {...productExist, quantity: productExist.quantity + 1}
                : item
            )
        );
    }

    function subtractQuantity(product) {
        let productExist = cartList.find((item) => item.id === product.id);
        if (productExist.quantity > 1) {
            setCartList (
                cartList.map((item) => item.id === product.id 
                    ? {...productExist, quantity: productExist.quantity - 1}
                    : item
                    )
                );
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