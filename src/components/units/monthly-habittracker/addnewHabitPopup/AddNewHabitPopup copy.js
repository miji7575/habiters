import { useState, useRef } from 'react';
import {Inputs, InputChange, removeValue, inputValue} from '../../../commons/inputs/Inputs.container';
import styled from '@emotion/styled'




export default function AddNewHabitPopup(props) {

    // 스타일
    const PopupBackground = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.8);
    `

    const PopupContainer = styled.div`
    width: 428px;
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    border-radius: 24px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 3px 3px black;

    position: absolute;
    top: calc(50vh - (428px / 2));
    left: calc(50vw - (240px / 2));
    `

    const PopupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    
    `

    const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    `

    const PopupBtn = styled.div`
    display: flex;
    justify-content: center;
    `




    // 함수

    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";

    function addNewHabitPopupClose() {
        props.addNewHabitPopupClose();
    }

    function addNewhabit() {

        props.addNewhabit();
        reftest()
        postHabit();
    }



    // =============삭제
    // const [testInput, setTestinput] = useState('')
    // function test(e){
    //     setTestinput(e)

    // }
    const [inputValue, setInputvalue] = useState('')
    const HabitInput = useRef();
    let aaa = '';
    
    function reftest(){
        aaa = HabitInput.current.focus();
        console.log(aaa)
    }

  



    // ===========삭제
    // useEffect(() => {
    //     props.setNewInputvalue(() =>inputValue)
    // }, [inputValue])



    //     useEffect(() => {
    //         getInputValue(inputValue)
    //         // InputChange(e)

    //    }, [inputValue])
    //==============삭제

  
    //=================삭제
// ==================================습관 추가하기.



    return (



        <PopupBackground>
            <PopupContainer>

                <PopupTitle>
                    <span className="headline5">새로운 습관 만들기</span>
                    <span className="icon-l icon-close-line"
                        onClick={addNewHabitPopupClose}></span>
                </PopupTitle>

                <PopupContent>
                    <div>
                        <Inputs
                            placeholder={placeholder} 
                            // setInputvalue={setInputvalue}
                            //=================삭제
                            // InputChange={InputChange}
                            // removeValue={removeValue}
            
                            // Message={message}
                            // isError={isError}
            
                            // MessageColor={messageColor}
                            // width={props.width}
            
                            // inputValue={inputValue}
                            
                            ref={HabitInput}
                            //=================삭제
                            />
                    </div>
                    <div>{aaa} : HabitAddPopup</div>
                </PopupContent>


                <PopupBtn>
                    <div className="btn btn-large btn-primary-default body2-medium"
                        onClick={addNewhabit}>습관 만들기</div>
                </PopupBtn>

            </PopupContainer>
        </PopupBackground>


    )

}