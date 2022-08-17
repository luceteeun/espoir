import React from 'react';
import Section1Component from './Section1Component.js';
import Section2Component from './Section2Component.js';
import Section3Component from './Section3Component.js';
import Section4Component from './Section4Component.js';
import Section5Component from './Section5Component.js';
import Section6Component from './Section6Component.js';
import Section7Component from './Section7Component.js';

const MainComponent = ({modalShowFn, modal2ShowFn, modal3ShowFn}) => {
    return (
        <main id="main">
            <Section1Component/>
            <Section2Component modalShowFn={modalShowFn} modal2ShowFn={modal2ShowFn}/>
            <Section3Component modalShowFn={modalShowFn} modal2ShowFn={modal2ShowFn} modal3ShowFn={modal3ShowFn}/>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>
            <Section7Component/>
        </main>
    );
};

export default MainComponent;