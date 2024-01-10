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
            image: ""
        }
    },
    reducers: {
        filteredGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        showDetails: (state, action) => {
            state.selectedBook = action.payload.book;
            state.selectedBook.image = action.payload.image;
        }
    }
})

export const { filteredGenre, showDetails } = booksSlice.actions;
export const getSelectGenre = (state) => state.books.selectedGenre;
export const getSelectedBook = (state) => state.books.selectedBook;
export default booksSlice.reducer;
