import { useState } from 'react'
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import Home from './screens/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';


export const ThemeContext =  createContext(null);
function App() {
 const [theme, setTheme] = useState('dark');
 const [t, i18n] = useTranslation("global");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='app' id={theme}>
        <div className='switch'>
          <label>{theme === 'light' ? "The Force" : "Dark Side"} </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        <div className='div-translate'>
          <button className='translateES' onClick={()=> i18n.changeLanguage("es")}>ES</button>
          <button className='translateEN' onClick={()=> i18n.changeLanguage("en")}>EN</button>
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
