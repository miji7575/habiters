import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import { userAccessToken, accessTokenStatem, URL, userDetail } from '../../components/stores';
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
//-------------
import { DropdownBorder, DropdownFill, SelectBoxDefault } from '../../components/habitimunity/commons/selectbox'


// ============================== Style ==============================

const Main = styled.div`

padding-left: 50px;

`


export default function TestPage() {


    // ============================== Function  ==============================

    const router = useRouter()

    const moveSelectBox = () => {
        router.push("/test-page/selectbox")
    }
    const moveDatePicker = () => {
        router.push("/test-page/selectbox")
    }



    return (
        <>
           <button onClick={moveSelectBox}> selectbox </button>

           <button onClick={moveDatePicker}>datepicker</button>
       

        </>
     
    )
}