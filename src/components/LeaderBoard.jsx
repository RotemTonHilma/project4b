import { useState } from "react";

function LeaderBoard() {
    const users = JSON.parse(localStorage.getItem("users"));

    for (let i = 0; i < users.length; i++) {
        let total = 0;
        for (let j = 0; j < users[i].scores.length; j++) {
            total += users[i].scores[j]
        }
        users[i].averageScore = users[i].scores.length === 0 ? 0 : (Math.floor(total / users[i].scores.length));
        //     console.log('users[i].userName: ', users[i].userName);
        //     console.log('users[i].averageScore: ', users[i].averageScore);
    }
    let arr = users.sort((a, b) => a.averageScore - b.averageScore)
    const [topPlayers, setTopPlayers] = useState(arr)
    // console.log('users: ', users);
    // console.log('arr: ', arr);

    return (
        <>
            <h1>Top players</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Average</th>
                    </tr>
                </thead>
                <tbody>
                    {topPlayers.map((player, i) => {
                        return (
                            <tr key={i}>
                                <td>{player.userName}</td>
                                <td>{player.averageScore}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </>
    )
}
export default LeaderBoard;