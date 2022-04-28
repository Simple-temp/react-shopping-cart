export const reducer = (state,action) =>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            items : state.items.filter((curElement)=>{
                return curElement.id !== action.payload
            })
        }
    }
    return state
}