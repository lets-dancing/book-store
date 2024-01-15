// Этот код создает срез состояния для управления книгами в приложении Redux.
// В нем определены два действия: `filteredGenre` для фильтрации жанров и `showDetails` для отображения деталей выбранной книги.
// Срез также предоставляет селекторы для получения выбранного жанра и выбранной книги из состояния.

import { createSlice } from "@reduxjs/toolkit";


export const booksSlice = createSlice ({
    name: 'books',
    initialState: {
        selectedGenre: "Все категории",
        selectedBook: {
            id: 0,
            title: "",
            author: "",
            genre: "",
            description: "",
            price: 0,
            img: ""
        }
    },
    reducers: {
        filteredGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        showDetails: (state, action) => {
            state.selectedBook = action.payload;
        }
    }
})

export const { filteredGenre, showDetails } = booksSlice.actions;
export const getSelectGenre = (state) => state.books.selectedGenre;
export const getSelectedBook = (state) => state.books.selectedBook;
export default booksSlice.reducer;
