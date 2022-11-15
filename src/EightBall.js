import React, {useState} from "react";
import "./EightBall.css"

const EightBall = (props) => {

    const choice = (arr) => {
       let rand =  Math.floor(Math.random() * arr.length);
       return arr[rand];
    }

    const handleClick = () => {
        const {msg, color} = choice(props.answers);
        setMsg(msg);
        setColor(color);
    }

    // const reset = (msg, color) => {
    //     let initialMsg = initialState.msg;
    //     let initialColor = initialState.color;
    //     return msg = initialMsg, color = initialColor;
    // }

    const initialState = {
        msg: `Think of a question`,
        color: `black`
    };

    const [msg, setMsg] = useState(initialState.msg);
    const [color, setColor] = useState(initialState.color);
    
    return (
        <div className="EightBall"
        onClick={handleClick}
        style={{backgroundColor: color}}>
            <h3>{msg}</h3>
                {/* <div className="EightBall-button">
            <button onClick={() => reset(initialMsg, initialColor)}>Reset</button>
            </div> */}
            
        </div>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall;