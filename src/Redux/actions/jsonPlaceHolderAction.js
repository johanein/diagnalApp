
import {
    SAVE_JSON_PLACEHOLDER
} from '../constants'

import network from './network'

 const jsonPlaceholderActionCreator = (payload) => ({
    type:SAVE_JSON_PLACEHOLDER,
    payload
})

const netWorkFunction = async ({url}) => {
    const response = await network.get(url)
return response
}

 const jsonPlaceholderGetReq = () =>{
    return async (dispatch)=>{
        const payload =  await netWorkFunction({url:'API/CONTENTLISTINGPAGE-PAGE1.json'})
        console.log('payload', payload)
        const {data} = payload
        dispatch(jsonPlaceholderActionCreator(data))
    }  
}




export {
    jsonPlaceholderGetReq,
    jsonPlaceholderActionCreator
}