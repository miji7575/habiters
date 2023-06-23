import { useRecoilState, atom } from 'recoil';
import InputUI from "./Inputs.presenter"
import { useState, useEffect, useCallback, useRef } from "react"
import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'
import { inputDoneState, InputValue } from '../../../components/stores';






export default function Inputs(props) {


    const [inputValues, setInputValues] = useRecoilState(InputValue)
    const [isValueNull, setIsValueNull] = useState(true)
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isError, setisError] = useState(false);




    // const [inputIconShow, setInputIconShow] = useState(false)
    
 

    const useOutsideClick = ({ onClickOutside }) => {
        const ref = useRef(null);

        const handleClick = useCallback(
            e => {
                const inside = ref?.current?.contains(e.target);
                // const inside = e.target.name == "nickName";
                // const inside = e.target;
                if (inside){
                    // console.log(inside)
                    setIsOnFocus(true)
                    // console.log(inputIconShow)
                    return;
                } 
                setIsOnFocus(false)
                onClickOutside();
            },
            [onClickOutside, ref]
        );

        useEffect(() => {
            document.addEventListener("click", handleClick);

            return () => document.removeEventListener("click", handleClick);
        }, [handleClick]);

        return ref;
    };


   
    const ref = useOutsideClick({
        onClickOutside: () => {
            // console.log("outside 가 클릭되었음!");
        }
    });


  



//   ----- 삭제 icon 클릭시 전체삭제
    const removeValue = async (e) => {

        setInputValues({...inputValues,
            [props.name]:''});
        setIsValueNull(true)


    }
    

// ----- 
    useEffect(()=>{
        // if(inputValues[props.name] == ''){
        //     setIsValueNull(true)
        // }
        // else{
        // setIsValueNull(false)
        // }
        // autocompleteOn()

      
     })  

     const onChange = (e) => {
        // props.onChange(e)
        // ================================
        const { value, name } = e.target;
        setInputValues({ ...inputValues, [name]: value })
        // ================================


        if(inputValues[props.name] == ''){
            setIsValueNull(true)
        }
        else{
        setIsValueNull(false)
        }
     }

     const onFocus = () => {
        setIsOnFocus(true)
         if (inputValues[props.name] == '') {
             setIsValueNull(true)
         } 
         else {
             setIsValueNull(false)
         }
     }



// const [autocompleteState, setAutocompleteState ] = useState('new-password')
// console.log(autocompleteState)
// const autocompleteOn = () => {

//     if(props.autocomplete === 'on'){
//         setAutocompleteState('on')
//         return
//     }
// }
// ================================================



    return (
        <>

             <InputWrap  >

                <InputBox
                ref={ref}
                // {()=>setIsOnFocus(false)}
                >
                    {!isValueNull  && isOnFocus && !props.isError && 
                        <span
                            className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
                            onClick={removeValue} />}
                    <Input
                        type="text"
                        className={'input-default body3-medium color-black2'}
                        
                        isError={props.isError}
                        onChange={onChange}
                        value={props.value}
                        placeholder={props.placeholder}
                        name={props.name}
                        
                        disabled={props.isEditable ? true : false}
                        onFocus={onFocus}
                        
                        // onBlur={()=>setIsOnFocus(false)}
                        width={props.width}
                        maxLength={props.length}
                        autocomplete="off" 
                  

                       
                    />
                        



                    {props.isError && 
                        <ErrorIcon
                            className="icon-m icon-error-colored" 
                            onClick={onFocus}/>}
                </InputBox>
                {props.isError && <InputMessage id="name" className={'caption1-regular color-error'}>{props.errorMessage}</InputMessage>}
            </InputWrap>




           
        </>

    )

}



    // const [name, setName] = useState("Mike");
    // function changeName() {
    //     const newName = name === "Mike" ? "Jane" : "Mike"
    //     setName(newName);
    // }

    // const [isOnGoing, setisOnGoing] = useState(false);
    // const [isSuccess, setisSuccess] = useState(false);
    // const [isError, setisError] = useState(false);
    // const [isDone, setisDone] = useState(false);
    // const [isDisabled, setisDisabled] = useState(false);






    // const [message, setMessage] = useState(isError);
    // const [messageColor, setMessageColor] = useState(isError);




    // function ChangeMessageColor() {


    //     if (isError) {

    //         const newMessageColor = messageColor === isError ? "" : "color-error"
    //         const newMessage = isError ? "입력이 잘못되었습니다." : ""

    //         setMessageColor(newMessageColor);
    //         setMessage(newMessage);


    //     }
    // };

    // const [inputValue, setInputvalue] = useState('')
    // const InputChange = (e) => {

    //        setInputvalue(e.target.value)



    //        // props.setNewInputvalue(() =>inputValue)
    //        // -------------

    //        // console.log(inputValue)

    //        // if (inputValue == "오류") {
    //        //     setisError(true)
    //        //     // console.log(isError)
    //        //     ChangeMessageColor();

    //        // }
    //        // if (inputValue != "오류") {
    //        //     setisError(false)
    //        //     // console.log(isError)
    //        //     ChangeMessageColor();
    //        // }


    //    }

    //     const removeValue = () => {
    //        props.setInputvalue("")
    //    }

    // const [inputData, setInputData] = useState('')
    // const [newHabitName, setNewHabitName] = useRecoilState();
    // const data = (e) => {

    //     // setNewHabitName(e.target.value)
    //     // console.log(newHabitName)


    // }

    // const getInputData = () => {
    //     // props.InputChangeHandler(newHabitName)


    // }


    // // useEffect(() => {

    // //     if (props.isDone === true) {
    // //         props.InputChangeHandler(inputData)
    // //         console.log(inputData)
    // //     }



    // // }, [props.isDone])
 

    // const getData = () => {

    // }