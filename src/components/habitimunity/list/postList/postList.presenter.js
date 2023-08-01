import styled from "@emotion/styled"
import Label from "../../commons/label/label.container"
import Bookmark from "../../commons/bookmark/bookmark.container"
import UserData from "../../commons/userData/userData.container"
import FeedData from "../../commons/feedData/feedData.container"

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 880px;
    height: 204px;

    border: 1px solid var(--color-black7);
    border-radius: 8px;

`

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 832px;
    height: 164px;

    padding-top: 20px;
    padding-bottom: 20px;

`

const Post = styled.div`
    width: 100%;
    height: 116px;

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
`

const PostContent = styled.div`
    display: flex;
    gap: 16px;
`

const PostImage = styled.img`
    width: 76px;
    height: 76px;
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
    height: 24px;

    color: var(--color-black3);

    /* padding-top: 12px; */

`

export default function PostListUI() {


    return (
        <>
            <PostContainer>
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
                            <PostImage src="/image/logo-habiters.svg" />
                            <PostText>
                                내용 1줄일 경우 / 피드 최소 길이 <br/>
                                내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이내용 1줄일 경우 / 피드 최소 길이    
                            </PostText>
                        </PostContent>
                    </Post>

                    <PostInformation
                        className="caption1-regular"
                    >
                        <UserData />
                        <FeedData />
                    </PostInformation>
                </PostBox>
            </PostContainer>

        </>

    )
}