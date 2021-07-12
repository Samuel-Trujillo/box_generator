import React, {useState} from 'react';

const Form = (props) =>{
    const[color, setColor] = useState("")

    const createBox = (e) =>{
        e.preventDefault();
        props.makeNewBox(color);
        setColor("");
    }
    return(
        <div>
            <form onSubmit = {createBox}>
                <p>
                    <label htmlFor="color">Color: </label>
                    <input onChange= {(e) => setColor(e.target.value)} type="text" value ={color}/>
                </p>

                <input type="submit" value = "add"/>
            </form>
        </div>
    )
}



export default Form;