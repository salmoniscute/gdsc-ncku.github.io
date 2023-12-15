import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import "./index.css";
import YearEvent from "../YearEvent";
import Presentation from "../../assets/banner/presentation_2023.jpg"
import SolutionChallenge from "../../assets/banner/solution_challenge.png"
import StudyJam from "../../assets/banner/study_jam.png"

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
            <h5 className="bold">年度活動</h5>
            <YearEvent image={Presentation} borderColor="#FAAB00" name="成果發表會" infor="第一屆NCKU GDSC的成果發表會在國立成功大學總圖書館盛大舉辦。匯集NLP, Flutter, 演算法視覺化, 網頁程式開發等多樣主題。"/>
            <YearEvent image={SolutionChallenge} borderColor="#EA4336" name="Solution Challenge" infor="第一屆NCKU GDSC的成果發表會在國立成功大學總圖書館盛大舉辦。
                匯集NLP, Flutter, 演算法視覺化, 網頁程式開發等多樣主題。" />
            <YearEvent image={StudyJam} borderColor="#34A852" name="Cloud Study Jam" infor="第一屆NCKU GDSC的成果發表會在國立成功大學總圖書館盛大舉辦。
                匯集NLP, Flutter, 演算法視覺化, 網頁程式開發等多樣主題。" />


        </div>
        
    );
}
