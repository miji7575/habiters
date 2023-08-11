import styled from "@emotion/styled";

export const BtnDefault = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-align: center;
    transition: all .3s;
    box-sizing: border-box;
    padding: 12px 16px 12px 16px;
    cursor: pointer;
    :hover{
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
    }
`

export const BtnLarge = styled(BtnDefault)`
    /* body2-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 16px;
    line-height: 24px;

`

export const BtnMedium = styled(BtnDefault)`
    /* body3-medium */
    height: 32px;
    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    line-height: 20px;

`

export const BtnLargePrimary = styled(BtnLarge)`
    color : var(--color-white);

    ${(props) => props.isPressed ? `
        background-color: var(--color-purple1);
        border: 1px solid var(--color-purple1);
    `: ` border: 1px solid var(--color-purple2);
        background-color: var(--color-purple2);`}
    
    ${(props) => props.isDisabled ? `
         background-color: var(--color-purple4);
        border: 1px solid var(--color-purple4);
    `: ` border: 1px solid var(--color-purple2);
        background-color: var(--color-purple2);`}
    
`

export const BtnLargeSecondary = styled(BtnLarge)`
    background-color: var(--color-white);

    ${(props) => props.isPressed ? `
        color: var(--color-purple1);
        border: 1px solid var(--color-purple1);
    `: ` color: var(--color-purple2);
        border: 1px solid var(--color-purple2);`}

    ${(props) => props.isDisabled ? `
        color: var(--color-purple4);
        border: 1px solid var(--color-purple4);
    `: `color: var(--color-purple2);
        border: 1px solid var(--color-purple2);`}
    
`

export const BtnMediumPrimary = styled(BtnMedium)`
    color : var(--color-white);

    ${(props) => props.isPressed ? `
        background-color: var(--color-purple1);
        border: 1px solid var(--color-purple1);
    `: ` border: 1px solid var(--color-purple2);
        background-color: var(--color-purple2);`}

    ${(props) => props.isDisabled ? `
         background-color: var(--color-purple4);
        border: 1px solid var(--color-purple4);
    `: ` border: 1px solid var(--color-purple2);
        background-color: var(--color-purple2);`}
    
`

export const BtnMediumSecondary = styled(BtnMedium)`
    background-color: var(--color-white);  

    ${(props) => props.isPressed ? `
        color: var(--color-purple1);
        border: 1px solid var(--color-purple1);
    `: ` color: var(--color-purple2);
        border: 1px solid var(--color-purple2);`}

    ${(props) => props.isDisabled ? `
        color: var(--color-purple4);
        border: 1px solid var(--color-purple4);
    `: `color: var(--color-purple2);
        border: 1px solid var(--color-purple2);`}
`