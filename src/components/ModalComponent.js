import React from 'react';

const ModalComponent = ({modal, modalCloseFn}) => {


    const onClickCloseModal =(e)=>{
        e.preventDefault();
        modalCloseFn();
    }


    return (
        modal.isShow && (
        <div id='modal'>
            <div className="wrap">
                <div className="modal-container">
                    <div className="top">
                        <img src="./img/espoir/IMG1639fzr445801385.png" alt="" />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                                <p>FACE</p>
                            </li>
                            <li>
                                <p>프로 테일러 파운데이션 비 벨벳 <br /> SPF22 PA++ - 3호 아이보리</p>
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

export default ModalComponent;