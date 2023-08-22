import { useEffect, useState } from 'react';
import {
    IconGroup, ActionListWrap, ActionListOptions
} from './actionList.styles'


// 2023/08/21/박미지  -------------------------------------  SelectBoxDefault


// =====  사용법
// "SelectBoxDefault" 라는 이름으로 import 해서 사용
// 받아올 옵션의 데이터 : 사용하는 곳에서 "options" 라는 이름으로 전달.


//필수 속성
// type => editAndDelete / emoji


const EditAndDeleteOptoins = [
    { value: "1", text: "수정" },
    { value: "2", text: "삭제" },

];

const EmojiOptions = [
    { value: "1", text: "수정" },
    { value: "2", text: "삭제" },

];






// ------------ActionList
export default function ActionList(props) {

    const [isActivated, setIsActivated] = useState(false)



    return (

        <>
            {props.type == "editAndDelete" &&
                <> <IconGroup onClick={() => setIsActivated(!isActivated)} />
                    {isActivated &&
                        <ActionListWrap>
                            <ActionListOptions onClick={()=>(props.onFirstActionClick(),setIsActivated(!isActivated))}>
                                <div>수정</div>
                            </ActionListOptions>
                            <ActionListOptions onClick={()=>(props.onSecondActionClick(),setIsActivated(!isActivated))}>
                                <div>삭제</div>
                            </ActionListOptions>

                        </ActionListWrap>}
                </>}

        </>

    )
}



