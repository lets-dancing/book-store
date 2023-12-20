import { createSlice } from "@reduxjs/toolkit";


export const booksSlice = createSlice ({
    name: 'books',
    initialState: {
        selectedGenre: "Все категории",
    },
    reducers: {
        filteredGenre: (state, action) => {
            state.selectedGenre = action.payload;
        }
    }
})

export const { filteredGenre } = booksSlice.actions;
export const getSelectGenre = (state) => state.books.selectedGenre;
export default booksSlice.reducer;
