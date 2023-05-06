import HeaderUI from "./Header.presenter"
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../../../../../pages/commons/stores/store';
import { userState } from '../../../../commons/stores/Stores';
import axios from "axios";
import { useEffect, useState } from "react";
import instance from '../../../../commons/shared/Request';


export default function Header() {

    const router = useRouter()
    const accessToken = useRecoilValue(userState)



    const OnClickMoveMyhabit = (e) => {
        e.preventDefault();
        router.push("/myhabit")
        
        console.log("토큰" + accessToken)
    }
    const OnClickMoveHabitimunity = () => {
        router.push("/comming-soon")
        console.log("토큰" + accessToken)
    }
    const OnClickMoveMypage = () => {
        router.push("/mypage")
        // getUsers()
        getUserData()
    }



    const [text, setText] = useRecoilState(textState);


    const getUserData = async () => {


        // new Headers({
        //     'Content-Type': 'application/json',
        // });
        if (accessToken) {

            console.log("토큰" + accessToken)
            const response = await axios.get('http://223.130.162.40:8080/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
                .then(function (response) {
                    console.log(response);
                })

            // const json = await response.json()
            // console.log(json)
        }
        console.log("토큰없음.")
        // return response.data;
    }




  
    // async function getUsers() {
    //     console.log(accessToken)
    // }




    // const getUserData = async () => {


    //     // new Headers({
    //     //     'Content-Type': 'application/json',
    //     // });
    //     if (accessToken) {

    //         console.log("토큰" + accessToken)
    //         const response = await axios.get('http://223.130.162.40:8080/users/me', {
    //             headers: {
    //                 Authorization: 'Bearer'+ accessToken,
    //             }
    //         })
    //             .then(function (response) {
    //                 console.log(response);
    //             })

    //         const json = await response.json()

    //         console.log(json)
    //     }
    //         console.log("토큰없음.")
    //     // return response.data;
    // }




    // async fetchSuperCategory() {
    //     let myInfoForAuth;
    //     if (this.$store.state.tokenResponse.access) {
    //       myInfoForAuth = 'Bearer ' + this.$store.state.tokenResponse.access;
    //     }
    //     const response = await fetch('http://localhost:8080/categorys/super', {
    //       headers: {
    //         Authorization: myInfoForAuth,
    //       },
    //     });
    //     const json = await response.json();
    //     this.superCategoryList = json;
    //     await this.fetchCategory();
    //   },




    return (
        <>
            {/* <div>{text} : 헤더 </div> */}
            <HeaderUI
                OnClickMoveMyhabit={OnClickMoveMyhabit}
                OnClickMoveHabitimunity={OnClickMoveHabitimunity}
                OnClickMoveMypage={OnClickMoveMypage}
            />
        </>
    )

}