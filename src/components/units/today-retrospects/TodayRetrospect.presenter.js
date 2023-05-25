
import { TodayRetrospectContainer, TodayRetrospectBtn } from './TodayRetrospect.styles'
import Textarea from '../../commons/textareas/Textareas.container';
import { useRecoilState } from 'recoil';
import { TextareaValueState } from '../../../components/stores';


export default function TodayRetrospectUI(props) {




    return (

        <>

            <TodayRetrospectContainer>

                <div className="headline5 color-black1">오늘의 회고</div>

                <Textarea
                    multiline
                    placeholder={props.placeholder}
                    textareaErrorMessage={props.textareaErrorMessage}
                    width={`239px`}
                    height={`272px`}
                    todayRetrospectState={props.todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                />

                {/* 작성이 가능할 때 버튼 */}
                {!props.todayRetrospectState && <div className="btn btn-large btn-primary-default body2-medium btn-width-auto"
                    onClick={props.onPostRetrospectsBtnClick}
                >회고 작성하기</div>}

                

                {/* 작성이 불가능할 때 버튼 */}
                {props.todayRetrospectState && <TodayRetrospectBtn className="btn btn-large btn-primary-default body2-medium btn-width-auto"
                    todayRetrospectState={props.todayRetrospectState}
                >회고 작성하기</TodayRetrospectBtn>}

            </TodayRetrospectContainer>
        </>
    )

}