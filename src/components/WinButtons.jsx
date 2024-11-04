function WinButtons({ score, setScore, setGameNumber, updateScores, logout }) {

    function handleNewGame() {
        setScore(0);
        setGameNumber(Math.floor(Math.random() * 100));
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