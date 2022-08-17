import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';
import Modal2Component from './Modal2Component.js';
import Modal3Component from './Modal3Component.js';
import GoTopComponent from './GoTopComponent.js';
import NavComponent from './NavComponent.js';

const WrapComponent = () => {

    const [modal, setModal] = useState({isShow: false, isShow2: false, isShow3:false});

    // 모달1
    const modalShowFn =()=>{
        setModal({...modal, isShow:true});
    }

    const modalCloseFn =()=>{
        setModal({...modal, isShow:false});
    }

    //모달2
    const modal2ShowFn =()=>{
        setModal({...modal, isShow2:true});
    }

    const modal2CloseFn =()=>{
        setModal({...modal, isShow2:false});
    }

    //모달3
    const modal3ShowFn =()=>{
        setModal({...modal, isShow3:true});
    }

    const modal3CloseFn =()=>{
        setModal({...modal, isShow3:false});
    }


    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent modalShowFn={modalShowFn} modal2ShowFn={modal2ShowFn} modal3ShowFn={modal3ShowFn}/>
            <FooterComponent/>
            <ModalComponent modal={modal} modalCloseFn={modalCloseFn}/>
            <Modal2Component modal={modal} modal2CloseFn={modal2CloseFn}/>
            <Modal3Component modal={modal} modal3CloseFn={modal3CloseFn}/>
            <GoTopComponent/>
            <NavComponent/>
        </div>
    );
};

export default WrapComponent;