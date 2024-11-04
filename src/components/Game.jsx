import { useState } from 'react';
import Board from "./Board";
import LeaderBoard from './LeaderBoard';

function Game() {
    //users array from local storage
    const users = JSON.parse(localStorage.getItem("users"));
    const [activeUsers, setActiveUsers] = useState(JSON.parse(localStorage.getItem("currentUsers")));
    const [playingUser, setPlayingUser] = useState(activeUsers[0]);
    let LeaderBoardArr = [];

    function changeplayingUser() {
        const prevIdx = activeUsers.indexOf(playingUser);
        const nextIdx = prevIdx < activeUsers.length - 1 ? prevIdx + 1 : 0;
        setPlayingUser(activeUsers[nextIdx]);
    }

    function logPlayerOut(player) {
        setActiveUsers(prev => prev.filter((user) => { return user.userName !== player.userName }));

        let currentUsers = JSON.parse(localStorage.getItem("currentUsers"));
        currentUsers = currentUsers.filter((user) => { return user.userName !== player.userName })

        for (let user of users) {
            if (user.userName === player.userName) {
                user.scores = player.scores;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUsers", JSON.stringify(currentUsers));
    }
    function updateLeadrBoard(user = null) {
        LeaderBoardArr=[]
        
        for (let i = 0; i < users.length; i++) {
            if (user !== null && users[i].userName === user.userName) {
                users[i].scores = user.scores;
            }
            let total = 0;
            for (let j = 0; j < users[i].scores.length; j++) {
                total += users[i].scores[j]
            }
            LeaderBoardArr.push({
                userName: users[i].userName,
                averageScore: users[i].scores.length === 0 ? 0 : (Math.floor(total / users[i].scores.length))
            })
           

        }
        localStorage.setItem("users", JSON.stringify(users));
    }
    updateLeadrBoard()
    let sortedLeaderBoardArr = LeaderBoardArr.sort((a, b) => a.averageScore - b.averageScore)
    const [topPlayers, setTopPlayers] = useState(sortedLeaderBoardArr)

    return (
        <>
                <h1>get to 100</h1>
            <div id='game'>
                {activeUsers.map((user) => {
                    return <Board key={user.userName}
                        user={user}
                        playingUser={playingUser}
                        changeplayingUser={changeplayingUser}
                        logPlayerOut={logPlayerOut}
                        updateLeadrBoard={updateLeadrBoard} />
                })}
            </div>
            <LeaderBoard
                topPlayers={topPlayers}
                updateLeadrBoard={updateLeadrBoard} />
        </>

    );
}
export default Game;