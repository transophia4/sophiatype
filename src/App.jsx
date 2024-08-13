import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import './App.css'
import { COLORS } from './colors.js'
import SpeedTypingGame from './SpeedTypingGame.jsx';

function App() {
  const [colorTheme, changeColorTheme] = useState(COLORS.sophia);

  useEffect(() => {
    const savedColor = localStorage.getItem('colorTheme');
    if (savedColor) {
      changeColorTheme(savedColor);
    }
  }, []);

  const handleColorChange = (newColor) => {
    changeColorTheme(newColor);
    localStorage.setItem('colorTheme', newColor);
    window.location.reload();
  };

  return (
    <div>
      <div className='centerapp'>
      <div className='sophiatype'>
      <TypeAnimation
        sequence={[
          'sophia'       
        ]}
      wrapper="span"
      speed={500}
      style={{ display: 'inline-block' , color: colorTheme , fontSize: 100 }}
      repeat={0}
      cursor={false}
      />
      <TypeAnimation
        sequence={[
          2500,
          'type'       
        ]}
      wrapper="span"
      speed={500}
      style={{ display: 'inline-block' , color: 'white', fontSize: 100}}
      repeat={0}
      />
      </div>
      <SpeedTypingGame />
      <div className='person'>
          <button style = {{background: colorTheme}} onClick={ () => handleColorChange(COLORS.sophia)}>
            Charles
          </button>
          <button style = {{background: colorTheme}} onClick={ () => handleColorChange(COLORS.sophia)}>
            Olympia
          </button>
          <button style = {{background: colorTheme}} onClick={ () => handleColorChange(COLORS.sophia)}>
            Everyone
          </button>
      </div>
    </div>
    </div>
  );
};

export default App;
