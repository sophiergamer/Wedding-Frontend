import {useState} from "react"

export default function PhotoCard({title, story, image})
{
const [flipped, setFlipped] = useState(true)    
function flip(){setFlipped(!flipped)}

  
return( 
    <div onClick={flip}>
    <div >
        {flipped ?  
            <div id='front'>
                <img id="images" className="opacity-100 hover:opacity-50" src={image} alt={title}/>
            </div>
        : 
        <div id="back">
            <h2 className="storyTitle">{title}</h2>
            <p id='storyContent'>{story}</p>
            
        </div>
        }
        
     </div>
     </div>

)}