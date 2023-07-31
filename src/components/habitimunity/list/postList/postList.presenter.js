import styled from "@emotion/styled"
import Label from "../../commons/label/label.container"
import Bookmark from "../../commons/bookmark/bookmark.container"

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

const PostBookmark = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid var(--color-black4);
    border-radius: 50%;
    
    cursor: pointer;
`

const BookmarkIcon = styled.i`
    display: inline-block;
    width: 32px;
    height: 32px;

    margin-right: 4px;

    background-color: #A6A6A6;

    mask-size: 16px 16px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px 16px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-bookmark.svg);
    -webkit-mask-image: url(/image/icon/icon-bookmark.svg);
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

const PostSub = styled.div`
    display: flex;
    justify-content: space-between;

    width: 832px;
    border-top: 1px solid #DBDBDB;

    padding-top: 12px;

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
                    <PostSub>
                        <div>
                            <span>
                                작성자
                            </span>
                            <span>
                                날짜
                            </span>
                        </div>
                        <div>
                            아이콘
                        </div>
                    </PostSub>
                </PostBox>


            </PostContainer>

        </>

    )
}