import React from "react";
import "./App.css"

export default function Drum() {
    const [text, setText] = React.useState("")
    
    function handleClick(event) {
        const audio = event.target.querySelector("audio")
        if (audio) {
            audio.play()
        }
        const newColor = "purple";
        event.target.style.backgroundColor = newColor;
        const original = "rgb(156, 61, 61)"
        setTimeout(() => {
            event.target.style.backgroundColor = original
        }, 300)

        setText(event.target.id)
    }

    function handleKeydown() {}

    React.useEffect(() => {
        function handleKeydown(event) {
            const audio = document.getElementById(event.key.toUpperCase())
            if (audio) {
                audio.play()
                const newColor = "purple";
                const original = "rgb(156, 61, 61)"
                
                audio.parentElement.style.backgroundColor = newColor
                setTimeout(() => {
                    audio.parentElement.style.backgroundColor = original
                }, 300)

                setText(audio.parentElement.id)
            }
        }

        document.addEventListener("keydown", handleKeydown)
        return () => {
            document.removeEventListener("keydown", handleKeydown)
        }
    }, [])
    

    return (
        <div className="App">
            <div className="wrapper">
            <h2 className="title">Drum Machine</h2>
                <div id="drum-machine">
                    <div className="drum-container">
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Heater-1">
                            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                            Q
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Heater-2">
                            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                            W
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Heater-3">
                            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                            E
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Heater-4">
                            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                            A
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Clap">
                            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                            S
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Open-hh">
                            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                            D
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Kick-n-hat">
                            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                            Z
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Kick">
                            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                            X
                        </div>
                        <div onKeyDown={handleKeydown} onClick={handleClick} className="drum-pad" id="Closed-hh"> 
                            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                            C
                        </div> 
                    </div>
                    <div id="display">{text}</div>
                </div>
                <p className="creator">By Bekzat Kali</p>
            </div>
                
        </div>
    )
}



