
import React, { memo,lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './Redux/store'
import AppBarComp from './Components/appBar'
const Page1 = lazy(()=>import('./Components/page1'));

const App = memo((props) => {
  window.store = store

  return (
    <Provider store={store}>
    <div className="App" >
    <AppBarComp />
    <Suspense fallback={<div>Loading.....</div>}>
      <Page1 />
      </Suspense>
    </div>
    </Provider>
  )
})


export default App


