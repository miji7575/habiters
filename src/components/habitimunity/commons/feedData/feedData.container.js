import FeedDataUI from "./feedData.presenter";

export default function FeedData({views, numOfComments, numOfEmojis}) {
    return(
        <FeedDataUI 
            views={views}
            numOfComments={numOfComments}
            numOfEmojis={numOfEmojis}
        />
    );
}