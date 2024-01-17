import React from "react";
import { Routes, BrowserRouter ,Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import Event from "./components/EventPage";
import Home from "./components/HomePage"
import ProjectsPage from "./components/ProjectsPage";
import BecomeMember from "./components/BecomeMember";
import TeamMember from "./components/TeamMember";

import Loading from "./components/Loading/Loading"; // Loading page

export default function App(): React.ReactElement {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 5800)
    }, [])
    if (loading) {
        return <Loading/>
    }
    return (
        <div id="app">
            <BrowserRouter>
                <NavigateBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Event />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/teams" element={<TeamMember />} />
                    <Route path="/join" element={<BecomeMember />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
