import React from 'react';

const Section5Component = ({modalShowFn, modal2ShowFn}) => {

    const onClickPlus1 =(e)=>{
        e.preventDefault();
        modalShowFn();
    }

    const onClickPlus3 =(e)=>{
        e.preventDefault();
        modal2ShowFn();
    }


    return (
        <section id='section5'>
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <div className="top-bg">
                            <img src="./img/espoir/IMG1644PQE545675132.jpg" alt="" />
                        </div>
                        <div className="top-img-box">
                            <img src="./img/espoir/IMG1644zxg545680141.jpg" alt="" />
                            <div className="button-box1">
                                <button onClick={onClickPlus1}></button>
                            </div>
                        </div>
                        <div className="text-box">
                            <h2>PEACH BASE LOOK</h2>
                        </div>
                        <div className="bottom-img-box">
                            <div className="img-gap">
                                <div className="left-img">
                                    <img src="./img/espoir/IMG1644QlG545691739.jpg" alt="" />
                                    <div className="button-box3">
                                        <button onClick={onClickPlus3}></button>
                                    </div>
                                </div>
                                <div className="right-img">
                                    <img src="./img/espoir/IMG1644fHe545695177.jpg" alt="" />
                                    <div className="button-box4">
                                        <button onClick={onClickPlus1}></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-wrap">
                            <div className="bottom-btn">
                                <div className="gap">
                                    <a href="#!" className='viewMore-btn'>VIEW MORE</a>
                                </div> 
                            </div>
                            <div className="bottom-textSlide">
                                <div className="gap">
                                    <div className="wrap">
                                        <div className="text-wrap">
                                            <span className='expect'>EXPECT</span>
                                            <span className='better'>BETTER YOU</span>
                                        </div>
                                        <div className="text-wrap">
                                            <span className='expect'>EXPECT</span>
                                            <span className='better'>BETTER YOU</span>
                                        </div>
                                        <div className="text-wrap">
                                            <span className='expect'>EXPECT</span>
                                            <span className='better'>BETTER YOU</span>
                                        </div>
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

export default Section5Component;