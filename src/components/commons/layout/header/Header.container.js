import HeaderUI from "./Header.presenter"
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from 'recoil';
// import { textState } from '../../../../../pages/commons/stores/store';
import { userState, userDetail,  headerSelectedMenu} from '../../../../components/stores';
import axios from "axios";
import { useEffect, useState } from "react";
import instance from '../../../../commons/shared/Request';


export default function Header() {

    const router = useRouter()
    const accessToken = useRecoilValue(userState)
    const [user, setUser] = useRecoilState(userDetail)
    const [profileImgUrl, setProfileImgUrl] = useState('');

    const menuName = ["마이해빗", "해비티뮤니티", "마이페이지"]
    const [clickedMenu, setClickedMenu] = useRecoilState(headerSelectedMenu)

    useEffect(()=>{
       setProfileImgUrl(user.profileImgUrl)
       console.log(user)
        if(router.asPath == "/myhabit"){
            setClickedMenu(menuName[0])
        }
        // setClickedMenu("마이해빗")
        // console.log(clickedMenu)
    },[])
   


    const OnClickMoveMyhabit = async(e) => {
        // e.preventDefault();
        setClickedMenu("마이해빗")
        // console.log(clickedMenu)
        router.push("/myhabit")
        // console.log("토큰 마이해빗" + accessToken)

    }

    const OnClickMoveHabitimunity = async(e) => {
        // e.preventDefault();
        setClickedMenu(menuName[1])
        // console.log(clickedMenu)
        router.push("/habitimunity")
        // console.log("토큰 해비티뮤티" + accessToken)
    }
    const OnClickMoveMypage = async(e) => {
        // e.preventDefault();
        setClickedMenu(menuName[2])
        // console.log(clickedMenu)
        router.push("/mypage")
        // console.log("토큰 마이페이지" + accessToken)
    }


    



    return (
        <>
            {/* <div>{text} : 헤더 </div> */}
            <HeaderUI
                OnClickMoveMyhabit={OnClickMoveMyhabit}
                OnClickMoveHabitimunity={OnClickMoveHabitimunity}
                OnClickMoveMypage={OnClickMoveMypage}

                menuName={menuName}
                clickedMenu={clickedMenu}
                profileImgUrl={profileImgUrl}
            />
        </>
    )

}