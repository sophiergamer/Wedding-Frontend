
import {NavLink} from "react-router-dom"


export default function NavBar(){
    return(
    <nav id="menu">
        <NavLink className="hover:text-slate-500" to="Home">Us</NavLink>
        <NavLink className= "hover:text-slate-500" to="RSVP">RSVP</NavLink>
        <NavLink className=" hover:text-slate-500" to="Gifts">Gifts</NavLink>
        <NavLink className=" hover:text-slate-500" to="Info">Info</NavLink>
        <NavLink className=" hover:text-slate-500" to="SongPage">Playlist</NavLink>
   </nav> )
}