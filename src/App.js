import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function App() {
	return (
    <div className="App flex flex-col h-full">
      <Nav />
      <Outlet />
    </div>
	)
}

export default App
