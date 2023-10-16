import PhotoCard from 'PhotoCard.js'


export default function PhotoGrid({PhotoGrid}){

    return(
        <div>{PhotoGrid.map(photo=>
        <PhotoCard 
        />)

        }
        </div>
        )
}