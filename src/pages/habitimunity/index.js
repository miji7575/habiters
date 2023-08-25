import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { activeTabState, userAccessToken } from '../../components/stores';
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
    width: 63vw;
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

const CommunitySide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;

`

const TopButton = styled.div`
    position: sticky;
    top: 290px;

    width: 80px;
`
const ArrowUpIcon = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;

    margin-right: 4px;

    background-color: var(--color-white);

    mask-size: 16px 16px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px 16px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-arrow-up-line.svg); 
    -webkit-mask-image: url(/image/icon/icon-arrow-up-line.svg); 
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


    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page_old, setPage_old] = useState(1);
    const offset = (page_old - 1) * limit;


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

    const [activeTab, setActiveTab] = useRecoilState(activeTabState);

    // 230809 tab이 바뀔때마다 tab의 값 세팅
    const handleTabChange = useCallback(async (tab) => {
        console.log(tab);
        setSelectedTab(tab);
        setActiveTab(tab)
        setPage(0);
        // setPage(tabToPageMapping[tab]);
    }, [selectedTab]);
    

    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false);
    const pageEnd = useRef()


    // 게시글 리스트 230823
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
                    page: page
                }
            });
            console.log(data.data);
            if (!data.data && page == 0) {
                setPosts([])
            }
            if (!data.data) {
                console.log('test');
                setLoading(false);
                setHasNextPage(false);
                return;
            }

            if (page === 0) {
                setPosts(data.data)
            } else{
                setPosts(prevPosts => [...prevPosts, ...data.data]); 
                
            }

            setPage(prevPage => prevPage + 1);
            setHasNextPage(true);

        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    }, [loading, page, selectedTab]);

    useEffect(() => {
        fetchPosts();
    }, [selectedTab]);


    // useEffect(() => {
    //     console.log(loading);
    // }, [loading]);

    useEffect(() => {
        handleTabChange('전체')
    },[])

    // 무한스크롤을 위한 Intersection Observer API 사용 230823
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


    // 230823 TOP버튼
    const goTop = () => {
        window.scrollTo(0, 0)
    }






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
                            <CommunitySide>
                                <UserProfile />
                                <TopButton
                                    className="body3-medium btn btn-medium btn-primary-default btn-width-fit-content"
                                    onClick={goTop}
                                >   
                                    <ArrowUpIcon />
                                    <span>TOP</span>
                                </TopButton>
                            </CommunitySide>

                        </CommnuityContent>
                    </Content>
                </Main>
            </main>
        </>
    )
}