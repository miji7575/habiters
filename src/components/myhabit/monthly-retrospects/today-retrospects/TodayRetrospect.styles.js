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

export const TodayRetrospectTitle = styled.div`
/* headline */
  font-family: 'Pretendard-Bold'; 
  font-size: 20px;
  line-height: 28px;

  color: var(--color-black1);
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

export const BtnNonActive = styled.div`

 background-color: var(--color-purple4);
 border:  1px solid var(--color-purple4);
 cursor: auto;
 transition: 0;

 /* body2-medium */
  font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;

 &:hover{
    box-shadow: none;
 }

  /* background-color: ${(props) => props.todayRetrospectState === true ? "var(--color-purple4)" : "var(--color-purple2)"};
 border:  ${(props) => props.todayRetrospectState === true ? "1px solid var(--color-purple4)" : "1px solid var(--color-purple2)"};
 cursor: auto;
 transition: 0;
 &:hover{
    box-shadow: none;
 } */
`

export const BtnActive = styled.div`

 background-color: var(--color-purple2);
 border:  1px solid var(--color-purple2);

  /* body2-medium */
  font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;

`