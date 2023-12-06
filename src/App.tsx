import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div id="app">
                <BrowserRouter>
                    <NavigateBar />
                    {/* <Router>

                    </Router> */}
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
