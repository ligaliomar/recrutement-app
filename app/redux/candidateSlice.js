import { createSlice } from "@reduxjs/toolkit";

const candidateSlice=createSlice({
    name:'candidates',
    initialState:{
        //Liste des Candidat 
        list:[],
        //Candidat selectionne
        selected:null,

    },
    reducers:{
        //Ajouter un candidate 
        addCandidate:(state,action)=>{
            state.list.push({
                id:Date.now(),
                ...action.payload
            })
        },
       
    },
})

export const {addCandidate,selectCandidate}= candidateSlice.actions
export default candidateSlice.reducer 