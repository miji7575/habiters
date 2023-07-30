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

    padding-left: 150px;
    padding-top: 150px;
    display : flex;
    flex-direction: column;
    gap : 15px;

`

const Button = styled.button`

    width: 300px;
    height: 50px;
    background-color: var(--color-green2);
    color : white;
    font-size: 20px;
    border-radius: 15px;

`


export default function TestPage() {


    // ============================== Function  ==============================

    const router = useRouter()

    const moveSelectBox = () => {
        router.push("/test-page/selectbox")
    }
    const moveCheckBox = () => {
        router.push("/test-page/checkbox")
    }

    const moveDatePicker = () => {
        router.push("/test-page/selectbox")
    }



    return (
        <>
            <Main>

                <h1>TEST PAGE</h1>
                <hr/>
                <Button onClick={moveSelectBox}> selectbox </Button>

                <Button onClick={moveCheckBox}>checkbox</Button>

                <Button onClick={moveDatePicker}>datepicker</Button>

            </Main>
        </>

    )
}