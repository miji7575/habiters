import styled from '@emotion/styled'






export const DiaryBox = styled.div`
/* diarybox */
    display: flex;
    width: 880px;
    /* min-height: 160px;  영역넓히기*/
    min-height: 160px; 
    /* height: 160px; */
    box-sizing: border-box;
`


export const DiaryAside = styled.div`

    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-black7);
    border-radius: 8px 0px 0px 8px;

    /* background-color: var(--color-purple5); */

    ${(props) =>
        props.isEditable === true ?
            `background-color: var(--color-purple5);` : ` background-color: var(--color-black9);`}


`



export const DiaryDateBox = styled.div`
    margin-bottom: 12px;
    text-align: center;
    &>div:first-of-type{
        color: var(--color-black2);
            /* body3-regular */
        font-family: 'Pretendard-Regular'; 
        font-size: 14px;
        line-height: 20px;
    }
    &>div:last-of-type{
        color: ${(props) => props.isEditable === true ? `var(--color-purple2)` : `var(--color-black2)`};
            /* headline2 */
        font-family: 'Pretendard-Bold'; 
        font-size: 32px;
        line-height: 42px;
    }
`

export const DiaryIconBox = styled.div`
    display: flex;
    gap: 8px;

`

export const DiaryContent = styled.div`
    width: 774px;
    /* border: 1px solid black; */
    border-bottom: 1px solid var(--color-black7);
    border-top: 1px solid var(--color-black7);
    border-right: 1px solid var(--color-black7);

    padding: 20px 32px 20px 32px;
    border-radius: 0px 8px 8px 0px;
    overflow: auto;
    white-space: pre-line;

    /* body3-regular */
    font-family: 'Pretendard-Regular'; 
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black2);
`







// ICON

const IconRoundDeleteWrap = styled.span`

    width: 32px;
    height: 32px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    background-color: var(--color-white);
    ${props => props.isEditable ? `border: 1px solid var(--color-purple2); ` : `border: 1px solid var(--color-black4);`}

`


const IconDeleteInner = styled.span`

    display: inline-block;
    width: 16px;
    height: 16px;

    background-size: 16px 16px;
    -webkit-mask-size: 16px 16px;
    cursor: pointer;

    background-repeat: no-repeat;
    -webkit-mask-image: url(/image/icon/icon-delete.svg);
    -webkit-mask-repeat: no-repeat;

    ${props => props.isEditable ? `background-color:var(--color-purple2); ` : `background-color:var(--color-black4);`}

`

export const IconDelete = (props) => {

    return (
        <IconRoundDeleteWrap
            onClick={props.onClick}
            isEditable={props.isEditable}
        >
            <IconDeleteInner
                isEditable={props.isEditable}
            />
        </IconRoundDeleteWrap>
    )
}


const IconUpdateWrap = styled.span`

    width: 32px;
    height: 32px;
    box-sizing: border-box;
    
    background-color: var(--color-purple2);
    border: solid 1px var(--color-purple2);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;


    

`


const IconUpdateInner = styled.span`

    display: inline-block;
    width: 16px;
    height: 16px;

    background-size: 16px 16px;
    -webkit-mask-size: 16px 16px;
    cursor: pointer;

    background-color: var(--color-white);
    background-repeat: no-repeat;
    -webkit-mask-image: url(/image/icon/icon-pencil.svg);
    -webkit-mask-repeat: no-repeat;


`



export const IconUpdate = (props) => {

    return (
        <>
            <IconUpdateWrap
                onClick={props.onClick}
                isEditable={props.isEditable}
            >
                <IconUpdateInner
                    isEditable={props.isEditable}
                />
            </IconUpdateWrap>


           
        </>
    )
}