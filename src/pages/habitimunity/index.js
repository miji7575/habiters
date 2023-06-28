import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import {userAccessToken} from '../../components/stores';
import { useEffect } from 'react';

export default function Habitimunity(){

    const router = useRouter()
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
        router.push("/comming-soon")
    }, [])

    return(
        <>
        <div>
            해비티뮤니티
        </div>
        </>
    )
}