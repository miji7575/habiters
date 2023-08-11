import { useEffect, useState } from 'react';
import DatepickerUI from './datepicker.presenter';
import { SelectBoxValueState } from '../../../stores/index';
import { useRecoilState } from 'recoil';


// 2023/07/30/박미지  -------------------------------------  SelectBoxDefault


// =====  사용법
// "SelectBoxDefault" 라는 이름으로 import 해서 사용
// 받아올 옵션의 데이터 : 사용하는 곳에서 "options" 라는 이름으로 전달.
// width 변경하기 : SelectBoxDefaultWrap 안의 width 속성에 prop 전달(단위까지 기재) 기본값 380px
// Medium SelectBox 사용시에만 size={ "medium" }으로 전달









// ------------시간 selectBox
export default function DatePicker(props) {

    const OPTIONS = [
        { value: "오전", name: "오전" },
        { value: "오후", name: "오후" }

    ];

    



    // prop으로 name을 꼭 지정해야함
    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState('')
    const [isFocused, setisFocused] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)


    const [size, setType] = useState(props.size)
    const [width, setWidth] = useState(props.width)
    const [errorMessage, setErrorMessage] = useState('에러메세지');
    // const width = props.width


    // 2023/07/30/박미지 ----- 초기값 설정
    useEffect(() => {
        setPlaceholder(() => props.placeholder ? props.placeholder : "시간을 선택해 주세요")
        setSelectedValue(() => props.placeholder ? { [props.name]: props.placeholder } : { [props.name]: placeholder })
        setErrorMessage(() => props.errorMessage ? props.errorMessage : "값을 확인해주세요")
    }, [props.placeholder, props.errorMessage])


    // 2023/08/08 박미지 ----- SelectedValue에 name : 기본값(placeholder) 설정
    useEffect(() => {

        setSelectedValue((prevState) => ({
            ...prevState,
            [props.name]: placeholder
        }))


    }, [placeholder])






    // -----------Value와 관련된 Data
    // ----- SelectBox 내부 값

    const [isValueNull, setIsValueNull] = useState(true)
    const [selectedValue, setSelectedValue] = useRecoilState(SelectBoxValueState);
    const [selectedAMPM, setSelectedAMPM] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedMinutes, setSelectedMinutes] = useState('')
    const [clickedY,setClickedY] = useState('')
    const [showingData, setShowingData] = useState('')



    // 2023/08/08/박미지 ----- 시간값 초기값 설정
    useEffect(() => {
        setSelectedAMPM("오전");
    }, [])


    useEffect(() => {
        setSelectedValue((prevState)=>({ ...prevState, [props.name]: selectedAMPM }))
        setSelectedTime("1")
    }, [selectedAMPM])

    useEffect(() => {
        setSelectedValue((prevState)=>({ ...prevState, [props.name]: selectedAMPM +" "+ selectedTime + ":" + selectedMinutes}))
        setSelectedMinutes("00")
    }, [selectedTime])

    useEffect(() => {
        setSelectedValue((prevState)=>({ ...prevState, [props.name]: selectedAMPM +" "+ selectedTime + ":" + selectedMinutes}))
    }, [selectedMinutes])



    useEffect(() => {
        // selectBoxValueNullCheck()
        setShowingData(selectedValue[props.name])
    }, [selectedValue])


    // 2023/07/30/박미지  ----- SelectBox 컴포넌트에 선택된 값이 있는지 확인 
    const selectBoxValueNullCheck = () => {

        
        
    }



    // 콘솔용
    useEffect(() => {
        setIsError(props.isError)
        setIsDisabled(props.isDisabled)


        // console.log(props.name)
        // console.log("selectedValue.name : " + selectedValue.name)
        // console.log("placeholder : " + placeholder)
    })





    const selectBoxOnClick = (e) => {

        if (!isDisabled) {
             setisFocused(!isFocused);
             setClickedY(e.clientY);
        }

    }


    const optionOnClick = (name) => {

        setSelectedValue({ ...selectedValue, [props.name]: name });
         setisFocused(!isFocused) ;


    }
   







    return (
        <DatepickerUI 
        width={width}
        isFocused={isFocused}
        isDisabled={isDisabled}
        isError={isError}
        size={size}
        isValueNull={isValueNull}
        showingData={showingData}
        clickedY={clickedY}
        errorMessage={errorMessage}
        setisFocused={setisFocused}
        setClickedY={setClickedY}
        options={OPTIONS}
        selectBoxOnClick={selectBoxOnClick}
        optionOnClick={optionOnClick}
        />
    )
}




