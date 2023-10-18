export default function SongForm({songForm, handleForm, addNewSong}){
    return(
        <div>
            <p>Suggest a song for our backyard dance party!</p>
            <form onSubmit={addNewSong}>
                <label>Song Name</label>
                <input type="text" name="song" value={songForm.song} onChange={handleForm} />
                <label>Artist</label>
                <input type="text" name="artist" value={songForm.artist} onChange={handleForm} />
                <input type="submit" value="Add Song" />
            </form>
        </div>

    )
}