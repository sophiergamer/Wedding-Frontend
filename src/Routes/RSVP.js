import { useState } from "react"


export default function RSVP(){
const [form, setForm]= useState({name:"", answer:"", email:""})


function handleForm(event){
    setForm({...form, [event.target.name]: event.target.value})
    }
const newRSVP= {name:form.name, answer: form.answer, email: form.email}
function sendRSVP(event){
    event.preventDefault();
    fetch('http://localhost:3000/RSVPs/', {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newRSVP)
    }).then(response=>response.json())
console.log(newRSVP)
setForm({name:"", answer:"select one", email:""})
    }
return(
<div id="middle">
    <p id="headText">Will you be attending?</p>
    <form id='rsvp' onSubmit={sendRSVP} >
        <label className="form-label inline text-base m-2" >Name</label>
        <input type='text' value={form.name} name='name' onChange={handleForm} className="px-1 py-1 rounded-full"></input>
     
        <label className="form-label inline text-base m-2">Email Address</label>
        <input type="email" name="email" value={form.email} onChange={handleForm} className="px-1 py-1 rounded-full"></input>
        <label className="rounded lg bg-orange-400 hover:bg-orange-500">Search</label>
        <input id='rsvpButton' type='submit' ></input>
    </form>
    <div>
        //this is where the names will come up for people to click once they have searched, and they can 
        choose between attending or not attending and THEN they can submit. this will stop random people from 
        RSVPing 
        
        eg. if name in nameList, return name
        give CHECKBOX/DROPDOWN option for attending or not
        submit button
    </div>
 </div>   
 
 )
}