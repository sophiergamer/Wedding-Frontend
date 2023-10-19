import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'
import Song from '../Song'
import SongForm from '../SongForm'

export default function SongPage(){
const [songList, setSongList] = useState(useLoaderData())
console.log("Start of our problems")
console.log(songList)
const [songForm, setSongForm]= useState({song:"", artist:""})
const newSong = {song: songForm.song, artist: songForm.artist, likes:0}

function handleForm(event){setSongForm({...songForm, [event.target.name]: event.target.value})}

function addNewSong(event){
    event.preventDefault();
    fetch('http://localhost:3000/Songs/', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(newSong)
    }).then(response=>response.json())
    .then(data=>setSongList(...songList, data))
setSongForm({song:"", artist:""})
    }
function addLike(id,likes){
    console.log(likes)
    fetch('http://localhost:3000/Songs/' + id, {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({likes:++likes})
    }).then(response=>response.json())
    .then(data=>setSongList(songList.map(song=> song.id === id ? data : song)))
    }

return(
<div id="middle">
    <SongForm handleForm={handleForm}
            songForm={songForm}
            addNewSong={addNewSong}/>
    {songList.map(song=> 
    <Song addLike={addLike}
        id={song.id}
        key={song.id}
        name={song.song}
        artist={song.artist}
        likes={song.likes}/>)}
</div>
)

}