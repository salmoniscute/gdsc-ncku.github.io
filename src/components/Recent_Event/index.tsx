import React ,{ useState, useEffect } from 'react';
import axios from "axios";
import "./index.scss";
import { eventNames } from 'process';
export default function RecentEvent(): React.ReactElement {
    let group_id = 1846;
    let event_title = "defualt";
    let description_short;
    let start_date;
    let picture;
    let venue_name;
    let venue_address;
    let venue_city;
    let url;
    
    const client = axios.create({
    baseURL: "https://gdsc.community.dev/api/" 
    });
    const getEvent = () => client.get('/chapter/1846/event?status=Published&fields=id,title,url,description_short,start_date,event_type,event_type_title,picture,venue_name,venue_address,venue_city');  

    getEvent()
        .then((response) => { 
            console.log(response.data.results[0]);

            event_title = response.data.results[0].title;
            console.log(event_title);

            description_short = response.data.results[0].description_short;
            console.log(description_short);

            start_date = response.data.results[0].start_date;
            console.log(start_date);

            picture = response.data.results[0].picture;
            console.log(picture);

            venue_name = response.data.results[0].venue_name;
            console.log(venue_name);

            venue_address = response.data.results[0].venue_address;
            console.log(venue_address);

            venue_city = response.data.results[0].venue_city;
            console.log(venue_city);

            url = response.data.results[0].url;
            console.log(url);
            
        })
        .catch( (error) => console.log(error));

    

    return(
        <div id="recent-event">
            <div className='recent-event-block'>
                <div className='avatar-block'>
                    <img className='avatar' src="../../../img/og_image.jpg" ></img>
                </div>
                <div className='content-block'>
                <div className='tag-block'>
                <p className='tag' >Career Development</p>
                <p className='tag' >實體活動</p>
                </div>
                
                <p className='topic'>{event_title}</p>
                <p className='time'>Wednesday, December 6, 20237:00 PM – 9:00 PM</p>
                <p className='location'>成大資訊系舊館2樓 4263階梯教室大學路1號Tainan, 704</p>
                <p className='introduction'>本次講座邀請到成大學長 Hogan Lin，同時也是 Instagram 軟體教學專頁 @hogan.tech 的創辦人，為我們帶來 #敏捷開發 #軟體面試 #工程師職涯 等主題的實務經驗分享。相信能帶給你滿滿的技術知識，讓你面對快速變動的軟體產業做好充足準備 😎 </p>
                
                <div className='button-block'>
                <button className='join' >立即加入</button>
                <button className='addtocalendar' >加入行事曆</button>
                </div>
                </div>
            </div>

        </div>
    );
}