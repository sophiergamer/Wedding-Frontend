import logo from './logo.svg';
import './App.css';
import Header from 'header.js'
import PhotoGrid from 'PhotoGrid.js'
import {useState, useEffect} from 'react'

function App() {
const [photoGrid, setPhotoGrid] = useState([])

useEffect(()=>
  (fetch('http://localhost:3000/PhotoGallery').then(response=>response.json())
  .then(data=>setPhotoGrid(data))), []
)
  return (
    <div className="App">
    <Header/>
    <PhotoGrid photoGrid={photoGrid}
    />

    </div>
  );
}

export default App;
