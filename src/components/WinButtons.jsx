function WinButtons({ setScore, setGameNumber, logout, setHasWon }) {

    function handleNewGame() {
        setScore(0);
        setGameNumber(Math.floor(Math.random() * 100));
        setHasWon(false);
    }

    function handleLogOut() {
        logout()
    }

    return (
        <>
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    );
}

export default WinButtons;