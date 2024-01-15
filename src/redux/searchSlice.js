// Этот код создает срез Redux с помощью @reduxjs/toolkit для управления состоянием поиска.
// В initialState определено свойство searchTerm, которое хранит текущий поисковый запрос.
// Редьюсер setSearchTerm позволяет обновлять searchTerm на основе действия.
// Также экспортируются селектор getSelectSearchTerm для доступа к searchTerm и действие setSearchTerm.

import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const getSelectSearchTerm = (state) => state.search.searchTerm;
export const { setSearchTerm } = searchSlice.actions;