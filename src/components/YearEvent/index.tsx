import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import "./index.scss";

interface YearEventProps {
  image: string;
  borderColor: string;
  name: string;
  infor: string;
}

const YearEvent: React.FC<YearEventProps> = ({ image, borderColor, name, infor }: YearEventProps): React.ReactElement => {
  const divStyle = {
    borderLeft: `10px solid ${borderColor}`,
    boxSizing: 'border-box' as 'border-box',
  };

  return (
    <div id="yearEvent">
      <div className="banner">
        <img alt="banner" src={image} style={divStyle}/>
        <div className="context">
          <h6>{name}</h6>
          <p>{infor}</p>
        </div>
      </div>
    </div>
  );
};

export default YearEvent;