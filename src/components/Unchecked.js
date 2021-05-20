import React, { useState } from 'react';
import CheckboxCheckedSVG from '../iconsSVG/Checkbox_checked';
import CheckboxUncheckedSVG from '../iconsSVG/Checkbox_unchecked';

const Unchecked = ({ mainColor, width_height, disabled, checkBox_onChange, checked_Fill_Color }) => {

    const [toggleUnchecked, setToggleUnchecked] = useState(true);

    const handleClick = () => {
        if (!disabled){
            setToggleUnchecked(toggleUnchecked === true ? false : true)
            checkBox_onChange(toggleUnchecked === true ? false : true)
         }
    };

   

    const result = () => {
        let tempResult = (
                <CheckboxCheckedSVG
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
        )
        if( toggleUnchecked ){
            tempResult = (
                <CheckboxUncheckedSVG
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
            )
        }

        return tempResult;
    };
    return  (
        <div onClick={handleClick} 
             style={{ opacity: disabled ? 0.3 : 1, cursor: disabled ? 'default' : 'pointer'}}
        >
            { result() }
        </div>
    );
}

export default Unchecked;
