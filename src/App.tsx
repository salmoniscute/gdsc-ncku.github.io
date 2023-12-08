import React from "react";
import { Routes, BrowserRouter ,Route } from "react-router-dom";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import Event from "./components/EventPage";

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div id="app">
                <BrowserRouter>
                    <NavigateBar />
                    <Routes>
                        <Route path="/events" element={<Event />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
