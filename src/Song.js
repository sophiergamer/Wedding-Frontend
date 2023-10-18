

export default function Song({name, artist, likes}){

    return(
        <div className="container">
            <p className="song">{name}</p>
            <p className='artist'>{artist}</p>
            <span className="likes">likes: {likes}</span>
            <button className="likeButton">I like this song too!</button>
        </div>
    )
}