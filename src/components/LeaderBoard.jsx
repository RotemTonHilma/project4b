
function LeaderBoard(props) {
props.updateLeadrBoard()
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
                    {props.topPlayers.map((player, i) => {
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