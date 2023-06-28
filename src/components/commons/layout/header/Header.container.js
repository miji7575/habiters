import HeaderUI from "./Header.presenter"
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from 'recoil';
// import { textState } from '../../../../../pages/commons/stores/store';
import { userAccessToken, userDetail } from '../../../../components/stores';
import axios from "axios";
import { useEffect, useState } from "react";
import instance from '../../../../commons/shared/Request';


export default function Header() {








    const router = useRouter()
    const accessToken = useRecoilValue(userAccessToken)
    const [user, setUser] = useRecoilState(userDetail)
    const [profileImgUrl, setProfileImgUrl] = useState('');

    const menuName = ["마이해빗", "해비티뮤니티", "마이페이지"]
    const [clickedMenu, setClickedMenu] = useState()
    const [nowPath, setNowPath] = useState(router.asPath)

    const getUserData = async () => {

        if (accessToken) {
            const response = await axios.get('https://api.habiters.store/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            setUser(response.data.data)
            return
        }


    }


    useEffect(() => {

        getUserData()
        setProfileImgUrl(user.profileImgUrl)

    }, [])

    useEffect(() => {

        switch (nowPath) {
            case "/myhabit":
                setClickedMenu(() => menuName[0])
                return
            case "/habitimunity":
                setClickedMenu(menuName[1])
                return
            case "/comming-soon":
                setClickedMenu(menuName[1])
                return
            case "/mypage":
                setClickedMenu(menuName[2])
                return
            default:
                return
        }

    }, [nowPath, clickedMenu])






    const OnClickMoveMyhabit = async (e) => {
        // e.preventDefault();
        // setClickedMenu("마이해빗")
        // console.log(clickedMenu)
        router.push("/myhabit")
        // console.log("토큰 마이해빗" + accessToken)

    }

    const OnClickMoveHabitimunity = async (e) => {
        // e.preventDefault();
        // setClickedMenu(menuName[1])
        // console.log(clickedMenu)
        router.push("/habitimunity")
        // console.log("토큰 해비티뮤티" + accessToken)
    }
    const OnClickMoveMypage = async (e) => {
        // e.preventDefault();
        // setClickedMenu(menuName[2])
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