import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import "./index.css";

export default function Event(): React.ReactElement {
    return (
        <div id="event">
            <div className="calendar">
                <h5 className="bold">行事曆</h5>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=c_c1282d53761f762b713c492f8a8b70ebf9aed7213851ad54871551d95df6e64f%40group.calendar.google.com&ctz=Asia%2FTaipei"
                    style={{ border: 0 }}
                    width="1140"
                    height="891"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>

            </div>


        </div>
        
        
    );
}
