import React, { useState, useEffect } from "react"
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./styles.css";
import "./App.css";
import "/bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load}>
                <div className="App" id={load ? "no-scroll" : "Scroll"}>
                    <Navbar/>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" element = {<Home/>} />
                        <Route path="/aboutme" element = {<About/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </Preloader>
        </Router>
    )
}
