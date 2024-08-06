import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage =() =>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const initialState ={
    Basketproducts: getBasketFromStorage(),
    drawer: false,
    total:0
}

const writeFromBasketToStorage =(basket)=>{
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket:(state,action)=>{
            const findProduct = state.Basketproducts && state.Basketproducts.find((product)=> product.id === action.payload.id)
            if(findProduct){
                // eger daha onceden eklenibse
                const extractedProducts= state.Basketproducts.filter((product)=> product.id !== action.payload.id)              
                findProduct.count += action.payload.count 
                state.Basketproducts = [...extractedProducts,findProduct]
                writeFromBasketToStorage(state.Basketproducts)
        }else{
            state.Basketproducts = [...state.Basketproducts , action.payload]
            writeFromBasketToStorage(state.Basketproducts)
         }
    },
    setDrawer : (state)=>{
        state.drawer = !state.drawer
    },
    calculateBasket: (state)=>{
        state.total =0 /* state-in degeri degismiyor aslinda cunki drawer-in qiymeti deyisir ve deyisende total deyismir
        amma bizde total yalniz refresh page olanda deyisir onun ucun funksiyaya basladiqda deyeri 0 olaraq verdik. */
        state.Basketproducts && state.Basketproducts.map((product)=>{
            state.total += product.price * product.count
        })
    },
    deleteProduct: (state, action)=>{
       state.Basketproducts =state.Basketproducts.filter((product)=> product.id !== action.payload.id)
       writeFromBasketToStorage(state.Basketproducts)
    }
}
})

export const {addToBasket ,setDrawer ,calculateBasket,deleteProduct } = basketSlice.actions
export default basketSlice.reducer