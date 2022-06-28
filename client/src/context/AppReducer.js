export default(state,action)=>{
    switch(action.type){
        case 'UPDATE_RETAILER_LIST':{
            const newretailerList=[];
            let togg=0;
            state.retailerList.map( (element)=>{

                if( element.name===action.payload.name){
                    const newquantity=parseInt(element.quantity)+parseInt(action.payload.quantity);
                    if(newquantity>0)
                        newretailerList.push( {"name":element.name,"quantity":newquantity});
                    togg=1;
                }
                else{
                    newretailerList.push(element);
                }
            });
            if(!togg && parseInt(action.payload.quantity)>0)
                newretailerList.push(action.payload);

            return{
                ...state,
                retailerList:newretailerList
            }
        }
        case 'GET_RETAILERS':{

            const present_retailer=[];
            for( const retailer of action.payload){
                present_retailer.push({"retailerName":retailer.retailer_name,"phone":retailer.contact});
            }
            return{
                ...state,
                retailers:present_retailer
            }  
        }
        case 'GET_POPULAR_RETAILERS':{
            const PopularRetailers=[];
            for( const retailer of action.payload){
                PopularRetailers.push({"Name":retailer.Name});
            }
            return{
                ...state,
                popularretail:PopularRetailers
            }
        }
        case 'GET_POPULAR_ITEMS':{
            const PopularItems=[];
            for( const item of action.payload){
                PopularItems.push({"Item":item.Item});
            }
            return{
                ...state,
                popularitem:PopularItems
            }
            
        }
        case 'GET_RETAILER_LIST':{
            return{
                ...state,
                retailerList:action.payload.inventory
            }
        }
        default:
            return state;
    }
}