import {
    SelectBoxDefaultWrap, SelectBoxDefaultSelectBox, SelectBoxDefaultOptionsWrap, SelectBoxDefaultOption, ErrorMessage,
    SelectBoxTimePickerOptionWrap, SelectBoxTimePickerOption
} from './datepicker.styles'

export default function DatepickerUI(props) {


    return (

        <>







            <SelectBoxDefaultWrap
                width={props.width}
            >



                {/* SelectBox */}
                <SelectBoxDefaultSelectBox

                    onClick={(e) => { props.selectBoxOnClick(e) }}
                    isFocused={props.isFocused}
                    isDisabled={props.isDisabled}
                    isError={props.isError}
                    size={props.size}
                    isValueNull={props.isValueNull}
                >
                    <div>
                        {props.showingData}
                    </div>
                </SelectBoxDefaultSelectBox>



                {/* Dropdown */}
                {props.isFocused &&
                    <SelectBoxDefaultOptionsWrap
                        size={props.size}
                        width={props.width}
                    >



                        {Object.entries(props.options).map(([key, value]) => (


                            <SelectBoxDefaultOption
                                key={key}
                                value={value.value}
                                size={props.size} //Large, Medium 정의
                                // 선택된 값과 OPTION의 name 비교(selectedValue, name)
                                selectedValue={props.showingData}
                                name={value.name}
                                onClick={e => { props.optionOnClick(value.name)}}>
                                {value.name}

                            </SelectBoxDefaultOption>
                        ))}


                    </SelectBoxDefaultOptionsWrap>}



                {props.isError && <ErrorMessage>{props.errorMessage}</ErrorMessage>}



            </SelectBoxDefaultWrap>

            <input type={'date'}></input>

        </>

    )

}