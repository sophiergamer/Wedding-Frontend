import { useState } from "react"


export default function RSVP(){
const [form, setForm]= useState({name:"", answer:""})


function handleForm(event){
    setForm({...form, [event.target.name]: event.target.value})
    }
const newRSVP= {name:form.name, answer: form.answer}
function sendRSVP(event){
    event.preventDefault();
    fetch('http://localhost:3000/RSVPs/', {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newRSVP)
    }).then(response=>response.json())
console.log(newRSVP)
    }
return(
<div> Will you be attending?
    <form onSubmit={sendRSVP}>
        <label>Name</label>
        <input type='text' value={form.name} name='name' onChange={handleForm}></input>
        <label>Response</label>
        <select name='answer' value={form.answer} onChange={handleForm}>
            <option>select one</option>
            <option value='Attending'>Attending</option>
            <option value='Not'>NOT Attending</option>
        </select>
        <input type='submit'></input>
    </form>
 </div>   
 
 )
}