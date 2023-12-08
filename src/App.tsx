import React from "react";
import { Routes, BrowserRouter ,Route } from "react-router-dom";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import FAQBar from "./components/FAQBar";
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
                    <FAQBar />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
