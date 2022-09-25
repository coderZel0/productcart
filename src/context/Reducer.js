
export const Reducer = (state,action)=>{
    switch(action.type){
        case "INIT":
            const nlist = action.payload.map((item)=>({...item,instock:true,qty:1,inCart:false}))
            const categories = action.payload.reduce((prev,item)=>{
                if(!prev.includes(item.category)){
                    prev.push(item.category)
                }
                return prev;
              },[])
            return {...state,allProducts:nlist,products:nlist,categories}
        case "QTY":
            const nproducts = state.products.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,qty:action.payload.value}
                }
                return item
            })
            return {...state,products:nproducts}    
        case "IN_CART":
            const n_products = state.products.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,inCart:!item.inCart}
                }
                return item
            })
            return {...state,products:n_products} 
        case "FILTER":
            if(action.payload){
                /*const n_products = state.products.map((item)=>{
                    if(item.category === action.payload){
                        return item;
                    }
                })*/
               
                return {...state,filter:{category:action.payload}}
            }
            return state;
        case "SEARCH":
            console.log(action.payload)
            return {...state,search:action.payload}
        case "ADD_TO_CART":
            return {...state,cart:action.payload};
        default:
            return state;
    }
}