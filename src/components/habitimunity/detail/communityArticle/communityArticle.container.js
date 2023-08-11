import CommunityArticleUI from './communityArticle.presenter';

export default function CommunityArticle(props) {




    const boardDetailData = props.boardDetailData



    return (
        <>
            <CommunityArticleUI
                data={boardDetailData} />
        </>
    )
}