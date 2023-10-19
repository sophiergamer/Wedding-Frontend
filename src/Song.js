

export default function Song({name, artist, likes, id, addLike}){

    return(
        <div className="playlist-item">
        
            <p className="song-title">{name}</p>
            <p className='artist-name'>{artist}</p>
            <span className="likes">likes: {likes}</span>
            <button id="likeButton" onClick={()=>addLike(id,likes)}>I like this song too!</button>
    
        </div>
    )
}