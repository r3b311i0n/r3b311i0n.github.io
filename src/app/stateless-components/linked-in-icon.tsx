import * as React from 'react';
import './linked-in-icon.pcss';

//noinspection TsLint
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>LinkedIn</title>
        <g fill="#0077b5" fillRule="evenodd">
            <path
                d="M 0,30 C 0,13.431457 13.431457,0 30,0 46.568543,0 60,13.431457 60,30 60,46.568543 46.568543,60 30,60 13.431457,60 0,46.568543 0,30 Z"
            />
            <g fill="#FFF">
                <path
                    d="M 21.200677,24.84731 V 45.27445 H 14.402021 V 24.84731 Z"
                    className="linked-in-i"
                />
                <path
                    d="m 21.648454,18.528372 c 0,1.961382 -1.476387,3.530813 -3.846969,3.530813 h -0.04345 C 15.475572,22.059185 14,20.489754 14,18.528372 14,16.525504 15.520513,15 17.84629,15 c 2.325777,0 3.758038,1.525504 3.802164,3.528372 z"
                    className="linked-in-tittle"
                />
                <path
                    d="M 45.719232,33.562152 45.718961,45.27445 H 38.920576 V 34.345919 c 0,-2.745013 -0.983805,-4.618135 -3.444948,-4.618135 -1.878272,0 -2.997035,1.262758 -3.488394,2.482402 -0.179762,0.437098 -0.223888,1.046106 -0.223888,1.656606 v 11.4082 h -6.799471 c 0,0 0.08961,-18.510362 0,-20.427139 h 6.799471 v 2.893333 c 0.902341,-1.390877 2.518438,-3.373544 6.128077,-3.373544 4.473829,0 7.827809,2.920177 7.827809,9.19451 z"
                    className="linked-in-n"
                />
            </g>
        </g>
    </svg>
);

export default LinkedInIcon;
