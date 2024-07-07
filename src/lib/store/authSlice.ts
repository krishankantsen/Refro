import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
 interface User{
    id      :number ,
    email    :string  ,
    name     :string|null,
    password :string,
    companyName: string,
    role     :string,
    jobRole :string,
    expYear :number,
    profilePic :string,
 }
export interface IAuthState {
  token: string;
  user:User
}

const initialState: IAuthState = {
  token: "",
  user:{
    id      :0,
    email    :""  ,
    name     :"",
    password :"",
    companyName: "",
    role     :"",
    jobRole :"",
    expYear :0,
    profilePic :"",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokenState: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserState: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setTokenState,setUserState } = authSlice.actions;
export const authReducer = authSlice.reducer;