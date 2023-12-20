import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import "./index.css";

interface YearEventProps {
  image: string;
  borderColor: string;
  name: string;
  infor: string;
}

const YearEvent: React.FC<YearEventProps> = ({ image, borderColor, name, infor }: YearEventProps): React.ReactElement => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    borderLeft: `10px solid ${borderColor}`,
  };

  return (
    <div id="yearEvent" style={divStyle}>
      <div className="bannerInside">
        <h6>{name}</h6>
        <p>{infor}</p>
      </div>
    </div>
  );
};

export default YearEvent;