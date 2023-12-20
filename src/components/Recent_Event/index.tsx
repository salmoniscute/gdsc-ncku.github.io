import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./index.scss";
export default function RecentEvent(): React.ReactElement {


    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
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

                    <p className='topic'>談軟體開發之前，你需要知道的事 ft. Hogan Lin</p>
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