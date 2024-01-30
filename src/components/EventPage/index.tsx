import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import "./index.scss";
import YearEvent from "../YearEvent";
import Presentation from "../../assets/banner/presentation_2023.jpg"
import SolutionChallenge from "../../assets/banner/solution_challenge.png"
import StudyJam from "../../assets/banner/study_jam.png"
import RecentEvent from "../Recent_Event";

export default function Event(): React.ReactElement {
    return (
        <div id="event">
            <h5 className="bold">近期活動</h5>
            <div>
                <RecentEvent event_num={0}/>
            </div>

            <h5 className="bold">行事曆</h5>
            <div className="calendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=c_c1282d53761f762b713c492f8a8b70ebf9aed7213851ad54871551d95df6e64f%40group.calendar.google.com&ctz=Asia%2FTaipei"
                    style={{ border: 0 }}
                    frameBorder="0"
                    scrolling="no"
                ></iframe>

            </div>
            <h5 className="bold">年度活動</h5>
            <YearEvent image={Presentation} borderColor="#FAAB00" name="成果發表會" infor="每一屆 GDSC NCKU 在學期即將結束前，將會舉辦盛大的成果發表。讓社團內眾多的專案小組有個發揮的舞台，向大眾展示該學年度的專案成果。" link="#"/>
            <YearEvent image={SolutionChallenge} borderColor="#EA4336" name="Solution Challenge" infor="Solution Challenge 的使命，是用 Google 技術x來達成一或多個聯合國的 17 項永續發展目標（SDGs）。自 2020 年起，世界各地的 GDSC 成員共同攜手合作，打造創新的方案來解決全球最迫切的難題，歡迎全球各大學的 GDSC 成員參加！" link="https://developers.google.com/community/gdsc-solution-challenge?hl=en"/>
            <YearEvent image={StudyJam} borderColor="#34A852" name="Cloud Study Jam" infor="Google Study Jam 培訓計劃，讓參加的開發人員能夠以自己的步調，學習多種 Google 產品的基礎技能。在最近的 GenAI 主題中，除了學習基礎的 Google Cloud 平台之外，也增加關於 Generative AI 相關的服務。" link="https://rsvp.withgoogle.com/events/csj-tw-s4"/>


        </div>

    );
}
