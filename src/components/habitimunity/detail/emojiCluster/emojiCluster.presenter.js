import { EmojiClusterWrap, EmojiWrap, LikeEmoji, SadEmoji, SurpriseEmoji, AngryEmoji, EmojiInfoWrap } from './emojiCluster.styles';
export default function EmojiClusterUI(props) {




    return (
        <>
            <div>
                <EmojiClusterWrap>

                    <EmojiWrap>
                        <LikeEmoji
                            onClick={props.emojiClickHandler}
                        />
                        <EmojiInfoWrap>
                            <div>좋아요</div>
                            <div>{props.data.like}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <SadEmoji
                            onClick={props.emojiClickHandler}
                        />
                        <EmojiInfoWrap>
                            <div>슬퍼요</div>
                            <div>{props.data.sad}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <SurpriseEmoji
                            onClick={props.emojiClickHandler}
                        />
                        <EmojiInfoWrap>
                            <div>놀라워요</div>
                            <div>{props.data.surprise}</div>
                        </EmojiInfoWrap>
                    </EmojiWrap>

                    <EmojiWrap>
                        <AngryEmoji
                            onClick={props.emojiClickHandler}
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