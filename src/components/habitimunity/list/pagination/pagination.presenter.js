import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const PageSection = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding-top: 64px;

`

const ButtonWrap = styled.div`

`

const ArrowLeft = styled.button`
    width: 24px; 
    height: 24px; 

    display: flex; /* 가상 요소 가운데 정렬 */

    background-color: var(--color-black2);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-arrow-left.svg); 
    -webkit-mask-image: url(/image/icon/icon-arrow-left.svg);

    &:hover {

        cursor: pointer;
    }

    &[disabled] {
        background-color: var(--color-black5);

        cursor: revert;
        transform: revert;
    }
`

const ArrowRight = styled.button`
    width: 24px; 
    height: 24px; 

    display: flex; /* 가상 요소 가운데 정렬 */

    background-color: var(--color-black2);

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-arrow-right.svg); 
    -webkit-mask-image: url(/image/icon/icon-arrow-right.svg);

    &:hover {

        cursor: pointer;
    }

    &[disabled] {
        background-color: var(--color-black5);

        cursor: revert;
        transform: revert;
    }
`

const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    margin: 0;
    background: none;
    color: var(--color-black2);


    &:hover {
    background: var(--color-black9);
    
    border-radius: 50%;
    
    cursor: pointer;
    }

    &[disabled] {
        background: none;

        cursor: revert;
        transform: revert;
    }

    &[aria-current] {
        color: var(--color-white);
        font-weight: bold;
        background: var(--color-purple2);
        border-radius: 50%;

        cursor: revert;
    }

`

export default function PaginationUI({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit); 


    const [currPage, setCurrPage] = useState(page)
    let firstNum = currPage - (currPage % 5) + 1
    let lastNum = currPage - (currPage % 5) + 5

    return (
        <>
            <PageSection className="body2-regular">
                {/* <Button 
                    onClick={() => {setPage(page-1); setCurrPage(page-2)}}
                    disabled={page===1} >
                    <ArrowLeft />
                </Button> */}
                <ArrowLeft 
                    onClick={() => {setPage(page-1); setCurrPage(page-2)}}
                    disabled={page===1} />
                <Button 
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}>
                    {firstNum}
                </Button>
                {Array(4).fill().map((_, i) =>{
                    if(i <=2){
                        return (
                            <Button
                                border="true" 
                                key={i+1} 
                                onClick={() => {setPage(firstNum+1+i)}}
                                aria-current={page === firstNum+1+i ? "page" : null}>
                                {firstNum+1+i}
                            </Button>
                        )
                    }
                    else if(i>=3){
                        return (
                            <Button
                                border="true" 
                                key ={i+1}
                                onClick={() => setPage(lastNum)}
                                aria-current={page === lastNum ? "page" : null}>
                                {lastNum}
                            </Button>
                        )  
                    }
                })}
                {/* <Button 
                    onClick={() => {setPage(page+1); setCurrPage(page)}}
                    disabled={page===numPages}>
                    <ArrowRight />
                </Button> */}
                <ArrowRight 
                    onClick={() => {setPage(page+1); setCurrPage(page)}}
                    disabled={page===numPages} />
                
            </PageSection>
        </>

    )
}