export default(state,action)=>{
    switch(action.type){
        case 'UPDATE_RETAILER_LIST':{
            const newretailerList=[];
            let togg=0;
            state.retailerList.map( (element)=>{

                if( element.Item===action.payload.Item){
                    const newquantity=parseInt(element.Quantity)+parseInt(action.payload.Quantity);
                    if(newquantity>0)
                        newretailerList.push( {"Item":element.Item,"Quantity":newquantity});
                    togg=1;
                }
                else{
                    newretailerList.push(element);
                }
            });
            if(!togg && parseInt(action.payload.Quantity)>0)
                newretailerList.push(action.payload);

            return{
                ...state,
                retailerList:newretailerList
            }
        }
        case 'GET_RETAILERS':{

            const present_retailer=[];
            for( const retailer of action.payload){
                present_retailer.push({"retailerName":retailer.retailer_name,"Phone":retailer.contact});
            }
            return{
                ...state,
                retailers:present_retailer
            }
            
        }
        default:
            return state;
    }
}