import React from "react"
import ReactDOM from "react-dom/client"

import App from "./components/App"


const Home = <h1>Hello World !!</h1>

// ReactDOM.render(Home, document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)

// ReactDOM.render(<App/>, document.getElementById('root'))



