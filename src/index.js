import React from "react"
import ReactDOM from "react-dom/client"

function App (){
    return(
        <div>
            <h1>Hello everyone</h1>
            <h2>I love you all</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)