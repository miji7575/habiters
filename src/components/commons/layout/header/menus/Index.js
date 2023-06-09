import styled from '@emotion/styled'
import { useEffect, useState } from 'react'


const Menu = styled.div`
    display: flex;
    color: var(--color-black1);
    cursor: pointer;
    line-height: var(--header-height);
    position: relative;
    min-width: max-content;
    align-items: center;
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
const MyImgBox = styled.div`
  width: 56px;
 height: 56px;
 box-sizing: border-box;
 border: 1px solid var(--color-black7);
 border-radius: 30px;
 display: flex;
 align-items: center;
 justify-content: center;

`

const MyImg = styled.img`
  width: 35px;
 height: 35px;
 object-fit: scale-down;
 
 `

export default function HeaderMenu(props) {

    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if (props.clickedMenu === props.menuName) {
            setIsClicked(true)
        }
    })

    return (

        <>
            {!props.profileImgUrl && <Menu
                onClick={props.onClick}
                isClicked={isClicked}
                clickedMenu={props.clickedMenu}
            >
                {props.menuName}
            </Menu>}

            {props.profileImgUrl && <Menu
                onClick={props.onClick}
                isClicked={isClicked}
                clickedMenu={props.clickedMenu}
            >
                <MyImgBox>
                    <MyImg src={props.profileImgUrl} alt="프로필이미지" />
                </MyImgBox>
            </Menu>}

        </>
    )

}