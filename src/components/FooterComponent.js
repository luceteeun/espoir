import React from 'react';

const FooterComponent = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <div className="footer-top">
                            <div className="topbox-wrap">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#!">비회원주문조회</a></li>
                                        <li><a href="#!">매장 찾기</a></li>
                                        <li><a href="#!">브랜드 소개</a></li>
                                        <li><a href="#!">멤버십</a></li>
                                        <li><a href="#!">사이트맵</a></li>
                                    </ul>
                                </div>
                                <div className="footer-chat">
                                    <a href="#!">
                                        <h4>MAKEUP</h4>
                                        <h3>BEAUTY COUNSELING</h3>
                                    </a>
                                    <p>언제 어디서든 언택트! <br />
                                     아티스트와 상담하세요!</p>
                                </div>
                                <div className="footer-cs">
                                    <a href="#!">
                                        <h4>고객센터</h4>
                                        <h3>080 619 8888</h3>
                                    </a>
                                    <p>상담시간 13:00 ~ 17:00 <br />
                                    (월~금, 공휴일 제외)</p>
                                </div>
                                <div className="footer-sns">
                                    <ul className='sns-icon'>
                                        <li><a href="#!"></a></li>
                                        <li><a href="#!"></a></li>
                                        <li><a href="#!"></a></li>
                                        <li><a href="#!"></a></li>
                                        <li><a href="#!"></a></li>
                                        <li><a href="#!"></a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#!">로그인</a></li>
                                        <li><a href="#!">회원가입</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-quickmenu">
                                <ul>
                                    <li><a href="#!">서비스 이용약관</a></li>
                                    <li><a href="#!">개인정보처리방침</a></li>
                                    <li><a href="#!">영상기기 관리방침</a></li>
                                    <li><a href="#!">사업자 정보 확인</a></li>
                                    <li><a href="#!">이메일 무단수집 거부</a></li>
                                    <li><a href="#!">전자공고</a></li>
                                </ul>
                            </div>
                            <div className="address-box">
                                <p>(주)에스쁘아 대표이사: 이연정 &nbsp;&nbsp;&nbsp; 본사 : 서울특별시 용산구 한강대로 100 (한강로2가) 6층</p>
                                <p>사업자번호: 104-86-58598 &nbsp;&nbsp;&nbsp; 통신판매업신고번호 : 제 2017-서울용산-1293호  &nbsp;&nbsp;&nbsp; <a href="#!">사업자 정보 확인</a></p>
                                <p>개인정보보호책임자: 이연정 &nbsp;&nbsp;&nbsp; 고객상담: <a href="#!">080-619-8888</a> &nbsp;&nbsp;&nbsp; 이메일: espoirmall@espoir.com &nbsp;&nbsp;&nbsp; 호스팅제공자 : ㈜에스쁘아</p>
                                <p>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 이니시스 구매안전 서비스(에스크로)를 이용하실 수 있습니다. <a href="#!">서비스 가입사실 확인</a></p>
                                <p>Copyright ⓒ 2022 espoir. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;