export default(state,action)=>{
    switch(action.type){
        case 'UPDATE_RETAILER_LIST':{

            // state.retailerList.map(info =>{
            //     if( info.Item===action.payload.Item)
            //     {
            //         // info.Quantity=Math.max(0,info.Quantity-action.payload.Quantity);
            //         // return{
            //         //     ...state
            //         // }
            //         // console.log(Math.max(0,info.Quantity+action.payload.Quantity));
            //         console.log(info.quantity);
            //     }
            // });

            return{
                ...state,
                retailerList:[...state.retailerList,action.payload]
            }
        }
        default:
            return state;
    }
}