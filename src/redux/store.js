import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import statusReducer from "./status/statusReducer";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        status: statusReducer,
    },
    middleware: [...getDefaultMiddleware()],
});

export default store;
