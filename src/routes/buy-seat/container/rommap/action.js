import { constants } from './constants'
const { GETSEATACTION,CHECKSEATACTION,CONFERENCESEATCHECKEDACTION,CONCERTHALLSEATCHECKEDACTION,AUDITORIUMSEATCHECKEDACTION,CHANGEROOMTYPEACTION,GETROOMMAPACTION } = constants

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
export const conferenceseatcheckedAction = (seatchecked)=>{
    return{
        type:CONFERENCESEATCHECKEDACTION,
        payload:seatchecked
    }
}
export const concerthallseatcheckedAction = (seatchecked)=>{
    return{
        type:CONCERTHALLSEATCHECKEDACTION,
        payload:seatchecked
    }
}
export const auditoriumseatcheckedAction = (seatchecked)=>{
    return{
        type:AUDITORIUMSEATCHECKEDACTION,
        payload:seatchecked
    }
}
export const changeroomtypeAction =(number,roomnumber)=>{
    let page = {
        number:number,
        roomnumber:roomnumber
    }
    return{
        type:CHANGEROOMTYPEACTION,
        payload:page
    }
}
export const getroommapAction = (i)=>{
    return(dispatch)=>{
        fetch('https://convention-center-261342.herokuapp.com/api/seat/status/'+i)
        .then((data)=>{data.json().then((data)=>{
            dispatch({
                type:GETROOMMAPACTION,
                payload:data,
            }) 
        })
        }).catch((error)=>{
            type:'ERROR'
            payload:error
        })
            }
}
