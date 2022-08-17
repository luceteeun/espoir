import React from 'react';

const Section2Component = ({modalShowFn, modal2ShowFn}) => {
    

    const onClickPlus1 =(e)=>{
        e.preventDefault();
        modalShowFn();
    }

    const onClickPlus2 =(e)=>{
        e.preventDefault();
        modal2ShowFn();
    }


    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <h2 class="move-text">
		                    <span class="move-left">PRO TAILOR</span>
	                    </h2>
                        <h2 className="move-text bottom">
                            <span className='move-right'>BE VELVET</span>
                        </h2>
                        <div className="img-wrap">
                            <div className="left-img">
                                <img src="./img/espoir/IMG1644LSJ544669922.jpg" alt="" />
                                <div className="button-box">
                                    <button onClick={onClickPlus1}></button>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src="./img/espoir/IMG1644sxc544673335.png" alt="" />
                                <div className="button-box">
                                    <button onClick={onClickPlus2}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2Component;