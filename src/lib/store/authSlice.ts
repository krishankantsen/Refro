import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type User ={
  id: number;
  email: string;
  name: string ;
  companyName: string;
  role: string;
  jobRole: string;
  expYear: number;
  profilePic: string;
}|null
type Portfolio ={
  userId: number;
  link: string;
  porPic: string ;
}|null
export interface IAuthState {
  token: string|null;
  user: User;
  portfolio: Portfolio;
}

const initialState: IAuthState = {
  token: '',
  user:null,
  portfolio:null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenState: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserState: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLogout:(state)=>{
      state.user =null
      state.token = null;
    },
    setPortfolioState:(state,action:PayloadAction<Portfolio>)=>{
      state.portfolio=action.payload
    }
  },
});

export const { setTokenState, setUserState ,setLogout,setPortfolioState} = authSlice.actions;
export const authReducer = authSlice.reducer;
