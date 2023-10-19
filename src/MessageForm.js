export default function MessageForm({messageForm, handleForm, addMessage,setMessageForm}){
function resetForm(){
    setMessageForm({name:"", message:""})
    
}
    return(
    <div>
        <form className="messageForm" onSubmit={addMessage}>
            <label className="form-label inline text-base m-2" >your name </label>
            <input type='text' name="name" value={messageForm.name} onChange={handleForm}
            className="px-1 py-1"></input>
            <label className="form-label inline text-base m-2" >story or message </label>
            <input type="text" name="message" value={messageForm.message} onChange={handleForm} className="px-1 py-1"/>  
        <   input id= "mButton" type="submit" value="send it" onClick={resetForm}/>
        
        </form>
   </div> )
}