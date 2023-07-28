function Greeting_button()
{
    <div>{ShowMsg()}</div>
    return <button onClick={ShowMsg}>ask!</button>

    function ShowMsg(){
        console.log("how are you")

        return <div>"how are you"</div>
    }
}



export default Greeting_button;