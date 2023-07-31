import styled from '@emotion/styled'


export const VotingInputWrap = styled.div`
            display: inline-flex;
            align-items: center;
            gap : 16px;
            /* flex-direction: column; */
`

export const VotingInputBox = styled.div`
            display: inline-flex;
            align-items: center;
            position: relative;
`

export const DeleteIcon = styled.div`
            width: 24px;
            height: 24px;
            background: url(/image/icon/icon-vote-delete.svg) no-repeat;
            cursor: pointer;
`

export const GroupIcon = styled.div`
            -webkit-mask-size: 24px 24px;
            -webkit-mask-image: url(/image/icon/icon-group.svg);
            -webkit-mask-repeat: no-repeat;
            background-color: var(--color-black5);
            width: 24px;
            height: 24px;

            position: absolute;
            right: 12px;
            cursor: pointer;

`

export const InputMessage = styled.div`
            padding-top: 4px;
`




