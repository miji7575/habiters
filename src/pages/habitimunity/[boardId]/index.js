

import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { userAccessToken } from '../../../components/stores';
import { useEffect } from 'react';
import HabitimunityNotice from '../../../components/habitimunity/habitimunity-notice/habitimunity-notice.container';
import HabitimunityPost from '../../../components/habitimunity/list/postList/postList.container';
import axios from 'axios';
import Search from '../../../components/habitimunity/commons/search/search.container';
import Tabs from '../../../components/habitimunity/commons/tabs/tabs.container';
import UserProfile from '../../../components/habitimunity/list/userProfile/userProfile.container';
import CommunityArticle from '../../../components/habitimunity/detail/communityArticle/communityArticle.container';
// ============================== Style ==============================
const Main = styled.div`
    display: flex;
    justify-content: center;

    padding-top: 72px;
`

const Content = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 200px;

`

const CommunityHeader = styled.div`
    width: 880px;
    display: flex;
    justify-content: space-between;
`

const SearchInputBox = styled.div`
    width: 280px;
    height: 48px;

    border: 1px solid #DBDBDB;
    border-radius: 8px;
`

const CommnuityContent = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;

    padding-top: 48px;
`
const CommnunityList = styled.div`
    width: 880px;
`


// -----------------스타일




export default function BoardDetail() {





   



   


    

    return (
        <>
       
            <div>BoardDetail</div>
                <Main>
                    <Content>
                        <CommunityHeader>
                            <Tabs/>
                            <Search />
                        </CommunityHeader>
                        <CommnuityContent>
                            <CommnunityList>
                                <HabitimunityNotice />
                                <CommunityArticle />
                            </CommnunityList>
                            <UserProfile />
                        </CommnuityContent>
                    </Content>

                </Main>

          
        </>
    )
}