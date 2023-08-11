import {
    SelectBoxDefaultWrap, SelectBoxDefaultSelectBox, SelectBoxDefaultOptionsWrap, SelectBoxDefaultOption, ErrorMessage,
    SelectBoxTimePickerOptionWrap, SelectBoxTimePickerOption
} from './selectbox.styles';
import { useEffect, useState } from 'react'
import { SelectBoxValueState } from '../../../stores/index';
import { useRecoilState } from 'recoil';



// 2023/07/30/박미지  -------------------------------------  SelectBoxDefault


// =====  사용법
// "SelectBoxDefault" 라는 이름으로 import 해서 사용
// 받아올 옵션의 데이터 : 사용하는 곳에서 "options" 라는 이름으로 전달.
// width 변경하기 : SelectBoxDefaultWrap 안의 width 속성에 prop 전달(단위까지 기재) 기본값 380px
// Medium SelectBox 사용시에만 size={ "medium" }으로 전달




// ------------기본 selectBox
export function SelectBoxDefault(props) {

    // prop으로 name을 꼭 지정해야함
    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState('')
    const [isFocused, setisFocused] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [size, setType] = useState(props.size)
    const [width, setWidth] = useState(props.width)
    const [errorMessage, setErrorMessage] = useState('에러메세지');
    const [selectedValue, setSelectedValue] = useRecoilState(SelectBoxValueState);
    // const width = props.width


    // ----- SelectBox 내부 값
    const [isValueNull, setIsValueNull] = useState(true)


    // 2023/07/30/박미지 ----- 초기값 설정
    useEffect(() => {
        setPlaceholder(() => props.placeholder ? props.placeholder : "값을 입력해주세요")
        setSelectedValue(() => props.placeholder ? { [props.name]: props.placeholder } : { [props.name]: placeholder })
        setErrorMessage(() => props.errorMessage ? props.errorMessage : "값을 확인해주세요")
    }, [props.placeholder, props.errorMessage])


    useEffect(() => {
        selectBoxValueNullCheck()
    }, [selectedValue])




    // 2023/08/08 박미지 ----- SelectedValue에 name : 기본값(placeholder) 설정
    useEffect(() => {

        setSelectedValue((prevState) => ({
            ...prevState,
            [props.name]: placeholder
        }))


    }, [placeholder])



    // 2023/07/30/박미지  ----- SelectBox 컴포넌트에 선택된 값이 있는지 확인 
    const selectBoxValueNullCheck = () => {

        if (selectedValue[props.name] === placeholder) {
            setIsValueNull(true)

        } else {
            setIsValueNull(false)
        }
    }



    // 콘솔용
    useEffect(() => {
        setIsError(props.isError)
        setIsDisabled(props.isDisabled)
        console.log(selectedValue)
        // console.log(props.name)
        // console.log("selectedValue.name : " + selectedValue.name)
        // console.log("placeholder : " + placeholder)
    })



    // ------------------------Test용도
    // const SelectBox = (props) => {
    //     return (
    //         <>
    //             <SelectBoxDefaultWrap
    //                 width={props.width}>

    //                 {/* SelectBox */}
    //                 <SelectBoxDefaultSelectBox
    //                     onClick={e => { if (!isDisabled) { setisFocused(!isFocused) } }}
    //                     isFocused={isFocused}
    //                     isDisabled={isDisabled}
    //                     isError={isError}
    //                     size={size}
    //                 >
    //                     {selectedValue}
    //                 </SelectBoxDefaultSelectBox>


    //                 {/* Dropdown */}
    //                 {isFocused &&
    //                     <SelectBoxDefaultOptionsWrap>
    //                         {props.options.map((option) => (

    //                             <SelectBoxDefaultOption
    //                                 size={size}
    //                                 key={option.value}
    //                                 value={option.value}
    //                                 onClick={e => { setSelectedValue(option.name), setisFocused(!isFocused) }}>
    //                                 {option.name}

    //                             </SelectBoxDefaultOption>
    //                         ))}
    //                     </SelectBoxDefaultOptionsWrap>}

    //                 {isError && <ErrorMessage>에러메세지</ErrorMessage>}
    //             </SelectBoxDefaultWrap>
    //         </>

    //     );
    // };


    return (
        <>

            {/* <SelectBox
                options={OPTIONS}
            /> */}

            <SelectBoxDefaultWrap
                width={width}>



                {/* SelectBox */}
                <SelectBoxDefaultSelectBox
                    onClick={e => { if (!isDisabled) { setisFocused(!isFocused) } }}
                    isFocused={isFocused}
                    isDisabled={isDisabled}
                    isError={isError}
                    size={size}
                    isValueNull={isValueNull}
                >
                    <div>
                        {selectedValue[props.name]}
                    </div>
                </SelectBoxDefaultSelectBox>



                {/* Dropdown */}
                {isFocused &&
                    <SelectBoxDefaultOptionsWrap
                        size={size}
                        width={width}
                    >


                        {/* name 지정 안하고 사용 */}
                        {/* {props.options.map((option) => (

                            <SelectBoxDefaultOption
                                key={option.value}
                                value={option.value}
                                size={size} //Large, Medium 정의
                                // 선택된 값과 OPTION의 name 비교(selectedValue, name)
                                selectedValue={selectedValue}
                                name={option.name}
                                onClick={e => { setSelectedValue(option.name), setisFocused(!isFocused) }}>
                                {option.name}

                            </SelectBoxDefaultOption>
                        ))} */}



                        {Object.entries(props.options).map(([key, value]) => (


                            <SelectBoxDefaultOption
                                key={key}
                                value={value.value}
                                size={size} //Large, Medium 정의
                                // 선택된 값과 OPTION의 name 비교(selectedValue, name)
                                selectedValue={selectedValue[props.name]}
                                name={value.name}
                                onClick={e => { setSelectedValue({ ...selectedValue, [props.name]: value.name }), setisFocused(!isFocused) }}>
                                {value.name}

                            </SelectBoxDefaultOption>
                        ))}


                    </SelectBoxDefaultOptionsWrap>}



                {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}



            </SelectBoxDefaultWrap>

        </>
    )
}







