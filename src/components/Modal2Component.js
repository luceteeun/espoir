import React from 'react';

const Modal2Component = ({modal, modal2CloseFn}) => {


    const onClickCloseModal =(e)=>{
        e.preventDefault();
        modal2CloseFn();
    }

    return (
        modal.isShow2 && (
        <div id='modal'>
            <div className="wrap">
                <div className="modal-container">
                    <div className="top">
                        <img src="./img/espoir/IMG1639ocL457948898.png" alt="" />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                                <p>FACE</p>
                            </li>
                            <li>
                                <p>프로 테일러 비 벨벳 커버 쿠션 SPF34 <br /> PA++(단품+리필) - 2호 아이보리</p>
                            </li>
                            <li>
                                <a href="#!">자세히 보기</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={onClickCloseModal}></button>
                </div>
            </div>
        </div>
        )
        
    );
};

export default Modal2Component;