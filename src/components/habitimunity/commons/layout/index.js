import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import Header from '../../../commons/layout/header/Header.container';
import Footer from '../../../commons/layout/footer/Footer.container';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
// import { textState } from '../../../../pages/commons/stores/store';
import { userAccessToken, sessionStorage, persistAtom, userDetail } from '../../../../components/stores/index';
import axios from 'axios';
import { useEffect } from 'react';
import Search from '../search/search.container';
import Tabs from '../tabs/tabs.container';



// ======= 헤더, 풋터 제외할 페이지
const HIDDEN_SEARCHBAR = [

    // "/habitimunity/register",

]

const HIDDEN_TABS = [
    // "/habitimunity",
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
    const isHiddenSearchbar = HIDDEN_SEARCHBAR.includes(router.asPath);
    const isHiddenTabs = HIDDEN_TABS.includes(router.asPath);
    // const isShowHabitimunityLayout = SHOW_HABITIMUNITYLAYOUT.includes(router.asPath);


    const REG = [
        "/habitimunity/register"
    ]


    const isReg =  REG.includes(router.asPath);


 




    return (
        <>
            <Body>
                {/* {!isHiddenSearchbar && <Search />}
                {!isHiddenTabs && <Tabs />} */}
                <div>Habitimunity Layout Search랑 Tabs 우ㅣ</div>

                {isReg  && <>
                    <div>Habitimunity Layout Register 일 때만 등장</div>
                    <Search />
                </>}
                {/* {<div>Habitimunity Layout BoardId 일 때만 등장</div>} */}
                <Main>
                    <div>{props.children}</div>
                </Main>
                <div>Habitimunity Layout Search랑 Tabs 아래</div>

                {!isHiddenTabs && <Tabs />}

            </Body>
        </>
    )
}