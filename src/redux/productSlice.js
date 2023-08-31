import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name : 'product',
    initialState:{
        list:[]
    },
    reducers:{
        GET_PRODUCT:(state,action)=>{
            state.list = action.payload;
        }
    }
    });

    export const getProductDB = (data) =>async (dispatch) =>{
        try{
            const response =
                await axios.get("http://localhost:8080/product/list");
            dispatch(GET_PRODUCT(response.data));
        }catch(err){
            throw new Error(err);
        }
    };

    export const {GET_PRODUCT} = productSlice.actions;