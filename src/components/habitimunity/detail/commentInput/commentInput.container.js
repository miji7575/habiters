import CommentInputUI from './commentInput.presenter';
import { userAccessToken } from '../../../stores';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CommentInput(props) {

    const placeholder = "댓글을 작성해주세요."
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [inputValue, setInputValue] = useState('')




    //2023-08-19 박미지 --- 댓글 등록.
    const postComment = async () => {


        if (accessToken && inputValue[props.name]) {
            const response = await axios.post(`https://api.habiters.store/posts/${props.boardId}/comment`, {
                "content": inputValue[props.name]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            })

            console.log(response.data.data)
            props.getBoardDatails()
            setInputValue({ [props.name]: "" })

            return
        }
        else {
            alert("댓글을 입력하세요")
        }

    }


    //2023-08-19 박미지 --- 댓글 수정.
    const updateComment = async () => {
        console.log(inputValue[props.name])

        if (accessToken && inputValue[props.name]) {
            const response = await axios.put(`https://api.habiters.store/posts/${props.boardId}/comment/${props.commentData.id}`, {

                "content": inputValue[props.name]

            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(async() => {
                await props.getBoardDatails()
            })

            console.log(response)

            // setInputValue({ [props.name]: "" })
            props.finishCommentEditing()
            return
        }
        else {
            alert("댓글을 입력하세요")
        }

    }



    useEffect(() => {
        console.log(inputValue)
        // console.log(inputValue[props.name])

    })

    useEffect(() => {
        setInputValue({ [props.name]: props.previousComment })
    }, [props.previousComment])


    // ----- 전달받은 Input값 저장하기.
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputValue({
            ...inputValue // 기존의 input 객체를 복사한 뒤
            , [name]: value
        }) // name 키를 가진 값을 value 로 설정

    }


    return (
        <>
            <CommentInputUI
                placeholder={placeholder}
                postComment={postComment}
                updateComment={updateComment}
                value={inputValue[props.name]}
                name={props.name}
                onChange={onChange}
                isEditingComment={props.isEditingComment}
            />
        </>
    )
}