import {
    ReactElement,
    MouseEvent,
    useState,
} from "react";

import { data, Work } from "./projectData";

import "./index.scss"

export default function ProjectsPage(): ReactElement {
    const [selectedYear, setSelectedYear] = useState<string>(Object.keys(data)[0]);
    const [selectedWork, setSelectetWork] = useState<Work | undefined>();
    const [showWork, setShowWork] = useState<boolean>(false);

    return (
        <div id="projects">
            <h3>歷年專案</h3>
            <div className="selector">
                {Object.keys(data).map((context, key) => (
                    <div
                        key={key}
                        className="medium"
                        data-selected={selectedYear === context}
                        onClick={() => { setSelectedYear(context); }}
                    >{context}</div>
                ))}
            </div>
            <div className="banner">
                <img alt="banner" src={data[selectedYear].bannerUrl} />
                <h5>{selectedYear.split("-")[1]} 年 成果發表會</h5>
                <div className="normal">{data[selectedYear].overview}</div>
            </div>
            <h3>作品列表</h3>
            <div className="works">
                {
                    data[selectedYear].works.map((work, key) => (
                        <img key={key} alt="work preview" src={work.preview} onClick={() => {
                            setShowWork(true);
                            setSelectetWork(work);
                        }} />
                    ))
                }
            </div>
            <div className="selectedWork" data-show={showWork} onClick={(event: MouseEvent<HTMLDivElement>) => {
                if ((event.target as HTMLDivElement).className === "selectedWork") {
                    setShowWork(false);
                    setTimeout(() => {setSelectetWork(undefined);}, 500);;
                }
            }}>
                <div className="box">
                    <h5>{selectedWork?.title}</h5>
                    <div className="authors normal">{selectedWork?.authors.join(" ")}</div>
                    <div className="content">
                        <div className="intro">
                            <div className="tags small">{selectedWork?.tags.map((tag, key) => (
                                <div key={key} className="tag">{tag}</div>
                            ))}</div>
                            <div className="context small">{selectedWork?.context}</div>
                            <div className="links small">{Object.entries(selectedWork?.url ?? {}).map(([name, url], key) => (
                                <a key={key} href={url} target="_blank" rel="noreferrer">
                                    {name}<span className="ms">open_in_new</span>
                                </a>
                            ))}</div>
                        </div>
                        <div className="imgBlock">
                            <img alt="work preview" src={selectedWork?.preview} />
                        </div>
                    </div>
                    <div className="close ms" onClick={() => {
                        setShowWork(false);
                        setTimeout(() => {setSelectetWork(undefined);}, 500);}
                    }>close</div>
                </div>
            </div>
        </div>
    );
}
