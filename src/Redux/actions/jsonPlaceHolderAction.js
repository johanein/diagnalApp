
import {
    SAVE_JSON_PLACEHOLDER
} from '../constants'
import page1 from '../JsonFolder/page1';

// import network from './network'

 const jsonPlaceholderActionCreator = (payload) => ({
    type:SAVE_JSON_PLACEHOLDER,
    payload
})

// const netWorkFunction = async ({url}) => {
//     const response = await network.get(url)
// return response
// }

 const jsonPlaceholderGetReq = () =>{
    return (dispatch)=>{
        // const payload = await page1.json()
        console.log('page1', page1)
        dispatch(jsonPlaceholderActionCreator(page1))
    }  
}




export {
    jsonPlaceholderGetReq,
    jsonPlaceholderActionCreator
}