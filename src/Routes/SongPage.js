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
    }

return(
<div>
    <SongForm handleForm={handleForm}
            songForm={songForm}
            addNewSong={addNewSong}/>
    {songList.map(song=> 
    <Song key={song.id}
        name={song.song}
        artist={song.artist}
        likes={song.likes}/>)}
</div>
)

}