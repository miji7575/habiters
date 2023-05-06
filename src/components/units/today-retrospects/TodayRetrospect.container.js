import TodayRetrospectUI from "./TodayRetrospect.presenter"



export default function TodayRetrospect() {

    // 로직을 여기다 담아라
    const placeholder = "오늘의 회고를 작성해주세요.  \n작성한 회고는 24시간 이내로만 수정이 가능해요."
    const textareaErrorMessage = "";



    return (
        <TodayRetrospectUI 
        placeholder={placeholder}
        textareaErrorMessage={textareaErrorMessage}/>
    )

}