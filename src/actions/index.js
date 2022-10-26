
export const incNumber = (num) =>{
return {
    type:"INCR",
    payload:num
 }
}
export const decNumber = () =>{
    return {
        type:"DECR"
     }
}
export const multNumber = (num) =>{
    return {
        type:"MULT",
        payload:num
     }
    }
export const divNumber = () =>{
        return {
            type:"DIVIDE"
         }
    }
