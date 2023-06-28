import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import Header from './header/Header.container';
import Footer from './footer/Footer.container';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
// import { textState } from '../../../../pages/commons/stores/store';
import { userAccessToken, sessionStorage, persistAtom, userDetail } from '../../../components/stores';
import axios from 'axios';
import { useEffect } from 'react';



// ======= 헤더, 풋터 제외할 페이지
const HIDDEN_HEADERS = [
    "/",
    "/login",
    "/signup",
]

const HIDDEN_FOOTERS = [
    // "/comming-soon"
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
    min-height: calc(100vh - 292px);
    position: relative;
    `


    // ============================== Function  ==============================
    const router = useRouter();
    const isHiddenLayout = HIDDEN_HEADERS.includes(router.asPath);
    const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);







    return (
        <>
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