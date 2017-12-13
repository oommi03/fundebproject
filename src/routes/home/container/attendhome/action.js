import { constants } from './constanst'
const { GETCATEGORYROOMACTION } = constants

export const getcategoryroomAction = () =>{
    return(dispatch)=>{
        fetch('https://convention-center-261342.herokuapp.com/api/roomType')
        .then((data)=>{data.json().then((data)=>{
            dispatch({
                type:GETCATEGORYROOMACTION,
                payload:data,
            }) 
        })
        }).catch((error)=>{
            type:'ERROR'
            payload:error
        })
            }
}