import { createSlice } from '@reduxjs/toolkit'
const rootSlice=createSlice({
    name:"root",
    initialState:{
        loading:false,
        portfolioData:null
    },
    reducers:{
        ShowLoading:(state,action) =>{
            state.loading=true
        },
        HideLoading:(state,action) => {
            state.loading=false;
        },
        setPortfolioData:(state,action) => {
                state.portfolioData=action.payload  //action .payload contains data we recieve
        }
    }
})
console.log(rootSlice.actions)
export default rootSlice
export const {ShowLoading,HideLoading,setPortfolioData}=rootSlice.actions //it contains all reducers