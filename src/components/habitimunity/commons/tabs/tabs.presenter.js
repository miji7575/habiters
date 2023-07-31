
import styled from "@emotion/styled"
import { useState } from "react";

// ============================== Style ==============================

const TabBtn = styled.div`
    width: 64px;
    height: 42px;
    text-align: center;

    line-height: 42px;

    border: 1px solid #CCCCCC;
    border-radius: 50px;

    background-color: ${(props) => (props.active ? "#937CF1" : "transparent")};
    color: ${(props) => (props.active ? "white" : "inherit")};
    font-weight: ${(props) => (props.active ? "700" : "inherit")};

    cursor: pointer;
`

export default function TabUI(props) {

    return (
        <>
            <TabBtn 
                active={props.active} 
                onClick={props.onClick}
            >
                {props.value}
            </TabBtn>
        </>
    )
}