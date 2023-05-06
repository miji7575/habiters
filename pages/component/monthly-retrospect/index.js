import { useState } from "react"
import styled from '@emotion/styled'
// import LayoutHeader from "../src/components/commons/header/Header.container"
// import LayoutFooter from "../src/components/commons/footer/Footer.container"
import { useRouter } from "next/router"
// import LayoutHeader from "../src/components/commons/header/Header.container"

import Retrospect from '../../../src/components/units/monthly-retrospects/retrospect/Retrospect.container';
import TodayRetrospect from '../../../src/components/units/today-retrospects/TodayRetrospect.container';
import MonthlyRetrospects from "../../../src/components/units/monthly-retrospects/MonthlyRetrospects.container";

// const Body = styled.div`

//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;

// `

// --------------스타일----------------
const Main = styled.div`
    display: flex;
    justify-content: center;

`

const Content = styled.div`
 width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
`

const Title = styled.div`
    padding: 72px 0 48px 0;
    width: 500px;
`

const ToggleBox = styled.div`
padding-bottom: 64px;
`

const MonthlyRetrospectContainer = styled.div`
    display: grid;
    grid-template-columns: 880px 280px;
    grid-template-rows: 32px 1fr;
    column-gap: 20px;
    row-gap: 24px;
    justify-items: center;
`



const DateBox = styled.div`
    display: inline-flex;
    align-items: center;
    color: #000000; 

`

const ArrowLeft = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-left.svg) no-repeat;
    cursor: pointer;
    padding: 0 4px;
    &:hover{
        position: relative;
        right: 4px;
    }
    `

const ArrowRight = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-left.svg) no-repeat;
    cursor: pointer;
    padding: 0 4px;
    transform: rotate(180deg);
    &:hover{
        position: relative;
        left: 4px;
    }
    `




// ---오늘의 회고 박스 끝------





// ---------월간회고없을 떄X
const MonthlyRetrospectNone = styled.div`
    align-self: center;

`
const MonthlyRetrospectNoneImg = styled.img`
    width: 148px;
    height: 110px;
`




// --------------함수----------------




// 헤더작업중
export default function MonthlyRetrospect() {






    return (

        <>

            <main>

                <Main>
                    <Content>


                        <Title className="headline1 color-black1">
                            안녕하세요, 해비터_해비터님!
                        </Title>

                        <ToggleBox>
                            <div className="a-tab-box headline5 ">

                                <input type="radio" id="트래커" name="tabs" checked hidden />
                                <label for="트래커">
                                    <div className="a-tab-content">월간 해빗 트래커</div>
                                </label>

                                <input type="radio" id="회고" name="tabs" hidden />
                                <label for="회고">
                                    <div className="a-tab-content">월간 회고</div>
                                </label>

                            </div>
                        </ToggleBox>

                        <MonthlyRetrospects />
  

                    </Content>
                </Main>
            </main>
        </>
    )
}

