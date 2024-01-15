import React from "react";
import "./index.scss";
import OrganChart from '../../assets/banner/organization_chart.png'

export default function Home(): React.ReactElement {
    const ConditionList = [
        {
            Position : "Lead",
            Description : "在 4~5 月左右開放學生上網申請成為 GDSC Lead，會由 Google Developers Relations 的區域主管進行審核。每間學校只會選出一位同學領導該學校社團，通過資料審查以及簡單的面談後，就能正式成為 GDSC Lead！",
            Requirement : [
                "成大在校學生",
                "承諾參與計畫一年",
                "熱衷於對社群產生影響",
                "對軟體開發與電腦科技有基礎了解"
            ],
            Responsibility : [
                "舉辦至少 4 次活動以上",
                "組建核心成員團隊，籌劃活動、講座或工作坊",
                "定期與區域主管分享交流"
            ],
            Welfare : [
                "Google Developer 電子獎章與實體證書",
                "Google 紀念禮品",
                "與 Google 工程師以及其他 GDSC 社群交流的機會"
            ],
            More : "更多詳情請參考 <a href='https://developers.google.com/community/gdsc/leads?hl=en' target='blank' >官方申請網站</a>，或是參加台灣各地區的 Lead 申請實體說明會。"
        },
        {
            Position : "Core member",
            Description : "核心成員就是所謂的「社團幹部」，通常在暑假 7~8 月開始招募，招募與審核方式由各校的 Lead 自行規劃，因此各校的組織架構不盡相同。以 GDSC NCKU 來說，職務分工包括但不限於總務、活動部長、公關部長、設計部長以及多種主題的專案組長。核心成員必須帶領部員或組員並協助 Lead 經營 GDSC NCKU 社群，另外能獲得 Google 頒發的電子獎章及實體證書以及獲得更多的教材資源及相關紀念品。",
            Requirement : [
                "成大在校學生",
                "承諾參與計畫一年",
            ],
            Responsibility : [
                "幫助 Lead 經營社群，並與其他部門溝通交流",
                "帶領部員或組員進行專案發想、開發與維護"
            ],
            Welfare : [
                "Google Developer 電子獎章與實體證書",
                "有機會獲得 Google 提供的教材資源及相關紀念品",
                "與 其他 GDSC 社群交流的機會",
                "從零到有開發軟體產品，豐富自身經歷與作品",
                "參與社員限定的活動與課程"
            ],
            More : "更多詳情請關注 GDSC NCKU <a href='https://www.facebook.com/gdscncku/' target='blank' >Faceboook</a>、<a href='https://www.instagram.com/gdsc.ncku/' target='blank' >Instagram</a> 或 <a href='https://discord.com/invite/3AgWYcZXZm' target='blank' >Discord</a>，並參加每年的核心成員招募說明會。"
        },
        {
            Position : "Team member",
            Description : "一般成員就是所謂的「社員」，通常在開學後 9 月開始招募。一般成員必須加入某個部門或專案組別，並跟其他夥伴們一起完成一項專案，在成果發表會中跟大家分享。一般成員可以獲得參加限定社課、工作坊與休閒活動的機會！",
            Requirement : [
                "承諾參與計畫一年"
            ],
            Responsibility : [
                "跟隨部長或組長進行專案開發",
                "參與實體社課"
            ],
            Welfare : [
                "Google Developer 電子獎章",
                "從零到有開發軟體產品，豐富自身經歷與作品",
                "參與社員限定的活動與課程"
            ],
            More : "更多詳情請關注 GDSC NCKU <a href='https://www.facebook.com/gdscncku/' target='blank' >Faceboook</a>、<a href='https://www.instagram.com/gdsc.ncku/' target='blank' >Instagram</a> 或 <a href='https://discord.com/invite/3AgWYcZXZm' target='blank' >Discord</a>，並參加每年的社員招募說明會。"
        }
    ];
    const posClass = ["Lead", "Core", "Team"]

    return (
        <div id='aboutBot'>
            <div className="picture"><img src={OrganChart} alt="GDSC-organization-chart" /></div>

            {
            ConditionList.map((item, index) => (
                <div>
                    <div className="title">如何成為 <span className={posClass[index]}>{item.Position}</span>？</div>
                    <div className="content">
                        {item.Description}
                        <ul>
                            <li>條件：<ul>{item.Requirement.map((item) =>(<li>{item}</li>))}</ul></li>
                            <li>職責：<ul>{item.Responsibility.map((item) =>(<li>{item}</li>))}</ul></li>
                            <li>福利：<ul>{item.Welfare.map((item) =>(<li>{item}</li>))}</ul></li>
                        </ul>
                        <div dangerouslySetInnerHTML={{ __html: item.More }} />
                    </div>
                </div>
            ))  
            }
            
            <div className="title">無法加入成員怎麼辦？</div>
            <div className="content">
                別擔心！我們會有許多公開的活動與社課，就算不是社員也能參加喔！只要進入我們的 <a href="https://gdsc.community.dev/national-cheng-kung-university/" target='blank'>活動報名平台</a>，點選 "Join us" 即可加入平台會員。每當有活動要舉辦時就會第一時間通知你，在活動頁點選 RSVP 就算報名成功喔！
                <div>（當然還是有一些活動是僅限社員參與的唷…😝）</div>
            </div>
        </div>
    );
}