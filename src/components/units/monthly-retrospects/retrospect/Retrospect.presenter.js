
import { DiaryBox, DiaryAside, DiaryAsideNonEditable, DiaryDateBox, DiaryIconBox, DiaryContent } from './Retrospect.styles'


export default function RetrospectUI(props) {


    // let Data = props.data;
    // console.log(props.data.content)

    return (

        <>

            <DiaryBox>
                <DiaryAsideNonEditable>
                    <DiaryDateBox>
                        <div className="body3-regular color-black2">{props.day}</div>
                        <div className="headline2 color-black2">{props.date}</div>
                    </DiaryDateBox>

                    <DiaryIconBox>
                        <span className="icon-round-l bg-white icon-round-border-black4">
                            <span className="icon-s icon-delete-colored icon-color-black4"></span>
                        </span>
                    </DiaryIconBox>


                </DiaryAsideNonEditable>

                <DiaryContent>
                    <div className="body3-regular color-black2">
                        {props.content}
                        {/* 오늘의 회고내용을 어쩌구 저쩌구 쓰게 됩니다.<br />
                        그게 200자가 넘으면은 글자수가 제한되는데,<br />
                        이게 어떻게 보면 너무 길어질 수도 있는데 이걸 영역을 늘려야 할지 아니면 애초에 스크롤로 가야할지...참 고민이 되네요.<br />
                        근데 생각보다 200자가 그렇게 많지 않을 것 같기도 하네요? 이것 참참..<br />
                        공백은 포함해서 가는건가요?<br />
                        공백 포함하면 이게 200자 */}
                    </div>
                </DiaryContent>


            </DiaryBox>


            {/* <DiaryBox>
                <DiaryAside>
                    <DiaryDateBox>
                        <div className="body3-regular color-black2">월요일</div>
                        <div className="headline2 color-purple2">08</div>
                    </DiaryDateBox>

                    <DiaryIconBox>
                        <span className="icon-round-l icon-round-filled">
                            <span className="icon-s icon-pencil-colored"></span>
                        </span>
                        <span className="icon-round-l bg-white icon-round-border-purple2">
                            <span className="icon-s icon-delete-colored"></span>
                        </span>
                    </DiaryIconBox>


                </DiaryAside>

                <DiaryContent>
                    <div className="body3-regular color-black2">
                        오늘의 회고내용을 어쩌구 저쩌구 쓰게 됩니다.<br />
                        그게 200자가 넘으면은 글자수가 제한되는데,<br />
                        이게 어떻게 보면 너무 길어질 수도 있는데 이걸 영역을 늘려야 할지 아니면 애초에 스크롤로 가야할지...참 고민이 되네요.<br />
                        근데 생각보다 200자가 그렇게 많지 않을 것 같기도 하네요? 이것 참참..<br />
                        공백은 포함해서 가는건가요?<br />
                        공백 포함하면 이게 200자
                    </div>
                </DiaryContent>


            </DiaryBox> */}



        </>
    )

}