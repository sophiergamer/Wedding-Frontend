
import Header from './header.js'
import NavBar from './NavBar.js'
import Messages from './Messages.js'
import {useState, useEffect} from 'react'
import { Outlet} from 'react-router-dom';
import MessageForm from './MessageForm';
import './index.css'



function App() {
const [messageForm, setMessageForm] = useState({name:"", message:""})
const [messageList, setMessageList] = useState([])
const newMessage = {name: messageForm.name, message:messageForm.message}


useEffect(()=>{fetch('http://localhost:3000/Messages')
.then(response=>response.json())
.then(data=>setMessageList(data))},[])
function handleForm(event){
  setMessageForm({...messageForm, [event.target.name]:event.target.value})
}
function addMessage(event){
  event.preventDefault();
  fetch('http://localhost:3000/Messages/', {
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(newMessage)
  }).then(response=>response.json())
  .then(data=>setMessageList([...messageList, data]))
  setMessageForm({name:"", message:""})
}


  return (
    <div >
    <Header/>
    <NavBar/>
   <Outlet/>
   <div >
   <div id='messages'>{messageList.map(message=>
        <Messages key={message.id}
                  name={message.name}
                  message={message.message}
          />)}
         </div>
    <div className="bottom">
    <h2 id="bottomTitle">share a story or send a message</h2>
      <MessageForm messageForm={messageForm}
                  handleForm={handleForm}
                  addMessage={addMessage}
                  setMessageForm={setMessageForm}/>
      
    </div>
    </div>
  </div>
  );
}

export default App;
