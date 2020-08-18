import React, { memo, useEffect } from 'react'
import { jsonPlaceholderGetReq } from '../Redux/actions/jsonPlaceHolderAction'

import {  useSelector, useDispatch } from 'react-redux'

const Page1 = memo(function Page1(props) {
    const dispatch = useDispatch()
    const jsonAxiosGetResult = useSelector(state => state.jsonPlaceHolderReducer.jsonAxiosGetResult) 
    const {page:{title}={}} = jsonAxiosGetResult
  
    useEffect(() => {
      dispatch(jsonPlaceholderGetReq())
    }, [])

    return (
        <>
           Hello !
      {title} 
        </>
    )
})


export default Page1
