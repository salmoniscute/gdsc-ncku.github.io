import { ReactElement, useState } from "react";

import "./index.scss";

import { data, Member } from "./teamMemberData";

export default function TeamMember(): ReactElement {
    const [selectedYear, setSelectedYear] = useState<string>(
        Object.keys(data)[0]
    );
    return (
        <div id="team-member">
            <div className="year-selector">
                {Object.keys(data).map((year) => (
                    <div
                        data-selected={selectedYear === year}
                        onClick={() => {
                            setSelectedYear(year);
                        }}
                    >
                        {year}
                    </div>
                ))}
            </div>
            <h2>成員介紹</h2>
            <div className="members">
                {data[selectedYear].members.map((member) => (
                    <div className="member-card">
                        <img
                            className="member-photo"
                            src={member.photo}
                            alt="ERROR"
                        />
                        <div className="member-data">
                            <p id="member-name">{member.name}</p>
                            <p id="member-job-itle">{member.jobTitle}</p>
                            <p id="member-department">{member.department}</p>
                            <p id="member-introduction">
                                {member.introduction}
                            </p>
                            <div id="icon">
                                <a href={member.instagram} target="_blank">
                                    <img
                                        src="img/instagram.png"
                                        alt="ERROR"
                                        className="icon"
                                    />
                                </a>
                                <a href={member.github} target="_blank">
                                    <img
                                        src="img/github.png"
                                        alt="ERROR"
                                        className="icon"
                                    />
                                </a>
                                <a href={member.linkedin} target="_blank">
                                    <img
                                        src="img/linkedin.png"
                                        alt="ERROR"
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
