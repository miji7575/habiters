import { useState } from "react";
import TabUI from "./tabs.presenter";
import styled from "@emotion/styled";

const TabBox = styled.div`
    position: relative;

    width: 444px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color : var(--color-black4);
    font-weight: 400;
`

export default function Tab(props) {
    const tabs = ["전체", "공부", "운동", "건강", "일상", "기타"];
    const [activeTab, setActiveTab] = useState("전체");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        props.onTabChange(tab);
    };

    return (
        <>
            <TabBox>
                {tabs.map((tab) => (
                    <TabUI
                        key={tab}
                        value={tab}
                        active={activeTab === tab}
                        onClick={() => handleTabClick(tab)}
                    />
                ))}
            </TabBox>

        </>
    )
}