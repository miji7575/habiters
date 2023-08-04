import styled from "@emotion/styled"
import Label from "../../../commons/label/label.container"
import { useEffect, useState } from "react"

const VoteItemContainer = styled.div`
    width: 400px;
    height: 84px;

    border: 1px solid var(--color-black7);
    border-radius: 8px;
`

const VoteItemBox = styled.div`
    width: 368px;
    height: 52px;

    display: flex;
    align-items: center;
    gap: 16px;

    padding: 16px;
`

const VoteInboxIcon = styled.i`
    display: inline-block;
    width: 24px;
    height: 24px;

    background-color: var(--color-black3);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-vote-inbox.svg);
    -webkit-mask-image: url(/image/icon/icon-vote-inbox.svg);
`

const VoteItemContent = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
`

const VoteItemTitle = styled.div`
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.5rem;

`

export default function VoteItemUI(props) {
    // 230802 투표가 진행중인지 아닌지
    const [isVoting, setIsVoting] = useState(props.progress);    

    return (
        <>
            <VoteItemContainer>
                <VoteItemBox>
                    <VoteInboxIcon />
                    <VoteItemContent>
                        <Label
                            value={isVoting ? '투표 진행 중' : '투표 종료'}
                            default={isVoting ? 'purple' : 'gray'}
                        />
                        <VoteItemTitle className="body2-bold">
                            투표 제목을 기입해줍니다. 너무 길어지면 점처리를 해줍니다.
                        </VoteItemTitle>

                    </VoteItemContent>
                </VoteItemBox>
            </VoteItemContainer>


        </>
    )
}