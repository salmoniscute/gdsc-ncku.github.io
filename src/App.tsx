import React from "react";
import { Routes, BrowserRouter ,Route } from "react-router-dom";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import Event from "./components/EventPage";
import Home from "./components/HomePage"
import ProjectsPage from "./components/ProjectsPage";
import BecomeMember from "./components/BecomeMember";

export default function App(): React.ReactElement {
    return (
        <div id="app">
            <BrowserRouter>
                <NavigateBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Event />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/join" element={<BecomeMember />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
