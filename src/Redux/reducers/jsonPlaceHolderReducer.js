import {
  SAVE_JSON_PLACEHOLDER,
  CLEAR_JSON_PLACEHOLDER
  } from '../constants'
  
  const initialState = {
    jsonAxiosGetResult:[],
    pageNoReceived:0,
    nextPageTocall:1,
    contents:[]
  }
  
  export default function jsonPlaceHolderReducer(state = initialState,action) {
    const {type,payload} = action || {}
    switch (type) {
        case SAVE_JSON_PLACEHOLDER:{
          let {contents} = state
          let {page:{'page-num-requested':pageNoReceived, 'content-items':{content=[]}={}}={}}= payload
           contents = [...contents,...content]
          pageNoReceived = parseInt(pageNoReceived)
          const nextPageTocall = pageNoReceived + 1
      console.log('nextPageTocall : ', nextPageTocall)

        return {
          ...state,
          jsonAxiosGetResult: payload,
          pageNoReceived,
          nextPageTocall,
          contents
        }
      }
        case CLEAR_JSON_PLACEHOLDER:{
        return {
          ...state,
          jsonAxiosGetResult: []
        }
      }

      default:
        return state
    }
  }
  