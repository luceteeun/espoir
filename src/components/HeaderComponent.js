import React from 'react';

const HeaderComponent = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <div className="header-top">
                            <h1><a href="https://www.espoir.com/ko/main.do"><img src="./img/espoir/logo_b.png" alt="logo" /></a></h1>
                            <div className="left-top">
                                <ul className="up">
                                    <li><a href="#!">로그인</a></li>
                                    <li><a href="#!">회원가입</a></li>
                                </ul>
                                <ul className="down">
                                    <li><a href="#!"> </a></li>
                                    <li><a href="#!"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <h2><a href="#!" className='menu-btn'>MENU</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;