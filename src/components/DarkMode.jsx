import React from 'react';
import '../App.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggleDarkMode}>Dark mode</button>
  );
}

export default DarkModeToggle;
