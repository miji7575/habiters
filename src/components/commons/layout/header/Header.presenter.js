
import { HeaderWrap, LogoBox, MainLogo, HeaderMenuBox, HeaderMypageBox, HeaderMenu } from './Header.styles'


export default function HeaderUI(props) {


    return (
        // html 부분을 여기에 담아라
        <>

            <header>
                <HeaderWrap>
                    <LogoBox>
                        <MainLogo src="/image/logo-habiters.svg" alt="Logo" 
                        onClick={props.OnClickMoveMyhabit}/>
                    </LogoBox>
                    <HeaderMenuBox className='body1-medium'>
                        <HeaderMenu onClick={props.OnClickMoveMyhabit}>마이해빗</HeaderMenu>
                        <HeaderMenu onClick={props.OnClickMoveHabitimunity}>해비티뮤니티</HeaderMenu>
                    </HeaderMenuBox>
                    <HeaderMypageBox className='body1-medium'>
                        <HeaderMenu onClick={props.OnClickMoveMypage}>마이페이지</HeaderMenu>
                    </HeaderMypageBox>
                </HeaderWrap>
            </header>
        </>
    )

}