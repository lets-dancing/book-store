import { configureStore } from "@reduxjs/toolkit";
import books from "./booksSlice";
import search from "./searchSlice";
import cart from "./cartSlice";

export const store = configureStore({
    reducer: {
        books,
        search,
        cart
    }
})