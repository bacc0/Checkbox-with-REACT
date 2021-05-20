import React, { useState } from 'react';

import CheckboxCheckedSVG from '../iconsSVG/Checkbox_checked';
import CheckboxHalfSVG from '../iconsSVG/Checkbox_half';
import CheckboxUncheckedSVG from '../iconsSVG/Checkbox_unchecked';

const HalfChecked = ({ mainColor, width_height, disabled, checkBox_onChange, checked_Fill_Color }) => {

    const [toggleHalfChecked, setToggleHalfChecked] = useState(0);

    const handleClick = () => {

        let temp = toggleHalfChecked === 0
                    ? 1
                    : toggleHalfChecked === 1
                        ? 2
                        : 0;
        if (!disabled){
            setToggleHalfChecked(temp)
            checkBox_onChange(temp)
            }
    };

    const result = () => {
        let tempResult = (
            <CheckboxHalfSVG
                mainColor={mainColor}
                checked_Fill_Color={checked_Fill_Color}
                width_height={width_height}
            />
        )
        if (toggleHalfChecked === 1 && !disabled) {
            tempResult = (
                <CheckboxCheckedSVG
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
            )
        }
        if (toggleHalfChecked === 2 && !disabled) {
            tempResult = (
                <CheckboxUncheckedSVG
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
            )
        }

        return tempResult;
    }
    return  (
            <div onClick={handleClick} 
                 style={{ opacity: disabled ? 0.3 : 1, cursor: disabled ? 'default' : 'pointer' }}
            >
                { result() }
            </div>
    )
}

export default HalfChecked;
