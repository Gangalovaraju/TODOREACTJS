import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export default store;
