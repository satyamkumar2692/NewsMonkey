import React, { useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './components/Footer'

const App=()=> {
  const [mode, setMode] = useState('light');
  const [emode, setEmode] = useState('0');
  const [country2, setcountry] = useState("📍")
 
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
      <NavBar toggle={toggleFunc} toggle2={toggleFunc2} country2={country2} setcountry={setcountry} />
      <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<News mode={mode} emode={emode} key="general" category="general" heading=""country="in" q="" setcountry={setcountry} />}></Route>
        <Route  exact path="/us" element={<News mode={mode} emode={emode} key="us" category="general" heading="US"country="us" q="" setcountry={setcountry} />}></Route>
        <Route  exact path="/ca" element={<News mode={mode} emode={emode} key="ca" category="general" heading="CA"country="ca" q="" setcountry={setcountry} />}></Route>
        <Route  exact path="/ru" element={<News mode={mode} emode={emode} key="ru" category="general" heading="RU"country="ru" q="" setcountry={setcountry} />}></Route>
        <Route   path="/business" element={<News mode={mode} emode={emode} key="business" category="business" heading="Business"country="in" q=""setcountry={setcountry} />}></Route>
        <Route   path="/entertainment" element={<News mode={mode}emode={emode}key="entertainment" heading="Entertainment"category="entertainment" country="in" q=""setcountry={setcountry} />}></Route>
        <Route   path="/health" element={<News mode={mode} emode={emode} key="health" category="health" heading="Health"country="in" q=""setcountry={setcountry} />}></Route>
        <Route   path="/science" element={<News  mode={mode}emode={emode}key="science" category="science" heading="Science"country="in" q=""setcountry={setcountry} />}></Route>
        <Route   path="/sports" element={<News  mode={mode} emode={emode} key="sports" category="sports" heading="Sports"country="in" q=""setcountry={setcountry} />}></Route>
        <Route   path="/technology" element={<News mode={mode} emode={emode} key="technology" category="technology"heading="Technology"country="in" q=""setcountry={setcountry} />}></Route>
      </Routes>
    </BrowserRouter>
   <Footer/>
      </>
    )
  }

  export default App;
