
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
                    const nQty = Number(action.payload.value)
                    return {...item,qty:nQty}
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
        case "REFRESH_FILTER":
            return {...state,filter:{category:'All'}}    
        case "SEARCH":
            console.log(action.payload)
            return {...state,search:action.payload}
        case "ADD_TO_CART":
            return {...state,cart:action.payload};
        case "REMOVE_FROM_CART":
            const newCart = state.cart.filter((item)=>(item.id !== action.payload))
            
            return {...state,cart:newCart}
        case "X_QTY":
            const u_cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    if(action.operation === 'DECR'){
                        if( !(item.qty<=0)){
                            const nQty =item.qty-1;
                            return {...item,qty:nQty}
                        }
                    }
                    else if(action.operation === 'INCR'){
                        return {...item,qty:item.qty+1}
                    }
                    else{
                        return item;
                    }
                }
                return item;
            }) 
            
            return {...state,cart:u_cart};

        default:
            return state;
    }
}