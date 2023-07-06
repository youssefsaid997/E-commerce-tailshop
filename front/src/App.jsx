import { useState } from "react";
import Header from "./components/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
			<h1>Hello from E-commerce</h1>
		</div>
	);
}

export default App;
