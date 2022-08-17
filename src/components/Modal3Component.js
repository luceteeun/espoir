import React from 'react';

const Modal3Component = ({modal, modal3CloseFn}) => {


    const onClickCloseModal =(e)=>{
        e.preventDefault();
        modal3CloseFn();
    }

    return (
        modal.isShow3 && (
        <div id='modal'>
            <div className="wrap">
                <div className="modal-container">
                    <div className="top">
                        <img src="./img/espoir/IMG1637QFL718582217.png" alt="" />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                                <p>LIP</p>
                            </li>
                            <li>
                                <p>꾸뛰르 립 틴트 워터벨벳 - 5호 체리온탑</p>
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

export default Modal3Component;