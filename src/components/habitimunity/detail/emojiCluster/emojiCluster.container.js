import { useRecoilState } from 'recoil';
import EmojiClusterUI from './emojiCluster.presenter';
import { userAccessToken, userDetail } from '../../../stores';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function EmojiCluster(props) {

    


    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [user, setUser] = useRecoilState(userDetail)


  


    // 2023-08-23 박미지 ----- 이모지 등록하기.
    // 빈 객체라도 바디를 보내야한다..이유를 모르겠다..
    const emojiClickHandler = async (emojiType) => {
        console.log(props.boardId)
        const response = await axios.put(`https://api.habiters.store/post/${props.boardId}/emojis?type=${emojiType}`, {
            // "emojiType": emojiType,
            // "memberId": user.id,
            // "domain": "POST",
            // "domainId": props.boardId
        }, {
            headers: { "Content-Type": "application/json;charset=UTF-8", Authorization: 'Bearer ' + accessToken }
        }).then(async()=>{
            await props. getBoardDatails()
        })

        // console.log(response)

        return

    }


    return (
        <>
            <EmojiClusterUI
                data={props.emojiData}
                emojiClickHandler={emojiClickHandler}

            />
        </>
    )
}