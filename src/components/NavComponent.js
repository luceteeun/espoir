import React from 'react';

const NavComponent = () => {
    return (
        <nav id="nav" data-mcs-theme="minimal-dark">
            <div className="nav-container">
                <div className="nav-header">
                    <h2><a href="#!"><img src="./img/espoir/logo_b.png" alt="" /></a></h2>
                </div>
                <div className="nav-content">
                    <ul>
                        <li>
                            <a href="https://www.espoir.com/ko/customer/cs_brandInfo.do" className='main-btn m1'>ABOUT</a>
                        </li>
                        <li>
                            <a href="#!" className='main-btn m2'>SHOP</a>
                            <ul>
                                <li><a href="#!" className='sub-btn'>NEW</a></li>
                                <li><a href="#!" className='sub-btn'>BEST</a></li>
                                <li><a href="#!" className='sub-btn'>FACE</a></li>
                                <li><a href="#!" className='sub-btn'>LIP</a></li>
                                <li><a href="#!" className='sub-btn'>EYE</a></li>
                                <li><a href="#!" className='sub-btn'>SUN</a></li>
                                <li><a href="#!" className='sub-btn'>OTHER</a></li>
                                <li><a href="#!" className='sub-btn'>HOT DEAL</a></li>
                                <li><a href="#!" className='sub-btn'>LOOK BOOK</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!" className='main-btn m3'>ARTIST SERVICE</a>
                            <ul>
                                <li><a href="#!" className='sub-btn'>ONLINE CONSULTING</a></li>
                                <li>
                                    <a href="#!" className='sub-btn'>OFFLINE CONSULTING</a>
                                    <ul>
                                        <li><a href="#!" className='sub-sub-btn'>- TOUCH UP</a></li>
                                        <li><a href="#!" className='sub-sub-btn'>- EYEBROW BAR</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!" className='main-btn m4'>COMMUNITY</a>
                            <ul>
                                <li><a href="#!" className='sub-btn'>NOTICE</a></li>
                                <li><a href="#!" className='sub-btn'>Q&A</a></li>
                                <li><a href="#!" className='sub-btn'>EVENT</a></li>
                                <li><a href="#!" className='sub-btn'>REVIEW</a></li>
                                <li><a href="#!" className='sub-btn'>STORE</a></li>
                            </ul>
                        </li>
                        <li>
                            <button>KOR</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;