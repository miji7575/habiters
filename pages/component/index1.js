import { useState } from "react"
import { useRouter } from "next/router"
import styled from '@emotion/styled'
import LayoutHeader from "../../src/components/commons/layout/header/Header.container"
import LayoutFooter from "../../src/components/commons/layout/footer/Footer.container"

import Textarea from '../../src/components/commons/textareas/Textareas.container';



import {Inputs, InputsTest} from "../../src/components/commons/inputs/Inputs.container"


const Body = styled.div`

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

`
const Main = styled.div`
    height: 100%;
    position: relative;

`


const HIDDEN_HEADERS = [
    "./intro"
]


const placeholder = "텍스트에리어 플레이스홀더"
const textareaErrorMessage = ""


// 헤더작업중
function Index() {






    return (

        <>
            <Body>
                <LayoutHeader />
                    <Main>
                        <Inputs />
                        <InputsTest />
                        <div>여긴 메인페이지</div>
                        
                        <Textarea 
                          placeholder={placeholder}
                          textareaErrorMessage={textareaErrorMessage}/>
                        {}
                    </Main>
                <LayoutFooter />
            </Body>


        </>
    )
}

export default Index