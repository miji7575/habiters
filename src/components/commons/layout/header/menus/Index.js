import styled from '@emotion/styled'
import { useEffect, useState } from 'react'


const Menu = styled.div`
    display: block;
    color: var(--color-black1);
    cursor: pointer;
    line-height: var(--header-height);
    position: relative;
    &::before{
    content: '';
    background-color: var(--color-purple2);
    width: max-content;
    height: 4px;
    width: 0;
    ${(props) => props.isClicked === true ? `width: 100%;` : `width: 0;`}
    
    position: absolute;
    bottom: 0;
    transition: .3s;
    }
    &:hover::before{
        width: 100%;
    }

`

export default function HeaderMenu(props) {

    const [isClicked, setIsClicked] = useState(false)

    useEffect(()=>{
        if(props.clickedMenu === props.menuName){
            setIsClicked(true)
        }
    })

    return (
        <Menu
        onClick={props.onClick}
        isClicked={isClicked}
        clickedMenu={props.clickedMenu}
        >
            {props.menuName}
        </Menu>
    )

}