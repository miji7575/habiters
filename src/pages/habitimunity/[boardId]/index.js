

import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
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
    const [boardDetailData, setBoardDetailData] = useState('')
    const [boardCommentData, setBoardCommentData] = useState('')

    //2023-08-19 박미지 --- 게시글 상세내용 불러오기
    const getBoardDatails = async () => {

        if (accessToken && boardId) {
            const response = await axios.get(`https://api.habiters.store/posts/${boardId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            })

            setBoardDetailData(response.data.data)
            setBoardCommentData(response.data.data.comments)
            console.log(response.data.data)
            return
        }

    }

    useEffect(() => {
        getBoardDatails()
    }, [])



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
                            <CommentInput
                                boardId={boardId}
                                getBoardDatails={getBoardDatails}
                                name={"newComment"}
                            />

                            {Object.entries(boardCommentData).map(([key, value]) =>
                                <CommentChain
                                    boardId={boardId}
                                    key={value.id}
                                    value={value}
                                    getBoardDatails={getBoardDatails}
                                />)}

                            <SubmitButton onClick={() => { router.push("/habitimunity") }}>글 목록</SubmitButton>
                        </CommnunityList>
                        <UserProfile />
                    </CommnuityContent>
                </Content>

            </Main>


        </>
    )
}