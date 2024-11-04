import { useState } from 'react';
import LogIn from './components/LogIn';
import Game from "./components/Game";
import "./app.css"

function App() {
  const [showLogIn, setShowLogIn] = useState(true);
  return (
    <>
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} />}
      {!showLogIn && <Game />}
    </>
  )
}

export default App
