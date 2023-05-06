import styled from "styled-components";
import TextareaUI from "./Textareas.presenter"
import { useState } from "react"


export default function Textareas(props) {

 



    return (
        <>
            <TextareaUI
             width={props.width}
             margin={props.margin}
             height={props.height}
            placeholder={props.placeholder}
            textareaErrorMessage={props.textareaErrorMessage}
            
            />
        </>
    )

}


