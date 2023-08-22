import { useRecoilState } from 'recoil';
import CommentReplyInputUI from './commentReplyInput.presenter';
import { userAccessToken } from '../../../stores';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CommentReplyInput(props) {

    const placeholder = "답글 내용을 작성해주세요."
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [inputValue, setInputValue] = useState('')






    //2023-08-19 박미지 --- 답글 등록
    const postCommentReply = async () => {

        console.log(props.commentId)
        if (accessToken && inputValue[props.name]) {
            const response = await axios.post(`https://api.habiters.store/posts/${props.boardId}/comment/${props.commentId}/reply`, {
                "content": inputValue[props.name]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(async () => {
                await props.getBoardDatails()
                await props.getCommentReplyData()
            })
            // console.log(response.data.data)
            // console.log(response)
            setInputValue({ [props.name]: "" })
            return
        } else {
            alert("답글을 입력하세요")
        }
    }



    //2023-08-19 박미지 --- 답글 수정.
    const updateCommentReply = async () => {
        // console.log(inputValue[props.name])
        // console.log(`${props.commentId}번 댓글의 ${props.commentReplyData.id}번 답글 수정`)
        if (accessToken && inputValue[props.name]) {
            const response = await axios.put(`https://api.habiters.store/posts/${props.boardId}/comment/${props.commentReplyData.id}`, {
                "content": inputValue[props.name]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(async () => {
                await props.getBoardDatails()
                await props.getCommentReplyData()
            })

            console.log(response)
            // await props.getBoardDatails()
            setInputValue({ [props.name]: "" })
            props.finishCommentReplyEditing()
            return
        }
        else {
            alert("답글을 입력하세요")
        }

    }

    useEffect(() => {
        setInputValue({ [props.name]: props.previousCommentReply })
    }, [props.previousCommentReply])


    // 2023-08-19 박미지 --- 전달받은 Input값 저장하기.
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputValue({
            ...inputValue // 기존의 input 객체를 복사한 뒤
            , [name]: value
        }) // name 키를 가진 값을 value 로 설정

    }


    useEffect(() => {
        // console.log(inputValue)
    })

    return (
        <>
            <CommentReplyInputUI
                placeholder={placeholder}
                backgroundColor={props.backgroundColor}
                value={inputValue[props.name]}
                name={props.name}
                onChange={onChange}
                isEditingCommentReply={props.isEditingCommentReply}
                postCommentReply={postCommentReply}
                updateCommentReply={updateCommentReply}

            />
        </>
    )
}