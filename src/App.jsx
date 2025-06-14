import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader/Pre";
import Navbar from "./components/Navigation/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollPage/ScrollToTop";
import ResourceLoader from "./components/ResourceLoader/ResourceLoader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div
                className="App footer-bottom"
                id={load ? "no-scroll" : "scroll"}>
                <ResourceLoader>
                    <Navbar />
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/project" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </ResourceLoader>
            </div>
        </Router>
    );
}

export default App;
