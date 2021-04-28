import { createReducer } from "@reduxjs/toolkit";
import { statusInOn, statusExist } from "../status/statusActions";

const statusReducer = createReducer(
    { inOn: false, exist: false },
    {
        [statusInOn]: (state, action) => ({
            ...state,
            inOn: action.payload,
        }),
        [statusExist]: (state, action) => ({
            ...state,
            exist: action.payload,
        }),
    }
);

export default statusReducer;
