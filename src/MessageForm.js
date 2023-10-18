export default function MessageForm({messageForm, handleForm, addMessage,setMessageForm}){
function resetForm(){
    setMessageForm({name:"", message:""})
    
}
    return(
    <div>
        <form className="messageForm" onSubmit={addMessage}>
            <label>your name </label>
            <input type='text' name="name" value={messageForm.name} onChange={handleForm}></input>
            <label>story or message </label>
            <input type="text" name="message" onChange={handleForm}/>  
        <   input className= "mButton" type="submit" value="send it" onClick={resetForm}/>
        
        </form>
   </div> )
}