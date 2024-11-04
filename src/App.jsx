import { useState } from 'react';
import LogIn from './components/LogIn';
import Game from "./components/Game";

function App() {
  const [showLogIn, setShowLogIn] = useState(true);
  return (
    <>
      {showLogIn && <LogIn showLogIn={showLogIn} setShowLogIn={setShowLogIn} />}
      {!showLogIn && <Game />}
    </>
  )
}

export default App
