import {
    ArticleWrap,
    ArticleTopSection, ArticleCategoryBookMark, ArticleTitle, ArticleInfo, ArticleInfoLeft, UserProfileImgWrap, UserProfileImg, ArticleInfoRight, EmojiClusterWrap, ArticleContentWrap } from './communityArticle.styles';
import Label from '../../commons/label/label.container';
import BookMark from '../../commons/bookmark/bookmark.container';
import FeedData from '../../commons/feedData/feedData.container';
import EmojiCluster from '../../detail/emojiCluster/emojiCluster.container';

export default function CommunityArticleUI(props) {







    return (
        <>
            <ArticleWrap>
                <ArticleTopSection>
                    <ArticleCategoryBookMark>
                        <div>
                            <Label
                                value={props.data.category.name}
                                default={props.data.category.color}
                            />
                        </div>
                        <BookMark
                            bookmarked={false}
                        />
                    </ArticleCategoryBookMark>

                    <ArticleTitle>제목 : {props.data.title}</ArticleTitle>
                    <ArticleInfo>
                        <ArticleInfoLeft>
                            <UserProfileImgWrap>
                                <UserProfileImg src="/image/image-default.svg" />
                            </UserProfileImgWrap>
                            <div>글 쓴 해비터{props.data.writerId}</div>
                            <div>작성일자 : {props.data.regDate}</div>
                        </ArticleInfoLeft>
                        <ArticleInfoRight>
                            <FeedData />
                            {/* <div>조회수 : {props.data.hit}</div>
                            <div>좋아요수 : {props.data.like}</div>
                            <div>댓글수 : {props.data.comment}</div> */}
                        </ArticleInfoRight>


                    </ArticleInfo>



                </ArticleTopSection>
                <ArticleContentWrap>
                    <div>내용 : {props.data.content}</div>



                </ArticleContentWrap>
                <EmojiClusterWrap>
                    <EmojiCluster />
                </EmojiClusterWrap>


            </ArticleWrap>


        </>
    )
}