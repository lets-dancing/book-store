import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.bookId === action.payload.book.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += action.payload.quantity;
                state.cartItems[itemIndex].totalPrice += action.payload.book.price * action.payload.quantity;
            }

            else {
                state.cartItems.push({
                    bookId: action.payload.book.id,
                    bookName: action.payload.book.name,
                    bookAuthor: action.payload.book.author,
                    bookImage: action.payload.book.img, 
                    bookPrice: action.payload.book.price, 
                    bookGenre: action.payload.book.genre, 
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.book.price * action.payload.quantity
                })
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.bookId !== action.payload.bookId);
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.bookId === action.payload.bookId);
            state.cartItems[itemIndex].quantity++;
            state.cartItems[itemIndex].totalPrice += state.cartItems[itemIndex].bookPrice;
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.bookId === action.payload.bookId);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity--;
                state.cartItems[itemIndex].totalPrice -= state.cartItems[itemIndex].bookPrice;
            }
            else {
                state.cartItems = state.cartItems.filter(item => item.bookId !== action.payload.bookId);
            }
        }
    }
})

export const getTotalPrice = (state) => {
    return state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0)
}

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer