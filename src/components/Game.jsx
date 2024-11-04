import { useState } from 'react';
import Board from "./Board";
import LeaderBoard from './LeaderBoard';

function Game() {
    //users array from local storage
    const [activeUsers, setActiveUsers] = useState(JSON.parse(localStorage.getItem("currentUsers")));
    const [playingUser, setPlayingUser] = useState(activeUsers[0]);

    function changeplayingUser() {
        const prevIdx = activeUsers.indexOf(playingUser);
        const nextIdx = prevIdx < activeUsers.length - 1 ? prevIdx + 1 : 0;
        setPlayingUser(activeUsers[nextIdx]);
    }

    function logPlayerOut(player) {
        setActiveUsers(prev => prev.filter((user) => { return user.userName !== player.userName }));

        let currentUsers = JSON.parse(localStorage.getItem("currentUsers"));
        currentUsers = currentUsers.filter((user) => { return user.userName !== player.userName })

        const users = JSON.parse(localStorage.getItem("users"));
        for (let user of users) {
            if (user.userName === player.userName) {
                user.scores = player.scores;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUsers", JSON.stringify(currentUsers));
    }

    return (
        <>
            <div id='game'>
                {activeUsers.map((user) => {
                    return <Board key={user.userName}
                        user={user}
                        playingUser={playingUser}
                        changeplayingUser={changeplayingUser}
                        logPlayerOut={logPlayerOut} />
                })}
            </div>
            <LeaderBoard />
        </>

    );
}
export default Game;