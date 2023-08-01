import styled from "@emotion/styled"
import Label from "../../commons/label/label.container"
import Bookmark from "../../commons/bookmark/bookmark.container"
import UserData from "../../commons/userData/userData.container"
import FeedData from "../../commons/feedData/feedData.container"

const PostContainer = styled.div`

`

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 880px;
    height: 208px;

    border: 1px solid #DBDBDB;
    border-radius: 16px;

    

`

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;

    width: 832px;
    padding-top: 24px;
    padding-bottom: 16px;

`
const PostTitle = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`

const PostContent = styled.div`
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


    margin-bottom: 24px;
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
                    <PostHeader>
                        <PostTitle>
                            <Label 
                                value='운동' 
                                default='skyBlue'
                            />
                            <strong>
                                <a href="#">
                                    제목을 기입해줍니다.
                                </a>
                            </strong>
                        </PostTitle>
                        <Bookmark 
                            bookmarked={true}
                        />
                    </PostHeader>
                    <PostContent>
                        <a href="#">
                            내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                            내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                            내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                        </a>
                    </PostContent>
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