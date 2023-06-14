import styled from '@emotion/styled'

export const DayContainer = styled.div`

/* 날짜기준 세로줄 전체 */
& > div  {
    box-sizing: border-box;
    border-left: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'};  
    border-right: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : 'none'};  
}
/* 선택된 날의 다음날의 왼쪽줄은 없앤다 */
& + div > div { 
   ${(props) => props.isSelected === true ? ' border-left : none' : 'none'};
}
/* 날짜기준 첫번째 세로줄 (시작일) */
&:first-of-type > div {
    border-left: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : 'none'};
}

/* 날짜기준 마지막 세로줄 (말일) */
&:last-of-type > div {
    border-right: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'};
    margin-right: 20px;
}
/* 날짜칸 */
& > div > span:first-of-type{
    border-top: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'};  
    border-bottom: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'}; ;
    background-color: ${(props) => props.isSelected === true ? 'var(--color-black1)' : 'none'};
    color: ${(props) => props.isSelected === true ? 'var(--color-white)' : 'none'};

}
/* 날짜와 체크박스 컨테이너 */
& > div > span {
    border-bottom: 1px solid var(--color-black8);
}

`


export const DayBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 44px;
    box-sizing: border-box; 

`

export const DayDateBox = styled.span`
    height: 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color : var(--color-black1);
    /* cursor: pointer; */
`

export const CalenderDay = styled.span`
`
export const CalenderDate = styled.span`
`


