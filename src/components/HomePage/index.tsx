import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import FAQBar from "../FAQBar";

import image1 from "../../assets/page1.png";
import image2 from "../../assets/page2.png";
import image3 from "../../assets/page3.png";
import earth from "../../assets/gdsc_earth.gif";
import logo from "../../assets/gdsc_logo.gif";


export default function Home(): React.ReactElement {
    return (
    <div id="project"> 
        <div>
            <div className="card">
            <div className = "title"> 
                <h3>國立成功大學 </h3> 
                <h3>Google 學生開發者社群</h3>
            </div>
                <img src= {earth}  style={{ maxWidth: '40%', height: '40%' }}/>
            </div>
            <div className= "card"> 
            <div className = "left">
                <h5> 我們是誰？</h5>
                <p> GDSC 是一個由 Google 支持的學生社群計畫，期望能鼓勵學生們學習與應用 Google 技術，並提供成員們資源協助以及和專家互動交流的機會。</p>
                <p> GDSC 在全球超過 100 個國家/地區裡擁有上千個合作院校，是學生們學習和分享軟體開發技術的理想社群。</p>
                <p>GDSC NCKU 位於台南的國立成功大學，每年會從成大學生中遴選一位 GDSC Lead 負責帶領。我們希望透過人與人之間的溝通合作，運用軟體科技來解決生活中會面臨到的種種難題。</p>
            </div>
            <div className="right">
                <div className="ytvideo">
                <iframe
                 width="100%"
                 height="100%"
                 src="https://www.youtube.com/embed/UGE13GR9_CU"
                 title="YouTube 影片"
                 ></iframe>
                </div>
            </div>
         </div>
            <div className= "card"> 
            <div className = "mleft">
            <h5> 我們在做些什麼？</h5>
               <h6>課程活動</h6> 
               <p>舉辦講座或工作坊來分享軟體開發知識，也會透過聚會來活躍社群。</p> 
               <div className="button-container">
               <Link className="buttonla" to={"/events"}>參加活動<span className="ms">open_in_new</span></Link> 
               </div>
               <h6>專案實作</h6> 
               <p>利用資訊科技，與夥伴解決生活中的問題。</p> 
               <div className="button-container">
               <Link className="buttonla" to={"/projects"}>瀏覽專案<span className="ms">open_in_new</span></Link>
               </div>
               <h6>結交夥伴</h6> 
               <p>呼朋引伴，認識具有不同背景與專長的同學們。</p> 
               <div className="button-container">
               <Link className="buttonla" to={"/teams"}>認識成員<span className="ms">open_in_new</span></Link>
               </div>
            </div>
            <div className= "imgmiddle">
                <img src= {image1} style={{ maxWidth: '100%', height: 'auto' }}/>
                <img src= {image2} style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
            <div className= "imgright">
                <img src= {image3} style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
         </div>
            <div className="flowtext">
                <div className  ="main-text">
                加入我們！ <br></br>和來自不同領域的夥伴做些有趣的事。
                </div>
                <div className="floating-text text1">Data Science</div>
                <div className="floating-text text2">Artificial Intelligence</div>
                <div className="floating-text text3">Google Cloud Platform</div>
                <div className="floating-text text4">Unity</div>
                <div className="floating-text text5">UI/UX</div>
                <div className="floating-text text6">Web Dev</div>
            </div>
            <FAQBar />
            <div className="card">
                <div className="logo">
                    <img src= {logo} />
            </div>
        </div>
        </div>
        </div>       
    );
}
