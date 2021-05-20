import React, { Fragment } from 'react';

import Checked from './Checked';
import HalfChecked from './HalfChecked';
import Unchecked from './Unchecked';

const CheckBox = ({ typeOfCheckBox, mainColor, width_height, disabled, checkBox_onChange, checked_Fill_Color}) => {


    return (
        <Fragment>
            {
                typeOfCheckBox === 'checked' &&
                <Checked
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    disabled={disabled}
                    checkBox_onChange={checkBox_onChange}
                  
                />
            }
            {
                typeOfCheckBox === 'half' &&
                <HalfChecked
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    disabled={disabled}
                    checkBox_onChange={checkBox_onChange}
                />
            }
            {
                typeOfCheckBox === 'unchecked' &&
                <Unchecked
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    disabled={disabled}
                    checkBox_onChange={checkBox_onChange}
                />
            }
        </Fragment>
    )
}

export default CheckBox;
