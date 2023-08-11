import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { userAccessToken } from '../../components/stores';
import { useEffect, useState } from 'react';
import PostNotice from '../../components/habitimunity/list/notice/notice.container';
import PostList from '../../components/habitimunity/list/postList/postList.container';
import axios from 'axios';
import Search from '../../components/habitimunity/commons/search/search.container';
import Tabs from '../../components/habitimunity/commons/tabs/tabs.container';
import UserProfile from '../../components/habitimunity/list/userProfile/userProfile.container';
import Pagination from '../../components/habitimunity/list/pagination/pagination.container';
import Layout from '../../components/habitimunity/commons/layout';
import Link from 'next/link';
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


export default function Habitimunity() {

    const router = useRouter()
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
        // router.push("/comming-soon")
    }, [])

    const createPost = () => {
        console.log('createPost')

    }

    // useEffect(async () => {
    //     const response = await axios.get(`https://api.habiters.store/posts?page=1&category=DAILY`, {
    //         headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
    //     })
    //     console.log(response)
    // })


    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => setPosts(data));
    // }, []);



    return (
        <>
            <main>

                <Main>
                    <Content>
                        <CommunityHeader>
                            <Tabs />
                            <Search />
                        </CommunityHeader>
                        <CommnuityContent>
                            <CommnunityList>
                                <PostNotice />
                                <PostList
                                    posts={posts}
                                    limit={limit}
                                    offset={offset}
                                />
                                <Pagination
                                    total={posts.length}
                                    limit={limit}
                                    page={page}
                                    setPage={setPage}
                                />
                            </CommnunityList>
                            <UserProfile />
                        </CommnuityContent>
                    </Content>

                </Main>

            </main>

            {/* 2023-08-11 박미지 테스트용도입니다 */}
            {DataEx.map((data) =>
                <Link
                    key={data.id}
                    href={`/habitimunity/${data.id}`}>
                    <a>
                        <ItemEX
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            content={data.content} />
                    </a>
                </Link>
            )}
        </>
    )
}





//  {/* 2023-08-11 박미지 테스트용도입니다 */}
const DataEx = [
    {
        id: 1,
        title: "첫번째 제목",
        content: "첫번째 내용"
    },
    {
        id: 2,
        title: "두번째 제목",
        content: "두번째 내용"
    },
    {
        id: 3,
        title: "세번째 제목",
        content: "세번째 내용"
    },

]

const ItemStyle = styled.div`
    border : 1px solid var(--color-black7);
    padding : 10px;
    border-radius: 8px;
    cursor: pointer;

    `



const ItemEX = (props) => {
    return (
        <ItemStyle>
            <div>id : {props.id}</div>
            <div>title : {props.title}</div>
            <div>content : {props.content}</div>
        </ItemStyle>

    )
}
