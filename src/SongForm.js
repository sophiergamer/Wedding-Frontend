export default function SongForm({songForm, handleForm, addNewSong}){
    return(
        <div>
            <p id="headText">Suggest a song for our backyard dance party!</p>
            <form className='songForm' onSubmit={addNewSong}>
                <label className="form-label inline text-gray-700 text-base m-2" >Song Name</label>
                <input type="text" name="song" value={songForm.song} onChange={handleForm} className="px-1 py-1 rounded-full" />
                <label className="form-label inline text-gray-700 text-base m-2" >Artist</label>
                <input type="text" name="artist" value={songForm.artist} onChange={handleForm} className="px-1 py-1 rounded-full"/>
                <input id='sButton' type="submit" value="Add Song" />
            </form>
        </div>

    )
}