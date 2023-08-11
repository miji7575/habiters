import { useState } from 'react';
import {CommunityArticleEditorWrap, CommunityEditor} from './communityArticleEditor.styles';
import { useRecoilState } from 'recoil';
import { PostContentState } from '../../../stores';
import VoteForm from '../voteForm/voteForm.container';

export default function CommunityArticleEditorUI (props){

    const [postContent, setPostContent] = useRecoilState(PostContentState);

    const onContentChange = (e) => {
        const content = e.target.value;
        setPostContent(content)
    }

    const setVoteForm = () => {
        return (

            <VoteForm />
        )

    }

    return(
        <>
            <CommunityArticleEditorWrap>
                <button
                    onClick={setVoteForm}
                
                >
                    vote
                </button>
                <CommunityEditor
                    // contentEditable='true'
                    onChange={onContentChange}
                    value={postContent}
                />
            </CommunityArticleEditorWrap>
    
        </>
    )
}