import React, {  useState } from 'react';
import CheckboxCheckedSVG from '../iconsSVG/Checkbox_checked';
import CheckboxUncheckedSVG from '../iconsSVG/Checkbox_unchecked';

const Checked = ({ mainColor, width_height, disabled, checkBox_onChange, checked_Fill_Color }) => {

    const [toggleChecked, setToggleChecked] = useState(true);

    const handleClick = () => {
        if (!disabled){
            setToggleChecked(toggleChecked === true ? false : true)
            checkBox_onChange(toggleChecked === true ? false : true)
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
        if (!toggleChecked && !disabled) {
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
        );
}

export default Checked;
