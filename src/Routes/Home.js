import PhotoCard from '../PhotoCard'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Home(){
    const [photoGrid, setPhotoGrid] = useState(useLoaderData())
    return(
    <div className='container'  id="middle">
        <div className='gallery'>
        {photoGrid.map(photo=>
        <PhotoCard key={photo.id}
                  title={photo.title}
                  image={photo.image}
                  story={photo.story}/>)
        }
        </div>
    </div>    
    )
}