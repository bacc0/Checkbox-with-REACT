import React, { useState } from 'react';
import CheckBox from './components/__CheckBox';

function App() {

    const [backgroundColor, setBackgroundColor] = useState('#282c3411');
    const [mainColor, setMainColor] = useState('#282c34');
    const checked_Fill_Color = '#28B1EB';
    
    const width_height  =  38;
    const textColor = { color: mainColor , marginLeft: 20, minWidth: 180, fontSize: 16};
    const textColorDisabled = { color: mainColor + 55 , marginLeft: 20, minWidth: 180, fontSize: 16 };

    const handleClickButton_Color = () => {
        setBackgroundColor(backgroundColor === '#282c3411' ? '#282c34' : '#282c3411');
        setMainColor(mainColor === '#FFFFFF' ? '#282c34' : '#FFFFFF');
    };

    const checkBox_onChange = (val) => {
        console.log(val)
        return val
    };

    const result_checked = () => {
        return (
            <div  style={container}>
                <CheckBox
                    typeOfCheckBox={'checked'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    checkBox_onChange={checkBox_onChange}
                />
                <span style={textColor}>Checked</span>
            </div>
        )
    };

    const result_checkedDisable = () => {
        return (
            <div style={container}>
                <CheckBox
                    typeOfCheckBox={'checked'}
                    disabled={'disabled'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
                <span style={textColorDisabled}>Checked Disabled</span>
            </div>
        )
    };

    const result_half = () => {
        return (
            <div style={container}>
                <CheckBox
                    typeOfCheckBox={'half'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    checkBox_onChange={checkBox_onChange}
                />
                <span style={textColor}>Half Checked</span>
            </div>
        )
    };

    const result_halfDisable = () => {
        return (
            <div style={container}>
                <CheckBox
                    typeOfCheckBox={'half'}
                    disabled={'disabled'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
                <span style={textColorDisabled}>Half Checked Disabled</span>
            </div>
        )
    };

    const result_unchecked = () => {
        return (
            <div style={container}>
                <CheckBox
                    typeOfCheckBox={'unchecked'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                    checkBox_onChange={checkBox_onChange}
                />
                <span style={textColor}>Unchecked</span>
            </div>
        )
    };

    const result_uncheckedDisabled = () => {
        return (
            <div style={container}>
                <CheckBox
                    typeOfCheckBox={'unchecked'}
                    disabled={'disabled'}
                    mainColor={mainColor}
                    checked_Fill_Color={checked_Fill_Color}
                    width_height={width_height}
                />
                <span style={textColorDisabled}>Unchecked Disabled</span>
            </div>
        )
    };


    return (
        <div style={{ backgroundColor: backgroundColor, transition: 'background-color 200ms ease-in-out' }}>
            <span style={styleApp}>
                <button onClick={handleClickButton_Color} style={styleButton}>
                    CHANGE THE COLOR
                </button>
                
                {result_checked()}
                {result_checkedDisable()}

                {result_half()}
                {result_halfDisable()}

                {result_unchecked()}
                {result_uncheckedDisabled()}
            </span>
        </div>
    );
};

export default App;



const styleApp = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
};


const container = {
    display: 'flex', 
    alignItems: 'center',
};


const styleButton = {
    margin: '100px 0 60px',
    color: '#28B1EB',
    backgroundColor: 'transparent',
    border: '3px solid #28B1EB',
    padding: '16px 40px',
    cursor: 'pointer',
    fontSize: '1.1rem'
};

