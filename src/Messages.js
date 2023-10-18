export default function Messages({name, message}){
    return(
        <p className="messages">
            "{message}" -- {name}
        </p>
    )

}