import React from 'react'

const Checkbox_half = ({ mainColor, width_height }) => {

    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width_height}
            height={width_height}
        >
            <title>ic_checkbox_half</title>

            <g id="_Group_2" data-name="&lt;Group&gt;">
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    stroke={mainColor}
                    strokeWidth="1"
                    fill={'none'}
                />
            </g>
            <rect x="7" y="10.5"
                width="10"
                height="3"
                fill={mainColor}
            />
        </svg>
    )
}

export default Checkbox_half
