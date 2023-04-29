import React, { useState } from 'react'
import Container from './Container';
import DarkModeContext from './DarkModeContext';

const DarkModeApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  //function for changinging de darkmode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      {/* passing in de darkmode value and func for changing dark mode into de parent value */}
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        <Container />
      </DarkModeContext.Provider>
    </div>
  )
}

export default DarkModeApp;