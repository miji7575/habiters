import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { userAccessToken } from '../../components/stores';
import { useCallback, useEffect, useRef, useState } from 'react';
import PostNotice from '../../components/habitimunity/list/notice/notice.container';
import PostList from '../../components/habitimunity/list/postList/postList.container';
import axios from 'axios';
import Search from '../../components/habitimunity/commons/search/search.container';
import Tabs from '../../components/habitimunity/commons/tabs/tabs.container';
import UserProfile from '../../components/habitimunity/list/userProfile/userProfile.container';
import Pagination from '../../components/habitimunity/list/pagination/pagination.container';
import Link from 'next/link';
import CategoryTab from './category/[tabPath]';
import PostListWrapper from './list/PostListWrapper';

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



    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => setPosts(data));
    // }, []);

    // 230809 선택된 tab 상태 세팅
    const [selectedTab, setSelectedTab] = useState("전체");


    // 230809 tab의 글자와 category 값 매핑
    const tabToPageMapping = {
        전체: '',  // Map tabs to their corresponding page numbers
        공부: 'STUDY',
        운동: 'EXERCISE',
        건강: 'HEALTH',
        일상: 'DAILY',
        기타: 'ETC',
    };

    // 230809 tab이 바뀔때마다 tab의 값 세팅
    const handleTabChange = useCallback(async (tab) => {
        console.log(tab);
        setSelectedTab(tab);
        // setPage(tabToPageMapping[tab]);
    }, []);

    // // 230809 tab을 누를때 마다 데이터를 가져오기.
    // useEffect( async () => {
    //     // console.log('change')

    //     const response = await axios.get(`https://api.habiters.store/posts`, {
    //         headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken },
    //         params: {
    //             category: tabToPageMapping[selectedTab],
    //             page: 0
    //         }
    //     })

    //     // 230809 값이 있으면 값대로 세팅, 값이 없으면 빈배열
    //     if (response.data.data) {
    //         setPosts(response.data.data);
    //     } else {
    //         setPosts([]); // 데이터가 비어있을 경우 빈 배열로 초기화
    //     }

    // }, [selectedTab])



    const [page2, setPage2] = useState(0)
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false);
    const pageEnd = useRef()



    const fetchPosts = useCallback(async () => {
        if (loading) {
            return; // If loading, don't fetch again
        }

        setLoading(true); // Set loading to true before fetching

        try {
            const { data } = await axios.get(`https://api.habiters.store/posts`, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken },
                params: {
                    category: tabToPageMapping[selectedTab],
                    page: page2
                }
            });
            console.log(data.data);
            if (!data.data) {
                console.log('test');
                setLoading(false);
                setHasNextPage(false);
                return;
            }

            setPosts(prevPosts => [...prevPosts, ...data.data]);
            setPage2(prevPage => prevPage + 1);
            setHasNextPage(true);

        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    }, [loading, page2, selectedTab]);

    useEffect(() => {
        fetchPosts();
    }, []);


    useEffect(() => {
        console.log(loading);
    }, [loading]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    if (hasNextPage) {
                        fetchPosts(); // Use fetchPosts to load more
                    }
                }
            },
            { threshold: 1 }
        );

        if (pageEnd.current) {
            observer.observe(pageEnd.current);
        }

        return () => {
            if (pageEnd.current) {
                observer.unobserve(pageEnd.current);
            }
        };
    }, [fetchPosts]);








    return (
        <>
            <main>

                <Main>
                    <Content>
                        <CommunityHeader>
                            <Tabs onTabChange={handleTabChange} />
                            <Search />
                        </CommunityHeader>
                        <CommnuityContent>
                            <CommnunityList>
                                <PostNotice />
                                <PostList
                                    onTabChange={handleTabChange}
                                    posts={posts}
                                    limit={limit}
                                    offset={offset}
                                />
                                {/* <Pagination
                                    total={posts.length}
                                    limit={limit}
                                    page={page}
                                    setPage={setPage}
                                /> */}
                                <div ref={pageEnd}></div>
                            </CommnunityList>
                                <UserProfile />
                        </CommnuityContent>
                    </Content>
                </Main>
            </main>
        </>
    )
}