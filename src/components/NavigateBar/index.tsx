import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import ToggleMenu from "../../ui/ToggleMenu";

import logo from "../../logo.svg";

import "./index.scss";

export default function NavigateBar(): ReactElement {
    const [menuStat, setMenuStat] = useState<boolean>(false);


    return (
        <div id="navigateBar" data-menu={menuStat}>
            <Link className="logo-image" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="menu">
                <Link className="normal bold" to={"/events"}>Events</Link>
                <Link className="normal bold" to={"/projects"}>Projects</Link>
                <ToggleMenu
                    title="Teams"
                    titleClass="normal bold"
                    options={{
                        "歷屆團隊成員": "/teams",
                        "如何加入成員": "/join",
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
            <div className="moblieMenu" onClick={() => { setMenuStat(!menuStat); }} />
        </div>
    );
}
