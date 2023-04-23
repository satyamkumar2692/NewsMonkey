import React, { useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const App=()=> {
  const [mode, setMode] = useState('light');
  const [emode, setEmode] = useState('0');
  const toggleFunc = () => {
    if (mode === 'light' ) {
      setMode('dark');
      // 808080
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
    }
    else if(mode === 'dark' ) {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  const toggleFunc2 = () => {
    if (emode === '0' ) {
      setEmode('1');
    }
    else if(emode === '1' ) {
      setEmode('0');
      
  }
}
    return (
      <>
      <NavBar toggle={toggleFunc} toggle2={toggleFunc2}/>
      <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<News mode={mode} emode={emode} key="general" category="general" heading=""country="in" q="" />}></Route>
        <Route   path="/business" element={<News mode={mode} emode={emode} key="business" category="business" heading="Business"country="in" q=""/>}></Route>
        <Route   path="/entertainment" element={<News mode={mode}emode={emode}key="entertainment" heading="Entertainment"category="entertainment" country="in" q=""/>}></Route>
        <Route   path="/health" element={<News mode={mode} emode={emode} key="health" category="health" heading="Health"country="in" q=""/>}></Route>
        <Route   path="/science" element={<News  mode={mode}emode={emode}key="science" category="science" heading="Science"country="in" q=""/>}></Route>
        <Route   path="/sports" element={<News  mode={mode} emode={emode} key="sports" category="sports" heading="Sports"country="in" q=""/>}></Route>
        <Route   path="/technology" element={<News mode={mode} emode={emode} key="technology" category="technology"heading="Technology"country="in" q=""/>}></Route>
      </Routes>
    </BrowserRouter>
      </>
    )
  }

  export default App;
