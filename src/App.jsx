import { useState } from 'react';
import { Container } from "@mui/material";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import { Route, Routes } from "react-router-dom"
import './App.css';


function App() {
	const [count, setCount] = useState(0)

	return (
			<Container className="root-container">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>

				<Footer />
			</Container>
	)
};

export default App;
