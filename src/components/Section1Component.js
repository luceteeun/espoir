import React from 'react';

const Section1Component = () => {
    return (
        <section id="section1">
            <div className="line">
                <ul>
                    <li className="bar1"><button className='lineBar'></button></li>
                    {/* <li className="bar2"><button type="button" role="tab" aria-label="2 of 5"></button></li>
                    <li className="bar3"><button type="button" role="tab" aria-label="3 of 5"></button></li>
                    <li className="bar4"><button type="button" role="tab" aria-label="4 of 5"></button></li>
                    <li className="bar5"><button type="button" role="tab" aria-label="5 of 5"></button></li> */}
                </ul>
            </div>
            <div className="back-line">
                <ul>
                    <li><button></button></li>
                </ul>
            </div>
            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap">
                        <li className="slide slide1">
                            <div className="contents">
                                <p className="tit1">EVENT</p>
                                <p className="tit2">NO.1 베이스명가, 에스쁘아 쿠션대전</p>
                                <p className="tit3">쿠션 전품목 BIG SALE + 공식몰 단독 기프트를 놓치지 마세요</p>
                                <div className="tag-box">
                                    <a href="#!"><span>~35% OFF</span></a>
                                    <a href="#!"><span>GIFT</span></a>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide2">
                            <div className="contents">
                                <p className="tit1">EVENT</p>
                                <p className="tit2">신제품 출시 이벤트, 커먼 누드 톤업 쿠션</p>
                                <p className="tit3">커먼누드 톤업/코렉팅 쿠션 이벤트 참여하시고 쿠션 받아가세요</p>
                                <div className="tag-box">
                                    <a href='#!'><span>GIFT</span></a>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide3">
                            <div className="contents">
                                <p className="tit1">SPECIAL GIFT 증정</p>
                                <p className="tit2">더 브로우로 완성하는 #1초결리프팅</p>
                                <p className="tit3">#민스코브로우 #품절대란더브로우 20%할인+브로우키트 증정</p>
                                <div className="tag-box">
                                    <a href="#!"><span>20% OFF</span></a>
                                    <a href="#!"><span>GIFT</span></a>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide4">
                            <div className="contents">
                                <p className="tit1">Hit item</p>
                                <p className="tit2">#인생 팔레트, 리얼 아이 팔레트</p>
                                <p className="tit3">매일 쉽게 다채로운 메이크업을 완성! #풀메팔레트 #애교살 #눈매교정</p>
                                <div className="tag-box">
                                    <a href="#!"><span>~30% OFF</span></a>
                                    <a href="#!"><span>GIFT</span></a>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide5">
                            <div className="contents">
                                <p className="tit1">NEW COLOR</p>
                                <p className="tit2">촉맑탱! 꾸뛰르 립 틴트 샤인 #모두의 여름</p>
                                <p className="tit3">에스쁘아의 촉맑탱 썸머 립 컬러를 만나보세요!</p>
                                <div className="tag-box">
                                    <a href="#!"><span>~25% OFF</span></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section1Component;