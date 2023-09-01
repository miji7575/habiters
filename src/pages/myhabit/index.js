import styled from '@emotion/styled'
import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from "next/router";
import { userDetail, userAccessToken, visibleDateState } from '../../components/stores';
import { useRecoilState } from "recoil";




import MyHabitToggle from '../../components/units/toggle/Toggle.container';
import MonthlyHabitTracker from '../../components/myhabit/monthly-habit-tracker/MonthlyHabit.container';
import MonthlyRetrospects from '../../components/myhabit/monthly-retrospects/MonthlyRetrospects.container';





// ============================== Style ==============================
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
    font-family: 'Pretendard-Bold'; 
    font-size: 40px;
    line-height: 52px;
    font-weight: 700;     
    padding: 72px 0 48px 0;
    color: var(--color-black1);
    
    
   


`






export default function HabitTracker(props) {

    console.log("====여기는 MyhabitHabit입니다=====")
    console.log(props.user)

    // ============================== Function  ==============================

    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [user, setUser] = useRecoilState(userDetail);



    const router = useRouter()

    // 로그인이 되어있지 않다면 로그인화면으로 이동
    useEffect(() => {
        console.log(accessToken)
        if (!accessToken) {
            router.push("/login")
        }
        setUser(props.user)
    }, [])








    // ----- 월간 해빗 트래커 / 월간 회고 토글

    const [isMonthlyHabitTrackerOn, setIsMonthlyHabitTrackerOn] = useState(true)
    const [isMonthlyRetrospectsOn, setIsMonthlyRetrospectsOn] = useState(false)

    function MonthlyHabitTrackerOn() {
        setIsMonthlyHabitTrackerOn(true)
        setIsMonthlyRetrospectsOn(false)
        resetCalender()
    }

    function MonthlyRetrospectsOn() {
        setIsMonthlyRetrospectsOn(true)
        setIsMonthlyHabitTrackerOn(false)
        resetCalender()
    }


    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    // --- 오늘 날짜
    const todayDate = new Date()

    // --- 오늘 날짜로 이동
    const resetCalender = () => {
        setVisibleDate({
            ...visibleDate,
            year: todayDate.getFullYear(),
            month: (('00' + (Number(todayDate.getMonth()) + 1)).slice(-2))
        })
        // console.log("실행됨")
    }

    useEffect(() => {
        // console.log(visibleDate)
    })



    return (

        <>

            <main>

                <Main>
                    <Content>


                        <Title >
                            안녕하세요, {user.nickName}님!
                        </Title>

                        <MyHabitToggle
                            MonthlyHabitTrackerOn={MonthlyHabitTrackerOn}
                            MonthlyRetrospectsOn={MonthlyRetrospectsOn}
                        />


                        {isMonthlyHabitTrackerOn && <MonthlyHabitTracker
                            resetCalender={resetCalender} />}



                        {isMonthlyRetrospectsOn && <MonthlyRetrospects />}



                    </Content>
                </Main>
            </main>
        </>
    )
}


// 1. getServerSideProps 는 존재하는 단어이므로 변경 불가능.
// 2. 여기는 서버에서만 실행됨(Webpack프론트엔드 서버 프로그램)


export const getServerSideProps = async (context) => {


    console.log("====여기는 서버입니다=====")
    const accessToken = context.req.cookies.toooo
    const response = await axios.get('https://api.habiters.store/users/me', {
        headers: { Authorization: 'Bearer ' + accessToken }
    })
    return {
        props: {
            user: response.data.data
        }
    }
}



