

import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from 'recoil'
import { userAccessToken } from '../../../components/stores';
import { useEffect, useState } from 'react';
import HabitimunityNotice from '../../../components/habitimunity/list/notice/notice.container';

import axios from 'axios';
import Search from '../../../components/habitimunity/commons/search/search.container';
import Tabs from '../../../components/habitimunity/commons/tabs/tabs.container';
import UserProfile from '../../../components/habitimunity/list/userProfile/userProfile.container';
import CommunityArticle from '../../../components/habitimunity/detail/communityArticle/communityArticle.container';
import CommentInput from '../../../components/habitimunity/detail/commentInput/commentInput.container';
import CommentChain from '../../../components/habitimunity/detail/commentChain/commentChain.container';
import { BtnLargePrimary } from '../../../components/commons/buttons';
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
    display: flex;
    flex-direction: column;
`


const SubmitButton = styled(BtnLargePrimary)`
    align-self: center;
    width : 380px;
    margin-top: 36px;
   
`
// -----------------스타일




export default function BoardDetail(props) {
    const router = useRouter()
    const { boardId } = router.query;

    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

    const getBoardDatails = async () => {

        if (accessToken) {
            const response = await axios.get(`https://api.habiters.store/posts/${boardId}`, {
                postId: boardId
            }, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })

            // console.log(response)

            return
        }

    }


    // boardDetailDataEX
    const category = [{name:"일상",color:"purple"},{name:"운동",color:"skyBlue"},{name:"기타",color:"green"},{name:"일상",color:"purple"}]
    const boardDetailData = {
        id: boardId,
        regDate: "2023-03-03",
        category: category[boardId % 3],
        title: boardId + "번째글 제목",
        content: "영양제 다들 어떤거 먹고있어?\n나는 매일 종합비타민이랑 루테인이랑 유산균 먹는데..\n다른 더 좋은거 있나 궁금해서ㅋㅋㅋㅋ\n뭐 먹는지 투표 좀 해줘라~"
        ,
        writerId: "76",
        hit: "3",
        like: "5",
        habiti: [{ like: "3" }, { sad: "2" }, { surprise: "0" }, { angry: "13" }],
        comment: "5"
    }




    return (
        <>


            <Main>
                <Content>
                    <CommunityHeader>
                        <Tabs />
                        <Search />
                    </CommunityHeader>
                    <CommnuityContent>
                        <CommnunityList>
                            <HabitimunityNotice />
                            <CommunityArticle
                                boardDetailData={boardDetailData}
                            />
                            <CommentInput />
                            <CommentChain />
                            <SubmitButton onClick={()=>{router.push("/habitimunity")}}>글 목록</SubmitButton>
                        </CommnunityList>
                        <UserProfile />
                    </CommnuityContent>
                </Content>

            </Main>


        </>
    )
}