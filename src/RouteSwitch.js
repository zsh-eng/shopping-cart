import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./Home"

function RouteSwitch() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />

					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RouteSwitch
