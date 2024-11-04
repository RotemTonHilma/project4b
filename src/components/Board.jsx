import Operator from "./Operator";
import WinButtons from "./WinButtons";
import { useState } from 'react';

function Board({ user, playingUser, changeplayingUser, logPlayerOut }) {
    const [score, setScore] = useState(0);
    const [gameNumber, setGameNumber] = useState(Math.floor(Math.random() * 100));
    const [hasWon, setHasWon] = useState(gameNumber === 100);

    const actions = ["+1", "-1", "*2", "/2"];
    let isPlaying = user === playingUser;

    function scoresAvg(scoreArr) {
        if (scoreArr.length) {
            let sum = scoreArr.reduce((prev, value) => {
                return prev + value;
            }, 0);
            return Math.floor(sum / scoreArr.length);
        }
        return 0;

    }

    function logout() {
        logPlayerOut(user);
    }

    function operatorClick(action) {
        let nextGameNumber = gameNumber;
        switch (action) {
            case "+1": {
                setGameNumber(prev => prev + 1);
                nextGameNumber++;
                break;
            }
            case "-1": {
                setGameNumber(prev => prev - 1);
                nextGameNumber--;
                break;
            }
            case "*2": {
                setGameNumber(prev => prev * 2);
                nextGameNumber *= 2;
                break;
            }
            case "/2": {
                setGameNumber(prev => Math.floor(prev / 2));
                nextGameNumber /= 2;
                break;
            }
        }
        if (nextGameNumber === 100) user.scores.push(score + 1);
        setHasWon(nextGameNumber === 100);
        setScore(prev => prev + 1);
        changeplayingUser();
    }

    return (
        <div style={{ border: "1px solid black" }}>
            <h3>{user.userName}</h3>
            <p>Score:{score}</p>
            <h3>Current Number:{gameNumber}</h3>

            {!hasWon && actions.map((action) => {
                return <Operator key={action}
                    action={action}
                    isPlaying={isPlaying}
                    operatorClick={operatorClick}
                />
            })}

            {hasWon && <WinButtons
                setScore={setScore}
                setGameNumber={setGameNumber}
                logout={logout}
                setHasWon={setHasWon} />
            }

            <p>Scores: {user.scores.map((score) => {
                return score + ",";
            })}</p>
            <p>Average Score: {scoresAvg(user.scores)}</p>
        </div>
    );
}

export default Board;