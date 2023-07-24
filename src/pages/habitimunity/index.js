import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { userAccessToken } from '../../components/stores';
import { useEffect } from 'react';
import CommunityCategory from '../../components/units/habitimunity-category/Category.container';
import HabitimunityNotice from '../../components/habitimunity/habitimunity-notice/habitimunity-notice.container';
import HabitimunityBoard from '../../components/habitimunity/habitimunity-board/habitimunity-board.container';

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
const CommnuityContent = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;

    padding-top: 48px;
`
const CommnunityList = styled.div`
    width: 880px;
`
const UserActivites = styled.div`
    min-width: 280px;
    height: 230px;

    border: 1px solid #DBDBDB;
    border-radius: 16px;
`


export default function Habitimunity() {

    const router = useRouter()
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
        // router.push("/comming-soon")
    }, [])

    const createBoard = () => {
        console.log('createBoard')

    }


    return (
        <>
            <main>

                <Main>
                    <Content>
                        <CommunityHeader>
                            <CommunityCategory />
                            <div>
                                검색어를 입력해주세요.
                            </div>
                        </CommunityHeader>
                        <CommnuityContent>
                            <CommnunityList>
                                <HabitimunityNotice />
                                <HabitimunityBoard />
                            </CommnunityList>
                            <UserActivites>
                                <div>유저닉네임</div>
                                <div>
                                    <div>
                                        <span>북마크 수</span>
                                        <span>10</span>
                                    </div>
                                    <div>
                                        <span>작성한 글</span>
                                        <span>10</span>
                                    </div>
                                    <div>
                                        <span>작성한 댓글</span>
                                        <span>10</span>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn-large btn-primary-default body2-medium"
                                    onClick={createBoard}    
                                >
                                    게시글 작성하기
                                </button>
                            </UserActivites>
                        </CommnuityContent>
                    </Content>

                </Main>

            </main>
        </>
    )
}