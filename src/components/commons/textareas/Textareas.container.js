import styled from "styled-components";
import TextareaUI from "./Textareas.presenter"
import { useState } from "react"
import { useRecoilState } from 'recoil';
import {TextareaValueState} from '../../../commons/stores/Stores';


export default function Textareas(props) {



    


    return (
        <>
            <TextareaUI

                width={props.width}
                margin={props.margin}
                height={props.height}
                placeholder={props.placeholder}
                textareaErrorMessage={props.textareaErrorMessage}
                diaryState={props.diaryState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
            />
        </>
    )

}


