export default(state,action)=>{
    switch(action.type){
        case 'UPDATE_RETAILER_LIST':{

            return{
                ...state,
                retailerList:[...state.retailerList,action.payload]
            }
        }
        default:
            return state;
    }
}