import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66670073a2f8516ff7a5dfd7.mockapi.io";

 export const fetchContacts = createAsyncThunk(
   "contacts/fetchAll",
   async (_, thunkAPI) => {
     try {
       const response = await axios.get("/contacts");
       return response.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );

// export default fetchContacts;