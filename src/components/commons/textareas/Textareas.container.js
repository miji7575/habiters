import styled from "styled-components";
import TextareaUI from "./Textareas.presenter"
import { useState } from "react"
import { useRecoilState } from 'recoil';
import {TextareaValueState} from '../../../commons/stores/Stores';

export default function Textareas(props) {

 

    const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)

    return (
        <>
            <TextareaUI
             width={props.width}
             margin={props.margin}
             height={props.height}
            placeholder={props.placeholder}
            textareaErrorMessage={props.textareaErrorMessage}
            onChange={(e) => setTextareaInput(e.target.value)}
            value={textareaInput}
            
            />
        </>
    )

}


