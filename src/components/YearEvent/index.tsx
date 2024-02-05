import React from "react";
import { Router, BrowserRouter ,Link} from "react-router-dom";
import "./index.scss";
import { link } from "fs/promises";

interface YearEventProps {
  image: string;
  borderColor: string;
  name: string;
  infor: string;
  link:string;
}

const YearEvent: React.FC<YearEventProps> = ({ image, borderColor, name, infor ,link}: YearEventProps): React.ReactElement => {
  const divStyle = {
    borderLeft: `10px solid ${borderColor}`,
    boxSizing: 'border-box' as 'border-box',
  };

  return (
    <div id="yearEvent">
      <a href={link} target="_blank" style={{ textDecoration: 'none' }}>
        <div className="banner">
          <img alt="banner" src={image} style={divStyle}/>
          <div className="context">
            <h6>{name}</h6>
            <p>{infor}</p>
          </div>
        </div>

      </a>
    </div>
  );
};

export default YearEvent;