// ------------시간 selectBox
export function SelectBoxTimePicker(props) {


    const OPTIONSTimePickerAMPM = [
        { value: "오전", name: "오전" },
        { value: "오후", name: "오후" }

    ];

    const OPTIONSTimePickerTime = [
        { value: "1", name: "1" },
        { value: "2", name: "2" },
        { value: "3", name: "3" },
        { value: "4", name: "4" },
        { value: "5", name: "5" },
        { value: "6", name: "6" },
        { value: "7", name: "7" },
        { value: "8", name: "8" },
        { value: "9", name: "9" },
        { value: "10", name: "10" },
        { value: "11", name: "11" },
        { value: "12", name: "12" },
    ];

    const OPTIONSTimePickerMinutes = [
        { value: "00", name: "00" },
        { value: "05", name: "05" },
        { value: "10", name: "10" },
        { value: "15", name: "15" },
        { value: "20", name: "20" },
        { value: "25", name: "25" },
        { value: "30", name: "30" },
        { value: "35", name: "35" },
        { value: "40", name: "40" },
        { value: "45", name: "45" },
        { value: "50", name: "50" },
        { value: "55", name: "55" },
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



    // useEffect(() => {
    //     selectBoxValueNullCheck()
    // }, [selectedValue])


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







    return (
        <>

            {/* <SelectBox
                options={OPTIONS}
            /> */}

            <SelectBoxDefaultWrap
                width={width}>



                {/* SelectBox */}
                <SelectBoxDefaultSelectBox
                    onClick={(e) => { if (!isDisabled) { setisFocused(!isFocused),setClickedY(e.clientY) } }}
                    isFocused={isFocused}
                    isDisabled={isDisabled}
                    isError={isError}
                    size={size}
                    isValueNull={isValueNull}
                >
                    <div>
                        {selectedValue[props.name]}
                    </div>
                </SelectBoxDefaultSelectBox>



                {/* Dropdown */}
                {isFocused &&
                    <SelectBoxTimePickerOptionWrap
                        size={size}
                        onClick={(e)=>{setIsValueNull(false)}}
                        clickedY={clickedY}
                        // width={width}
                    >

                        <div>

                            {Object.entries(OPTIONSTimePickerAMPM).map(([key, value]) => (

                                <SelectBoxTimePickerOption
                                    key={key}
                                    value={value.value}
                                    size={size} //Large, Medium 정의
                                    // 선택된 값과 OPTION의 name 비교(selectedValue, name)
                                    selectedValue={selectedAMPM}
                                    name={value.name}
                                    onClick={e => { setSelectedAMPM(value.name) }}>
                                    {value.name}

                                </SelectBoxTimePickerOption>
                            ))}
                        </div>



                        <div>
                            {Object.entries(OPTIONSTimePickerTime).map(([key, value]) => (

                                <SelectBoxTimePickerOption
                                    key={key}
                                    value={value.value}
                                    size={size} //Large, Medium 정의
                                    // 선택된 값과 OPTION의 name 비교(selectedValue, name)

                                    selectedValue={selectedTime}
                                    // selectedValue={selectedValue[props.name]}
                                    name={value.name}
                                    onClick={e => { setSelectedTime(value.name) }}
                                    // onClick={e => { setSelectedValue({ ...selectedValue, [props.name]: value.name }), setisFocused(!isFocused) }}
                                    >
                                    {value.name}

                                </SelectBoxTimePickerOption>
                            ))}
                        </div>

                        <div>

                            {Object.entries(OPTIONSTimePickerMinutes).map(([key, value]) => (

                                <SelectBoxTimePickerOption
                                    key={key}
                                    value={value.value}
                                    size={size} //Large, Medium 정의
                                    // 선택된 값과 OPTION의 name 비교(selectedValue, name)

                                    selectedValue={selectedMinutes}
                                    // selectedValue={selectedValue[props.name]}
                                    name={value.name}
                                    onClick={e => { setSelectedMinutes(value.name) }}
                                    // onClick={e => { setSelectedValue({ ...selectedValue, [props.name]: value.name }), setisFocused(!isFocused) }}
                                    >
                                    {value.name}

                                </SelectBoxTimePickerOption>
                            ))}
                        </div>


                    </SelectBoxTimePickerOptionWrap>}



                {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}



            </SelectBoxDefaultWrap>

        </>
    )
}




