import { EmojiClusterWrap, EmojiWrap, LikeEmoji, SadEmoji, SurpriseEmoji, AngryEmoji, EmojiInfoWrap } from './emojiCluster.styles';
export default function EmojiClusterUI(props) {




    return (
        <>
            <div>
                <EmojiClusterWrap>

                    <EmojiWrap>
                        <LikeEmoji
                            onClick={()=>props.emojiClickHandler("SMILE")}
                        />
                        <EmojiInfoWrap>
                            <div>좋아요</div>
                            <div>{props.data.smile}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <SadEmoji
                            onClick={()=>props.emojiClickHandler("SAD")}
                        />
                        <EmojiInfoWrap>
                            <div>슬퍼요</div>
                            <div>{props.data.sad}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <SurpriseEmoji
                            onClick={()=>props.emojiClickHandler("SURPRISED")}
                        />
                        <EmojiInfoWrap>
                            <div>놀라워요</div>
                            <div>{props.data.surprised}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <AngryEmoji
                             onClick={()=>props.emojiClickHandler("ANGRY")}
                        />
                        <EmojiInfoWrap>
                            <div>화나요</div>
                            <div>{props.data.angry}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                </EmojiClusterWrap>
            </div>
        </>
    )
}