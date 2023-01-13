const DARK_MODE = "DARK_MODE";
const SPANISH_MODE = "SPANISH_MODE";

function darkMode() {
  return {
    type: DARK_MODE,
  };
}

function spanishMode() {
  return {
    type: SPANISH_MODE,
  };
}

export { DARK_MODE, darkMode, SPANISH_MODE, spanishMode };
