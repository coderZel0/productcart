import React,{createContext,useContext,useReducer} from 'react';
import {Reducer} from './Reducer'

const context = createContext();

export const Context = ({children})=>{
    const products = [...Array(20)].map((item,idx)=>({
        name:`product${idx}`

    }));

    const [state,dispatch] = useReducer(Reducer,{allProducts:products,products,cart:[],filter:{category:'All'},search:'',categories:[]});


    return <context.Provider value={{state,dispatch}}>
        {children}
    </context.Provider>
}


export const ProductsContext = ()=>{
    return  useContext(context);
}







