import { useState } from "react";
function User(props){
    const [checked,setChecked]=useState(false)
    function handleCheckboxChange(e){
        setChecked(prevChecked=>!prevChecked);
        let name=e.target.name
        if(checked===false){
            props.players.push(name)
        }else{
            let num= props.players.indexOf(name);
            props.players[num]="null"
        }
    }
    if (props.userName){
        return(
            <div
                 key={props.userName}
                className="user">
                <input 
                    type="checkbox" 
                    name={props.userName} 
                    id={props.userName}
                    onChange={handleCheckboxChange}/>
                <label htmlFor={props.userName}>{props.userName}</label><br />
            </div>
        );
    }else{
        return(
            <div className="newUser">
                <br /><input 
                    key={Math.random()*1000}
                    type="text" 
                    placeholder="User Name" 
                    onChange={props.handleInputChange}/>
                <button onClick={props.handleAddClick}>+</button>
                <button onClick={props.cancelNewUser}>cancel</button>
            </div>
        )
    }
}
export default User;