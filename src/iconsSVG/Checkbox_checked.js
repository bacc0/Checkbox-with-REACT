import React from 'react';

const Checkbox_checked = ({ mainColor, checked_Fill_Color, width_height }) => {

    const fill_1 = 'none';
    const opacity_1 = 0.5;

    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width_height}
            height={width_height}
        >
            <title>ic_checkbox_checked</title>

            <g id="_Group_" data-name="&lt;Group&gt;">

                <g id="_Group_2" data-name="&lt;Group&gt;">
                    <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        stroke={checked_Fill_Color}
                        strokeWidth="1"
                        fill={checked_Fill_Color}
                    />
                </g>

                <rect id="_Rectangle_" data-name="&lt;Rectangle&gt;"
                    // class="cls-1"
                    width="24"
                    height="24"
                    fill={fill_1}
                    opacity={opacity_1}
                />
                <polygon
                    id="_Path_"
                    data-name="&lt;Path&gt;"
                    points="10.28 16.93 10.13 16.79 9.92 17 5.75 13.06 7.86 11.02 10.19 13.22 17.45 6.33 19.43 8.25 10.28 16.93"
                    fill={mainColor}
                />
            </g>
        </svg>
    )
}
export default Checkbox_checked
