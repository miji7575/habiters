import styled from '@emotion/styled'






export const DiaryBox = styled.div`
/* diarybox */
    display: flex;
    width: 880px;
    height: 160px;
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

    background-color: var(--color-purple5);


`

export const DiaryAsideNonEditable = styled(DiaryAside)`


    /* background-color: var(--color-purple5); */
    /* NONEDITABLE */
     background-color: var(--color-black9);

`

export const DiaryDateBox = styled.div`
    margin-bottom: 12px;
    text-align: center;
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
`
