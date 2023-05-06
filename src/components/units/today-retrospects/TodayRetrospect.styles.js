import styled from '@emotion/styled'



// ---오늘의 회고 박스------
export const TodayRetrospectContainer = styled.div`
    width: 280px;
    height: 444px;
    box-sizing: border-box;
    padding: 24px 20px 24px 20px;
    border: 1px solid var(--color-black7);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
`

export const TextareaBox = styled.div`
    width: 239px;
    display: flex;
    flex-direction: column;
    color: var(--color-black4);
    width: auto;
`

export const TextareaDefault = styled.textarea`
    height: 272px;
    padding: 16px;
    box-sizing: border-box;
    resize: none;
    border-radius: 8px;
    border: solid 1px var(--color-black7);
    color: var(--color-black4);
`

export const TextareaTextCountBox = styled.div`
    /* width: 239px; */
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
`