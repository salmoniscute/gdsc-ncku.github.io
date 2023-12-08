import React from "react";

import logo from "../../logo.svg"

import "./index.scss";

export default function Footer(): React.ReactElement {
    return (
        <div id="footer">
            <div className="footer-block">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <a href="mailto:GDSC.club@gs.ncku.edu.tw">GDSC.club@gs.ncku.edu.tw</a>
                <p>國立成功大學 台灣台南市東區大學路1號</p>
                <div className="footer-iconBar">

                </div>
            </div>
            <div className="footer-block">
                <a
                    href="https://gdsc.community.dev/national-cheng-kung-university/"
                    target="_blank"
                    rel="noreferrer"
                >活動報名平台</a>
                <a
                    href="https://developers.google.com/"
                    target="_blank"
                    rel="noreferrer"
                >Google for Developer</a>
                <a
                    href="https://developers.google.com/community-guidelines"
                    target="_blank"
                    rel="noreferrer"
                >Code of Conduct</a>
                <h6>讓改變在校園裡發生！</h6>
                <p>hello leaf!</p>
            </div>
        </div>
    );
}
