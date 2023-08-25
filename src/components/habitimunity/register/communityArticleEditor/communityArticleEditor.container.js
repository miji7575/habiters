import { useEffect, useState } from 'react';
import CommunityArticleEditorUI from './communityArticleEditor.presenter';
import { useRecoilState } from 'recoil';
import { PostContentState } from '../../../stores';
import VoteForm from '../voteForm/voteForm.container';

export default function communityArticleEditor(props) {

    // ========================
    // 2023-08-25 박미지 ---- 게시글 업로드
    // ========================

    const placeholder = "내용을 입력해주세요."
    const ImageTagData = props.ImageTagData




    const [postContent, setPostContent] = useRecoilState(PostContentState);

    const onContentChange = (e) => {
        const { textContent } = e.currentTarget;
        setPostContent(textContent)
    }

    const setVoteForm = () => {
        return (

            <VoteForm />
        )

    }

    useEffect(() => {
        // console.log(postContent)
    })






















    return (
        <>
            <CommunityArticleEditorUI
                // 게시글
                onContentChange={onContentChange}
                placeholder={placeholder}
                postContent={postContent}
                // 투표

                // 이미지
                imgUpload={props.imgUpload}
                imageUrl={props.imageUrl}
                ImageTagData={ImageTagData}
            />
        </>
    )
}