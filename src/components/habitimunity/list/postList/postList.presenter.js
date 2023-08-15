import styled from "@emotion/styled"
import Label from "../../commons/label/label.container"
import Bookmark from "../../commons/bookmark/bookmark.container"
import UserData from "../../commons/userData/userData.container"
import FeedData from "../../commons/feedData/feedData.container"
import VoteItem from "../Items/vote/voteItem.container"
import { useEffect, useState } from "react"
import Link from "next/link"

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 880px;
    /* height: 204px; */

    border: 1px solid var(--color-black7);
    border-radius: 8px;

    margin-bottom: 28px;

`

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 832px;
    /* height: 164px; */

    padding-top: 20px;
    padding-bottom: 20px;

`

const Post = styled.div`
    width: 100%;
    /* height: 116px; */

    display: flex;
    flex-direction: column;
    gap: 12px;

    

`

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;

    width: 832px;
    height: 32px;

`
const PostTitle = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    cursor: pointer;
`

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    cursor: pointer;
`
const PostImage = styled.img`
    width: 76px;
    height: 76px;

    display: inline-block;

    border: 1px solid var(--color-black7);

`

const PostText = styled.div`
    width: 832px;
    min-height: 72px;
    max-height: 72px;
    
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5rem;


    /* margin-bottom: 24px; */
`

const PostInformation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 832px;
    /* height: 24px; */

    color: var(--color-black3);

    /* padding-top: 12px; */

`

export default function PostListUI(props) {

    // 230802 투표가 있는지 없는지
    const [hasVoteItem, setHasVoteItem] = useState(false);
    // 230802 이미지가 있는지 없는지
    const [hasImageItem, setHasImageItem] = useState(false);

    // 카테고리에 따라서 Label 처리
    const categoryOptions = {
        STUDY: {
            value: 'STUDY',
            text: '공부',
            default: 'orange',
        },
        EXERCISE: {
            value: 'EXERCISE',
            text: '운동',
            default: 'skyBlue',
        },
        HEALTH: {
            value: 'HEALTH',
            text: '건강',
            default: 'green',
        },
        DAILY: {
            value: 'DAILY',
            text: '일상',
            default: 'purple',
        },
        ETC: {
            value: 'ETC',
            text: '기타',
            default: 'gray',
        }
    };

    const getRandomWord = (images) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    const images = ['Hope', 'Lucky', 'Dream'];
    
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        setSelectedImage(getRandomWord(images));
    }, []);





    return (
        <>  
            {/* pagination test data처리용 */}
            {props.posts.slice(props.offset, props.offset + props.limit).map(({ category, id, title, content, createDate, views, numOfComments, numOfEmojis }) => (
                <PostContainer key={id}>
                    <PostBox>
                        <Post>
                            <PostHeader>
                                <PostTitle>
                                    <Label
                                        text={categoryOptions[category].text}
                                        default={categoryOptions[category].default}
                                        onTabChange={props.onTabChange}
                                    />
                                    <Link href={`/habitimunity/${id}`}>
                                        <div className="body2-bold">
                                            {title}
                                        </div>
                                    </Link>
                                </PostTitle>

                                <Bookmark
                                    bookmarked={false}
                                />
                            </PostHeader>
                            <Link href={`/habitimunity/${id}`}>
                                <PostContent
                                    className="body2-regular"
                                >
                                    {hasVoteItem && <VoteItem progress={true} />}

                                    <div
                                        style={{ display: 'flex', gap: '16px' }}
                                    >
                                        {hasImageItem && <PostImage src="/image/logo-habiters.svg" />}
                                        <PostText>
                                            {content}
                                        </PostText>
                                    </div>
                                </PostContent>
                            </Link>
                        </Post>

                        <PostInformation
                            className="caption1-regular"
                        >
                            <UserData
                                createDate={createDate}
                                selectedImage={selectedImage}
                            />
                            <FeedData
                                views={views}
                                numOfComments={numOfComments}
                                numOfEmojis={numOfEmojis}
                            />
                        </PostInformation>
                    </PostBox>
                </PostContainer>



            ))}


            {/* sample */}
            {/* <PostContainer>
                <PostBox>
                    <Post>
                        <PostHeader>
                            <PostTitle>
                                <Label
                                    value='운동'
                                    default='skyBlue'
                                />
                                <div className="body2-bold">
                                    제목을 기입해줍니다.
                                </div>
                            </PostTitle>
                            <Bookmark
                                bookmarked={true}
                            />
                        </PostHeader>
                        <PostContent
                            className="body2-regular"
                        >   
                            {hasVoteItem && <VoteItem progress={true} />}

                            <div 
                                style={{display: 'flex', gap: '16px'}}
                            >
                                {hasImageItem && <PostImage src="/image/logo-habiters.svg" />}
                                <PostText>
                                    내용 1줄일 경우 / 피드 최소 길이 <br/>
                                    내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이    
                                </PostText>
                            </div>
                        </PostContent>
                    </Post>

                    <PostInformation
                        className="caption1-regular"
                    >
                        <UserData />
                        <FeedData />
                    </PostInformation>
                </PostBox>
            </PostContainer> */}


            {/* {hasImageItem && <PostImage src="/image/logo-habiters.svg" />}

            {hasVoteItem && <VoteItem progress={true} />} */}


        </>

    )
}