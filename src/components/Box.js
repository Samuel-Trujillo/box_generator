import React, {useState} from 'react';


const Box = (props) => {
    //backgroundColor is the html css equivelent of background-color, we use camel case in react
    //doesnt matter what the const name is as long as body is syntac accurate hence is why i used chile
    const chile = {
        backgroundColor : props.color,
        width: '30px',
        height: '30px',
        padding: '30px',
        margin: '100px',
        display: 'inline-block',

        
    }

    return(

        <div style = {chile} >
        </div>

    )
}

export default Box;