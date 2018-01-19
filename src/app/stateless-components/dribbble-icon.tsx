/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Amal Shasthree Karunarathna
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from 'react';

import './dribbble-icon.pcss';

//noinspection TsLint
const DribbbleIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"
         shapeRendering="geometricPrecision" imageRendering="optimizeQuality" colorRendering="optimizeQuality">
        <title>Dribbble</title>
        <g fill="none" fillRule="evenodd">
            <path
                d="M0 30C0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30z"
                fill="#F26798"/>
            <path
                className="dribbble-ball"
                d="M46 29.978a16.005 16.005 0 0 1-1.26 6.219 16.11 16.11 0 0 1-3.428 5.078 16.438 16.438 0 0 1-2.366 1.95 16.164 16.164 0 0 1-2.718 1.473 16.069 16.069 0 0 1-12.457 0 16.174 16.174 0 0 1-2.719-1.473 16.125 16.125 0 0 1-4.319-4.315 15.964 15.964 0 0 1-2.41-5.716 16.172 16.172 0 0 1 0-6.433 15.886 15.886 0 0 1 2.41-5.718c.572-.847 1.23-1.64 1.953-2.364a16.07 16.07 0 0 1 5.085-3.424c.966-.409 1.977-.721 3.006-.93a16.123 16.123 0 0 1 9.45.93c.95.402 1.864.897 2.719 1.476a16.356 16.356 0 0 1 2.367 1.948c.723.724 1.38 1.517 1.952 2.364a15.832 15.832 0 0 1 2.409 5.718A15.99 15.99 0 0 1 46 29.978zM24.17 17.636a13.665 13.665 0 0 0-7.542 9.529c.36.003 6.054.074 12.615-1.666a82.155 82.155 0 0 0-5.074-7.863zm6.205 9.964c-7.035 2.103-13.787 1.952-14.029 1.943-.004.146-.01.288-.01.435 0 3.505 1.324 6.7 3.5 9.117-.004-.007 3.735-6.632 11.109-9.013.178-.059.359-.112.539-.163a46.118 46.118 0 0 0-1.109-2.32zm8.648-7.863A13.609 13.609 0 0 0 30 16.334c-1.11 0-2.187.135-3.22.383.205.274 2.772 3.674 5.109 7.959 5.155-1.93 7.102-4.889 7.135-4.939zM32.415 32.18l-.09.03c-8.063 2.807-10.695 8.462-10.724 8.524A13.647 13.647 0 0 0 30 43.621a13.61 13.61 0 0 0 5.335-1.081c-.202-1.192-.996-5.37-2.919-10.36zm5.22 9.114a13.647 13.647 0 0 0 5.855-9.153c-.281-.09-4.104-1.299-8.515-.593 1.793 4.919 2.52 8.924 2.66 9.746zM32.939 26.71a43.027 43.027 0 0 1 1.203 2.685c4.694-.59 9.319.403 9.517.443a13.563 13.563 0 0 0-3.108-8.527c-.025.037-2.217 3.199-7.612 5.399z"
                fill="#FFF"/>
        </g>
    </svg>
);

export {DribbbleIcon};
