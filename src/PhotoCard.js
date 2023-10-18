import {useState} from "react"

export default function PhotoCard({title, story, image})
{
const [flipped, setFlipped] = useState(true)
const [hover, setHover] = useState(true)
    
function flip(){setFlipped(!flipped)}

function hovering(){setHover(hover)}
function leaving(){setHover(!hover)}

  
return( 
    <div onClick={flip}>
    <div >
        {flipped ?  
            <div id='front' className={hover ? "mouseover" : "mouseleave"} onMouseOver={hovering} onMouseLeave={leaving}>
                <img className="images" src={image} alt={title}/>
                <h2 id="storyTitle">{title}</h2>
            </div>
        : 
        <div id="back">
            <p id='storyContent'>{story}</p>
        </div>
        }
        
     </div>
     </div>

)}