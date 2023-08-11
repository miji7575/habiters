import styled from "@emotion/styled"

export const EmojiClusterWrap = styled.div`
    display: inline-flex;
    gap: 24px;

    font-family: 'Pretendard-Regular'; 
    font-size: 12px;
    line-height: 16px;
    color:var(--color-black4);
`


export const EmojiWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 4px;


`
export const Emoji = styled.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
`

export const LikeEmoji  = styled(Emoji)`
    background-image: url(/image/icon/icon-emoji-like.svg);
`
export const SadEmoji  = styled(Emoji)`
    background-image: url(/image/icon/icon-emoji-sad.svg);
`
export const SurpriseEmoji  = styled(Emoji)`
    background-image: url(/image/icon/icon-emoji-surprise.svg);
`
export const AngryEmoji  = styled(Emoji)`
    background-image: url(/image/icon/icon-emoji-angry.svg);
`

export const EmojiInfoWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

`