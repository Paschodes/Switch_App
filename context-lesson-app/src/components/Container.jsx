import React, { useContext } from 'react'
import Content from './Content';
import DarkModeContext from './DarkModeContext';
import LightSwitch from './LightSwitch';

const Container = () => {

    const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
        <Content />
        <LightSwitch />
    </div>
  )
}

export default Container;