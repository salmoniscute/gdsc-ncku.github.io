import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./index.scss";
declare const google:any;

export default function RecentEvent(props:any): React.ReactElement {
    
    // var gapi = window.gapi;
    var CLIENT_ID = "586473348539-m9ufa57jb7neel6su6im952poh5dmgoh.apps.googleusercontent.com"
    var API_KEY = "AIzaSyA28VdLB6QDcKLroOYPMwwmXmpTCGlv6xQ"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar"
    // function handleCallbackResponse(response){
    //     console.log("ID token")
    // }
    // useEffect(() => {
    //     google.account.id.initialize({
    //         client_id: "586473348539-m9ufa57jb7neel6su6im952poh5dmgoh.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })
    // }, []);
    

    let group_id = 1846;
    const [event_title, setEvent_title] = useState(null);
    const [description_short, setDescription_short] = useState(null);
    const [start_date, setStart_date] = useState(null);
    const [picture, setPicture] = useState<string>('Initial Value');
    const [venue_name, setVenue_name] = useState(null);
    const [venue_address, setVenue_address] = useState(null);
    const [venue_city, setVenue_city] = useState(null);
    const [url, setUrl] = useState<string>('Initial Value');
    const [audience_type, setAudience_type] = useState<string>('Initial Value');
    const client = axios.create({
    baseURL: "https://gdsc.community.dev/api/" 
    });
    useEffect(() => {
        const getEvent = async () => {
            const response = await client.get('/chapter/1846/event?status=Published&'+
            'fields=id,title,url,description_short,start_date,event_type,event_type_title,picture,venue_name,venue_address,venue_city,audience_type,event_tag_title'
            );
            console.log(response.data.results[props.event_num]);
    
            setEvent_title(response.data.results[props.event_num].title);
            setDescription_short(response.data.results[props.event_num].description_short);
            setStart_date(response.data.results[props.event_num].start_date);
            setPicture(response.data.results[props.event_num].picture.url);
            setVenue_name(response.data.results[props.event_num].venue_name);
            setVenue_address(response.data.results[props.event_num].venue_address);
            setVenue_city(response.data.results[props.event_num].venue_city);
            setUrl(response.data.results[props.event_num].url);
            if(response.data.results[props.event_num].audience_type=="HYBRID"){
                setAudience_type("實體線上同步");
            }else if(response.data.results[props.event_num].audience_type=="In-person"){
                setAudience_type("實體活動");
            }else {
                setAudience_type("線上活動");
            }
        } 
        getEvent();
    },[]);
    const joinClick = () => {
        const ref = url;
        window.open(ref)
    };
    
    client.get('/search/event?chapter_id=1846&id=79355')
    .then((response) => {
        console.log(response.data.results);
    });
    //calendar
    // const addtocalendarClick = () => {
    //     gapi.load('client:auth2', () => {
    //         console.log('loaded client')
      
    //         gapi.client.init({
    //           apiKey: API_KEY,
    //           clientId: CLIENT_ID,
    //           discoveryDocs: DISCOVERY_DOCS,
    //           scope: SCOPES,
    //         })
      
    //         // gapi.client.load('calendar', 'v3', () => console.log('bam!'))
      
    //         gapi.auth2.getAuthInstance().signIn()
    //         .then(() => {
        
    //             var event = {
    //               'summary': 'Awesome Event!',
    //               'location': '800 Howard St., San Francisco, CA 94103',
    //               'description': 'Really great refreshments',
    //               'start': {
    //                 'dateTime': '2020-06-28T09:00:00-07:00',
    //                 'timeZone': 'America/Los_Angeles'
    //               },
    //               'end': {
    //                 'dateTime': '2020-06-28T17:00:00-07:00',
    //                 'timeZone': 'America/Los_Angeles'
    //               },
    //               'recurrence': [
    //                 'RRULE:FREQ=DAILY;COUNT=2'
    //               ],
    //               'attendees': [
    //                 {'email': 'lpage@example.com'},
    //                 {'email': 'sbrin@example.com'}
    //               ],
    //               'reminders': {
    //                 'useDefault': false,
    //                 'overrides': [
    //                   {'method': 'email', 'minutes': 24 * 60},
    //                   {'method': 'popup', 'minutes': 10}
    //                 ]
    //               }
    //             }
        
    //             var request = gapi.client.calendar.events.insert({
    //               'calendarId': 'primary',
    //               'resource': event,
    //             })
        
    //             request.execute((event:any) => {
    //               console.log(event)
    //               window.open(event.htmlLink)
    //             })
    //         })
    //     })
    // }



    return (
        <div id="recent-event">
            <div className='recent-event-block'>
                <div className='avatar-block'>
                    <img className='avatar' src={picture} ></img>
                </div>
                <div className='content-block'>
                <div className='tag-block'>
                <div className='tag' >Career Development</div>
                <div className='tag' >實體活動</div>
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