import { useEffect, useState } from 'react';
import { CommunityArticleEditorWrap, CommunityEditorHeader, CommunityEditorWrap, PostImageWrap, CommunityEditor } from './communityArticleEditor.styles';
import PostImage from '../../commons/postImageVer2/postImageVer2.container';
import VoteForm from '../voteForm/voteForm.container';


export default function CommunityArticleEditorUI(props) {





    // 이미지
    const ImageUploadBtn = () => {


        return (
            <>
                <label>
                    <div>
                        <input style={{ display: `none` }} id="img" name="files" type="file" accept="image/*"
                            onClick={(e) => { if (props.imageUrl.length >= 3) { e.preventDefault(), alert("그만") } }}
                            onChange={props.imgUpload} />
                        <span>
                            <span>이미지 업로드</span>
                            <span>({props.imageUrl.length}/3)</span>
                        </span>
                    </div>
                </label>


            </>
        )
    }



    return (
        <>




            <CommunityArticleEditorWrap>

                <CommunityEditorHeader>
                    <VoteForm />
                    {/* <div>
                        <span>투표</span>
                    </div> */}

                    <ImageUploadBtn />

                </CommunityEditorHeader>
                <CommunityEditorWrap >


                    <PostImageWrap>
                        <PostImage
                            // 이미지
                            // thumbNailUpdate={props.thumbNailUpdate}
                            imageUrl={props.imageUrl} />
                    </PostImageWrap>




                    <CommunityEditor
                        contentEditable
                        suppressContentEditableWarning='true'
                        onInput={props.onContentChange}
                        value={props.postContent}
                        placeholder={props.placeholder}
                    >


                    </CommunityEditor>


                </CommunityEditorWrap >
            </CommunityArticleEditorWrap>


        </>
    )
}