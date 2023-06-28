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
                if (inside) {
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

        setInputValues({
            ...inputValues,
            [props.name]: ''
        });
        setIsValueNull(true)


    }


    // ----- 
    useEffect(() => {
        // if(inputValues[props.name] == ''){
        //     setIsValueNull(true)
        // }
        // else{
        // setIsValueNull(false)
        // }
        // autocompleteOn()
        console.log(inputValues)
        console.log(isOnFocus)

    })

    const onChange = (e) => {
        // props.onChange(e)
        // ================================
        const { value, name } = e.target;
        setInputValues({ ...inputValues, [name]: value })
        // ================================


        if (inputValues[props.name] == '') {
            setIsValueNull(true)
        }
        else {
            setIsValueNull(false)
        }
    }

    const onFocus = () => {
        setIsOnFocus(true)
        if (inputValues[props.name] == '') {
            console.log("1111")
            setIsValueNull(true)
        }
        else {
            console.log("222")
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

            <InputUI
                ref={ref}
                isValueNull={isValueNull}
                isOnFocus={isOnFocus}
                isError={props.isError}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}

                isEditable={props.isEditable}

                onChange={onChange}
                onFocus={onFocus}
                removeValue={removeValue}

                width={props.width}
                maxLength={props.length}


                errorMessage={props.errorMessage}

            />

            {/* <InputWrap  >

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
            </InputWrap> */}





        </>

    )

}



