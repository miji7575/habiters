
import { MonthlyRetrospectBox } from './RetrospectList.styles'
import Retrospect from './retrospect/Retrospect.container';


export default function RetrospectListUI(props) {




    return (

        <>

            <MonthlyRetrospectBox >

                {Object.entries(props.userRetrospect).map(([key, value],index) =>
                    <Retrospect
                        key={index}
                        value={index}
                        contentId={value.id}
                        content={value.content}
                        createDate={value.createDate}
                        updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                        deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
                        

                    />)}



            </MonthlyRetrospectBox>

        </>
    )

}