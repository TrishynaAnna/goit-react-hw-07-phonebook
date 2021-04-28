import { createReducer } from "@reduxjs/toolkit"
import { getFilterValue, addContactsSuccess, getContactsSuccess, removeContactsSuccess } from "./contactsAction";

const contactsReducer = createReducer(
    { items: [], filter: "" },
    {
        [getContactsSuccess]: (state, action) => ({ items: action.payload }),
        [addContactsSuccess]: (state, action) => ({
            ...state,
            items: [...state.items, action.payload],
        }),
        [removeContactsSuccess]: (state, action) => ({
            ...state,
            items: [
                ...state.items.filter((item) => {
                    return item.id !== action.payload;
                }),
            ],
        }),
        [getFilterValue]: (state, action) => ({ ...state, filter: action.payload }),
    }
);

export default contactsReducer;
