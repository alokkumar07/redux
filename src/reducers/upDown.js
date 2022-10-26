const initialState=0;
const changeTheNumber =(state=initialState,action)=>{
    switch(action.type){
        case "INCR" : return state + action.payload;
        case "DECR" : return state -1;
         default: return state;
    }
}
 export default changeTheNumber;