
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './Redux/store'
import Page1 from "./Components/page1";

const App = memo((props) => {

  return (
    <Provider store={store}>
    <div className="App" >
      <Page1 />
    </div>
    </Provider>
  )
})


export default App


