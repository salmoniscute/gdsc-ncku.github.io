import React from "react";
import { Link } from "react-router-dom";

import ToggleMenu from "../../ui/ToggleMenu";

import logo from "../../logo.svg";

import "./index.scss";

export default function NavigateBar(): React.ReactElement {
    return (
        <div id="navigateBar">
            <Link className="logo-image" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <Link className="normal bold" to={"/events"}>Events</Link>
            <Link className="normal bold" to={"/projects"}>Projects</Link>
            <ToggleMenu
                title="Teams"
                titleClass="normal bold"
                options={{
                    "歷屆團隊成員": "",
                    "如何加入成員": "",
                }}
                optionClass="normal"
            />
            <ToggleMenu
                title="Resources"
                titleClass="normal bold"
                options={{
                    "Google Developers": "https://developers.google.com/?hl=zh-tw",
                    "Google Developer Groups": "https://gdg.community.dev/",
                    "GDG Taiwan": "https://gdg.tw/",
                    "Google Tech Dev Guide": "https://techdevguide.withgoogle.com/",
                    "Google Open Source": "https://opensource.google/",
                }}
                optionClass="normal"
            />
        </div>
    );
}
