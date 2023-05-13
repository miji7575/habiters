import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import Header from './header/Header.container';
import Footer from './footer/Footer.container';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
// import { textState } from '../../../../pages/commons/stores/store';
import { userState, sessionStorage, persistAtom, userDetail } from '../../../commons/stores/Stores';
import axios from 'axios';
import { useEffect } from 'react';



// ======= 헤더, 풋터 제외할 페이지
const HIDDEN_HEADERS = [
    "/",
    "/login",
    "/signup",
]

const HIDDEN_FOOTERS = [
    "/comming-soon"
]


export default function Layout(props) {

    // ============================== Style ==============================

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

    const router = useRouter();
    const isHiddenLayout = HIDDEN_HEADERS.includes(router.asPath);
    const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);




    // ============================== Function  ==============================

    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [user, setUser] = useRecoilState(userDetail)

    useEffect(() => {
        getUserData()
        console.log(user)
    }, [accessToken])


    // ======= 유저의 정보 get
    const getUserData = async () => {

        console.log("레이아웃==================시작====")
        if (accessToken) {
            console.log("레이아웃==================시작====")
            console.log("토큰" + accessToken)
            const response = await axios.get('http://223.130.162.40:8080/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })


            console.log(response.data.data)
            setUser(response.data.data)
            console.log("레이아웃==================끝   ====")
            return
        }
        console.log(" 레이아웃 토큰없음.")

    }


    //   ===========inputTest ===========
    // const [text, setText] = useRecoilState(textState);

    // const onChange = (event) => {
    //     setText(event.target.value);
    // };
    //==============================================


    return (
        <>
            {/* <div>
                <input type="text" value={text} onChange={onChange} />
                <br />
                Echo: {text}
            </div> */}


            <head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </head>

            <Body>
                {!isHiddenLayout && <Header />}
                <Main>
                    <div>{props.children}</div>
                </Main>
                {!isHiddenLayout && !isHiddenFooter && <Footer />}
            </Body>

        </>
    )
}