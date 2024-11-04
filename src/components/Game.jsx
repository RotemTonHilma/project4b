import { useState } from 'react';
import Board from "./Board";

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
        setActiveUsers(prev => prev.filter((user) => { return user.username !== player.username }));

        let currentUsers = JSON.parse(localStorage.getItem("currentUsers"));
        currentUsers = currentUsers.filter((user) => { return user.username !== player.username })

        const users = JSON.parse(localStorage.getItem("users"));
        for (let user of users) {
            if (user.username === player.username) {
                user.scores = player.scores;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUsers", JSON.stringify(currentUsers));
    }

    return (
        <div style={{ border: "1px solid black" }}>
            {activeUsers.map((user) => {
                return <Board key={user.username}
                    user={user}
                    playingUser={playingUser}
                    changeplayingUser={changeplayingUser}
                    logPlayerOut={logPlayerOut} />
            })}
        </div>
    );
}
export default Game;