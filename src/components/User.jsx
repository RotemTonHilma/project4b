import { useState } from "react";
function User(props){
    const [checked,setChecked]=useState(false)
    function handleCheckboxChange(e){
        setChecked(prevChecked=>!prevChecked);
        // console.log('checked: ', checked);
        let name=e.target.name
        if(checked===false){
            props.players.push(name)
            // console.log('props.players: ', props.players);
        }else{
            let num= props.players.indexOf(name);
            // console.log('num: ', num);
            props.players[num]="null"
            // console.log('props.players: ', props.players)
        }
    }
    if (props.userName){
        return(
            <div key={props.userName}>
                <input 
                    type="checkbox" 
                    name={props.userName} 
                    id={props.userName}
                    onChange={handleCheckboxChange}/>
                <label htmlFor={props.userName}>{props.userName}</label><br />
            </div>
        );
    }else{
        // console.log("new user");
        return(
            <>
                <br /><input 
                    key={Math.random()*1000}
                    type="text" 
                    placeholder="User Name" 
                    onChange={props.handleInputChange}/>
                <button onClick={props.handleAddClick}>+</button>
                <button onClick={props.cancelNewUser}>cancel</button>
            </>
        )
    }
}
export default User;