import { useState } from 'react'
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import Home from './screens/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar } from './components/Navbar';


export const ThemeContext =  createContext(null);
function App() {
 const [theme, setTheme] = useState('dark');
 const [t, i18n] = useTranslation("global");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    console.log(theme, "el tema")
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='app' id={theme}>
        <div className='switch'>
          <div className='div-logo'>
          {theme === 'light' ?  <img  src='/LogoL.png'  alt='imagen Logo' /> :<img  src='/logoD.png'  alt='imagen Logo' /> }
              <NavBar/>
            </div>
            <div className='div-switch'>
            <label>{theme === 'light' ? "Blanco" : "Tinto"} </label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                <div className='div-translate'>
                  <button className='translateES' onClick={()=> i18n.changeLanguage("es")}>ES</button>
                  <button className='translateEN' onClick={()=> i18n.changeLanguage("en")}>EN</button>
                </div>
            </div>
            </div>
        <section className='sectionAPP'>
          <Home/>
        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
