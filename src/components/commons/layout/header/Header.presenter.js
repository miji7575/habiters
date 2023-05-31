
import { HeaderWrap, LogoBox, MainLogo, HeaderMenuBox, HeaderMypageBox, MyImg } from './Header.styles' // HeaderMenu 
import HeaderMenu from './menus/Index';

export default function HeaderUI(props) {


    return (
        // html 부분을 여기에 담아라
        <>

            <header>
                <HeaderWrap>
                    <LogoBox>
                        <MainLogo src="/image/logo-habiters.svg" alt="Logo"
                            onClick={props.OnClickMoveMyhabit} />
                    </LogoBox>
                    <HeaderMenuBox className='body1-medium'>
                        {/* 마이해빗 */}
                        <HeaderMenu
                            onClick={props.OnClickMoveMyhabit}
                            menuName={props.menuName[0]}
                            clickedMenu={props.clickedMenu}
                        />
                        {/* 해비티뮤니티 */}
                        <HeaderMenu
                            onClick={props.OnClickMoveHabitimunity}
                            menuName={props.menuName[1]}
                            clickedMenu={props.clickedMenu}
                        />
                    </HeaderMenuBox>
                    <HeaderMypageBox className='body1-medium'>
                        {/* 마이페이지 */}

                        <HeaderMenu
                            onClick={props.OnClickMoveMypage}
                            menuName={props.menuName[2]}
                            clickedMenu={props.clickedMenu}
                            profileImgUrl={props.profileImgUrl}
                        >
                        </HeaderMenu>
                       

                    </HeaderMypageBox>
                </HeaderWrap>
            </header>
        </>
    )

}