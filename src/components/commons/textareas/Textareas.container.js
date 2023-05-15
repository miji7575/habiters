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
                todayRetrospectState={props.todayRetrospectState} /* 오늘 작성한 적이 있으면 non editable */
            />
        </>
    )

}


