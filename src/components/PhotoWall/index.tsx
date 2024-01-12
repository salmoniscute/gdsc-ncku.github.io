import React, {useState, useRef, useEffect} from 'react';

import memberImg0 from '../../assets/banner/DSC09385.jpg';
import memberImg1 from '../../assets/banner/DSC09510.jpg';

import "./index.scss";

export default function MemberPhotoWall(): React.ReactElement {
    const [photoIndex, setPhotoIndex] = useState<number>(1);
    const memberImgs = [memberImg0, memberImg1];
    let buttonArray: number[] = Array.from({ length: memberImgs.length }, (_, index) => index + 1);
    console.log(photoIndex);
    //click to change the photo
    function updateSlider(index: number) {
        setPhotoIndex(index);
    }
    //auto change the photo
    useEffect(() => {
        const interval = setInterval(() => {
          setPhotoIndex(photoIndex + 1 === memberImgs.length + 1? 1 : photoIndex + 1);
          console.log(photoIndex);
        }, 3000);
  
        return () => clearInterval(interval);
    }, [photoIndex]);
    return (
        <div className="photo-wall">
            <div className='banner'>
            <img src={memberImgs[photoIndex - 1]} alt="members' photo"/>
            <div className='buttons'>
            {buttonArray.map((index) => (
                <button key={index} className={index === photoIndex ? "button-target" : ""} onClick={() => updateSlider(index)}></button>
            ))}
            </div>
        </div>
        </div>
    );
};