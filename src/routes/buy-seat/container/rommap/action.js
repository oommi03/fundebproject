import { constants } from './constants'
const { GETSEATACTION,CHECKSEATACTION } = constants

export const getseatAction = (seat) =>{
    return{
        type:GETSEATACTION,
        payload:seat
   
    }
}
export const checkseatAction = (seatchecked) =>{
    return{
        type:CHECKSEATACTION,
        payload:seatchecked
    }
}