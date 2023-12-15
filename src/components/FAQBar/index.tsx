import React, { useState } from 'react'

import './index.css';

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQBar(): React.ReactElement {
    const data = [
        {
          title: '什麼是 GDSC、GDG 與 GDE?',
          detail:
            'Google Developer Student Clubs (GDSC) 是一個由Google支持的學生社群，旨在通過學生與專業開發人員聯繫，促進學生對 Google 開發人員技術的學習和應用，並為學生提供與技術專家互動和學習的機會。 GDSC 在全球有超過 100 個國家/地區的 1000 多個社群。GDSC 是學生們學習和分享技術的理想社群，並且能夠與技術行業的其他開發人員和專家建立聯繫。',
        },
        {
          title: '如何成為 Lead、一般成員或核心成員？',
          detail:
            'Lead 是由 Google 的 Developer Relation 進行招募的，而 GDSC NCKU 的核心成員與一般成員則由上任後的 Lead 進行招募，更多詳情請查看「如何加入成員」。',
        },
        {
          title: '我只要加入活動報名平台上的 GDSC NCKU Chapter 就是社員了嗎？',
          detail:
            '不是，<a href="https://gdsc.community.dev/national-cheng-kung-university/" target="_blank">Bevy活動報名平台</a>上的活動是我們用來管理活動報到的平台。因為許多活動是免費公開，所以就算不是社員也能夠參與活動！如果是僅限社員參與的活動的話，我們會放在 Discord 的社員限定頻道讓社員報名喔。',
        },
        {
          title: '當社員的話需要繳社費嗎？',
          detail:
            '是的，雖然我們會跟成大校方與 Google 申請部分預算，但因為並非完全贊助且行政流程繁雜。因此需要收取社費來事先支付講師費、場地費、器材費…等等費用，請多多擔待。',
        },
    ];
    const [isRotated, setIsRotated] = useState<boolean[]>(Array(data.length).fill(false));
    const showDetail = (index: number) => {
        const updatedRotated = [...isRotated];
        updatedRotated[index] = !updatedRotated[index];
        setIsRotated(updatedRotated);
      };
    return (
        <div className="faq">
            {data.map((item, index) => (
                <div onClick={() => showDetail(index)}>
                    <div className='title'>
                        <h2>{ item.title }</h2>
                        <IoIosArrowDown className={`rotate-icon ${isRotated[index] ? 'rotated' : ''}`}/>
                    </div>
                    <p className={isRotated[index] ? 'show' : ''} dangerouslySetInnerHTML={{ __html: item.detail }} />
                    <hr></hr>
                </div>
            ))}
        </div>
        
    );
} 