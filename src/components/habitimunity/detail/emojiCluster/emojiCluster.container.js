import { useRecoilState } from 'recoil';
import EmojiClusterUI from './emojiCluster.presenter';
import { userAccessToken } from '../../../stores';
import { useState } from 'react';


export default function EmojiCluster(props) {

    const dataEx = {
        like: 20,
        sad: 6,
        surprise: 35,
        angry: 10
    }



    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)


    const postLikeEmoji = async () => {

        const response = await axios.get(`https://api.habiters.store/posts/${boardId}/emojis?type={LIKE}`, {
            postId: boardId
        }, {
            headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
        })

        console.log(response)

        return

    }

    const postSadEmoji = async () => {

        const response = await axios.get(`https://api.habiters.store/posts/${boardId}/emojis?type={SAD}`, {
            postId: boardId
        }, {
            headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
        })

        console.log(response)

        return

    }



    const postSurpriseEmoji = async () => {

        const response = await axios.get(`https://api.habiters.store/posts/${boardId}/emojis?type={SURPRISE}`, {
            postId: boardId
        }, {
            headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
        })

        console.log(response)

        return

    }

    const postAngryEmoji = async () => {

        const response = await axios.get(`https://api.habiters.store/posts/${boardId}/emojis?type={ANGRY}`, {
            postId: boardId
        }, {
            headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
        })

        console.log(response)

        return

    }


    // === 이렇게 바꾸기
    const [selectedEmojiType, setSelectedEmojiType] = useState('')
    const emojiClickHandler = (e) => {
        console.log(e)
    }


    return (
        <>
            <EmojiClusterUI
                data={dataEx}
                postLikeEmoji={postLikeEmoji}
                postSadEmoji={postSadEmoji}
                postSurpriseEmoji={postSurpriseEmoji}
                postAngryEmoji={postAngryEmoji}



                emojiClickHandler={emojiClickHandler}

            />
        </>
    )
}