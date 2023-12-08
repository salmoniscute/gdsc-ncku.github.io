import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import FAQBar from "./components/FAQBar";

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div id="app">
                <BrowserRouter>
                    <NavigateBar />
                    {/* <Router>

                    </Router> */}
                    <FAQBar />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
