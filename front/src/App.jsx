import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import AppRoutes from "./screens/routes/AppRoutes";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<AppRoutes />
				</main>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
