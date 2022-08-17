import React from 'react';

const Section3Component = ({modalShowFn, modal2ShowFn, modal3ShowFn}) => {

    const onClickPlus1 =(e)=>{
        e.preventDefault();
        modalShowFn();
    }

    const onClickPlus2 =(e)=>{
        e.preventDefault();
        modal3ShowFn();
    }

    const onClickPlus3 =(e)=>{
        e.preventDefault();
        modal2ShowFn();
    }


    return (
        <section id='section3'>
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <div className="top-bg">
                            <img src="./img/espoir/IMG1644uec544893407.jpg" alt="" />
                        </div>
                        <div className="top-img-box">
                            <img src="./img/espoir/IMG1644MDr544900587.jpg" alt="" />
                            <div className="button-box1">
                                <button onClick={onClickPlus1}></button>
                            </div>
                            <div className="button-box2">
                                <button onClick={onClickPlus2}></button>
                            </div>
                        </div>
                        <div className="text-box">
                            <h2>BE VELVET LOOK</h2>
                        </div>
                        <div className="bottom-img-box">
                            <div className="img-gap">
                                <div className="left-img">
                                    <img src="./img/espoir/IMG1644oPo544912286.jpg" alt="" />
                                    <div className="button-box3">
                                        <button onClick={onClickPlus3}></button>
                                    </div>
                                </div>
                                <div className="right-img">
                                    <img src="./img/espoir/IMG1644FUN544916748.jpg" alt="" />
                                    <div className="button-box4">
                                        <button onClick={onClickPlus1}></button>
                                    </div>
                                    <div className="button-box5">
                                        <button onClick={onClickPlus3}></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3Component;