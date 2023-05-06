import { useState } from "react"
import styled from '@emotion/styled'
import { useRouter } from "next/router"

import Calender from "../../src/components/units/monthly-habittracker/calender/Calender.container"
import HabitBox from '../../src/components/units/day-check/habit-box/HabitBox.container';
import TodayHabitCheck from '../../src/components/units/day-check/list/List.container';

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

const MonthlyHabitTrackerContainer = styled.div`
    display: none;
    /* display: grid; */
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










// --------------함수----------------

// const [inputValue, setInputvalue] = useState('')
// const [calender, setTodoList] = useState([])
const addItem = () => {
    // console.log("inputValue값은?", inputValue)
    // setTodoList([...todoList, inputValue])
    // console.log("todoList값은??", todoList)
}

const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const day = ["월","화","수","목","금","토","일",]
// {props.todoLists.map((date) => <TodoItem date={date}/>)}

// const a = date.map((date) => (<Date date={date}/>))


// 헤더작업중
export default function HabitTracker() {






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

                        <MonthlyHabitTrackerContainer>

                            <DateBox>
                                <ArrowLeft />
                                <span className="headline4"><span>2023</span>.<span>03</span></span>
                                <ArrowRight />
                            </DateBox>

                            {/* <!-- ---  일별확인  ---  --> */}
                            <TodayHabitCheck />
                            



                            {/*해빗트래커 컨텐츠 박스 */}
                            <Calender />



                        </MonthlyHabitTrackerContainer>

                        <MonthlyRetrospectContainer>


                        </MonthlyRetrospectContainer>


                    </Content>
                </Main>
            </main>
        </>
    )
}

