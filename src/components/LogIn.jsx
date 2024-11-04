import { useState } from 'react';
import User from './User.jsx'
import "./logIn.css"

function LogIn({ showLogIn, setShowLogIn }) {
    const users = JSON.parse(localStorage.getItem("users"));
    const players = []

    if (users === null) {
        localStorage.setItem("users", [])
    }
    const [userList, setUserList] = useState(users);
    const [newUser, setNewUser] = useState();


    let newUserName;
    function addUser() {
        setNewUser(<User
            key={users.length}
            handleInputChange={handleInputChange}
            cancelNewUser={cancelNewUser}
            handleAddClick={handleAddClick} />)
    }
    function handleInputChange(e) {
        newUserName = e.target.value;
        // console.log('newUserName: ', newUserName);
        return newUserName;
    }
    function cancelNewUser() {
        setNewUser('');
    }

    function handleAddClick() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === newUserName) {
                alert("User already exists. Try another name")
                return;
            }
        }
        users.push({ userName: newUserName, scores: [] })
        setUserList(users);
        localStorage.setItem("users", JSON.stringify(users))
        setNewUser('')
    }
    function handleStartGameClick() {
        const whantToPlay = players.filter((value) => value !== "null");
        if (whantToPlay.length < 2) {
            alert("Must have two players or more")
        } else {
            const currentUsers = []
            for (let i = 0; i < users.length; i++) {
                for (let j = 0; j < whantToPlay.length; j++) {
                    if (users[i].userName === whantToPlay[j]) {
                        currentUsers.push(users[i])
                    }
                }
            }
            // console.log('currentUsers: ', currentUsers);
            localStorage.setItem("currentUsers", JSON.stringify(currentUsers));
            setShowLogIn(false);
        }
    }

    return (
        <>
            <h1>who's playing?</h1>
            {userList.map((user) => {
                return (<User
                    key={user.userName}
                    userName={user.userName}
                    players={players} />)
            })}
            {newUser}
            <button 
                id='newPlayer'
                onClick={addUser}>add player</button>
            <button 
                id='startGame'
                onClick={handleStartGameClick}>Start Game</button>
        </>
    )
}

export default LogIn;