import styled from "@emotion/styled";

const FeedDataBox = styled.div`
    width: 146px;
    height: 100%;

    display: inline-flex;
    align-items: center;
    gap: 16px;

`
const FeedData = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;

`

const EyeIcon = styled.i`
    display: inline-block;
    width: 24px;
    height: 24px;

    background-color: var(--color-black5);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-eye.svg);
    -webkit-mask-image: url(/image/icon/icon-eye.svg);
`
const EmojiIcon = styled.i`
    display: inline-block;
    width: 24px;
    height: 24px;

    /* background-color: var(--color-black5); */
    background-image: url(/image/icon/icon-emoji.svg);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

`

const MessageIcon = styled.i`
    display: inline-block;
    width: 24px;
    height: 24px;

    background-color: var(--color-black5);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-message-2.svg);
    -webkit-mask-image: url(/image/icon/icon-message-2.svg);
`




export default function FeedDataUI({views, numOfComments, numOfEmojis}) {
    return (
        <FeedDataBox>
            <FeedData>
                <EyeIcon />
                <span>{views}</span>
            </FeedData>
            <FeedData>
                <EmojiIcon />
                <span>{numOfEmojis}</span>
            </FeedData>
            <FeedData>
                <MessageIcon />
                <span>{numOfComments}</span>
            </FeedData>


        </FeedDataBox>

    );
}