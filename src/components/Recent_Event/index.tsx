import React ,{useEffect, useState}from 'react';
import axios from "axios";
import "./index.scss";

export default function RecentEvent(): React.ReactElement {
    let group_id = 1846;
    const [event_title, setEvent_title] = useState(null);
    const [description_short, setDescription_short] = useState(null);
    const [start_date, setStart_date] = useState(null);
    const [picture, setPicture] = useState<string>('Initial Value');
    const [venue_name, setVenue_name] = useState(null);
    const [venue_address, setVenue_address] = useState(null);
    const [venue_city, setVenue_city] = useState(null);
    const [url, setUrl] = useState<string>('Initial Value');
    const parse = require('html-react-parser').default;
    const client = axios.create({
    baseURL: "https://gdsc.community.dev/api/" 
    });
    useEffect(() => {
        const getEvent = async () => {
            const response = await client.get('/chapter/1846/event?status=Published&fields=id,title,url,description_short,start_date,event_type,event_type_title,picture,venue_name,venue_address,venue_city');
            console.log(response.data.results[0]);
    
            setEvent_title(response.data.results[0].title);
            setDescription_short(response.data.results[0].description_short);
            setStart_date(response.data.results[0].start_date);
            setPicture(response.data.results[0].picture.url);
            setVenue_name(response.data.results[0].venue_name);
            setVenue_address(response.data.results[0].venue_address);
            setVenue_city(response.data.results[0].venue_city);
            setUrl(response.data.results[0].url);
        } 
        getEvent();
    },[]);
    const joinClick = () => {
        const ref = url;
        window.open(ref)
      };

    return(
        <div id="recent-event">
            <div className='recent-event-block'>
                <div className='avatar-block'>
                    <img className='avatar' src={picture} ></img>
                </div>
                <div className='content-block'>
                <div className='tag-block'>
                <p className='tag' >Career Development</p>
                <p className='tag' >實體活動</p>
                </div>
                
                <p className='topic'>{event_title}</p>
                <p className='time'>{start_date}</p>
                <p className='location'>{venue_name} {venue_city} {venue_address}</p>
                <p className='introduction'>{description_short}</p>
                
                <div className='button-block'>
                    <button className='join' onClick={joinClick}>立即加入</button>
                    <button className='addtocalendar' >加入行事曆</button>
                </div>
                </div>
            </div>

        </div>
    );
}