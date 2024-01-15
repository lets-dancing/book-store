// Этот файл настраивает хранилище Redux, используя Redux Toolkit. Он импортирует и объединяет редьюсеры из booksSlice, searchSlice и cartSlice для создания основного редьюсера.
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