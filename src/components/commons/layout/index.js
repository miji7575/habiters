import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import Header from './header/Header.container';
import Footer from './footer/Footer.container';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import { textState } from '../../../../pages/commons/stores/store';
import { userState, sessionStorage, persistAtom } from '../../../commons/stores/Stores';
import axios from 'axios';
import { useEffect } from 'react';




const HIDDEN_HEADERS = [
    "/",
    "/login",
    "/signup",

]

const HIDDEN_FOOTERS = [
    "/comming-soon"
]


export default function Layout(props) {
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
    // console.log(router.asPath)
    const isHiddenLayout = HIDDEN_HEADERS.includes(router.asPath);
    const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);




    //   ===========inputTest ===========
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };
    //==============================================




    //=================TokenTest ======================== 
    // const [userToken, setUserToken] = useRecoilState(userState)
    
    
    
    
    const [accessToken, setAccessToken] = useRecoilState(userState)
    setAccessToken(() => router.query.accessToken)
    console.log(accessToken)

    // 
  

    useEffect(() => {
        localStorage.setItem("accessToken",accessToken)
        console.log(accessToken)
        // if(accessToken){
            
        // }
       
        console.log(localStorage)
        if (localStorage.getItem("accessToken")) {
            setAccessToken(localStorage.getItem("accessToken") || "")
            console.log(accessToken)
        }
    }, [accessToken])
    
    //=================TokenTest ======================== 

    return (
        <>
            {/* <div>
                <input type="text" value={text} onChange={onChange} />
                <br />
                Echo: {text}
            </div> */}




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