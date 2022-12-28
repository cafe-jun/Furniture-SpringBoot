import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-color" data-bg-color="#ffffff">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row border-bottom pt--70 pb--70">
            <div className="col-lg-3 col-sm-6 offset-md-1 offset-lg-0 mb-md--45">
              <div className="footer-widget">
                <div className="textwidget">
                  <figure className="footer-logo mb--30">
                    <img
                      src={require("../../assets/img/logo/kaare.jpg")}
                      alt="Logo"
                    />
                  </figure>
                  <p>
                    KAARE KLINT의 브렌드 아이덴티티는 3개의 손가락을 형상화한
                    형태이며, 단순한 기능주의가 아닌 실용적 아이디어와 감성이
                    담겨 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-3 offset-lg-1 offset-sm-2 mb-md--45">
              <div className="footer-widget">
                <h3 className="widget-title mb--35 mb-sm--20">Company</h3>
                <div className="footer-widget">
                  <ul className="footer-menu">
                    <li>
                      <a href="company.fu">About Us</a>
                    </li>
                    {/* <li><a href="reviewmain.fu">Review</a></li> <!-- *************실행X -->
                                        <!-- <li><a href="company.fu">Careers</a></li> --> */}
                    <li>
                      <a href="event_list.fu">Event</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 offset-md-1 offset-lg-0 mb-xs--45">
              <div className="footer-widget">
                <h3 className="widget-title mb--35 mb-sm--20">Product</h3>
                <div className="footer-widget">
                  <ul className="footer-menu">
                    <li>
                      <a href="living_total.fu">거실 / 리빙룸</a>
                    </li>
                    <li>
                      <a href="diningfull.fu">주방 / 다이닝룸</a>
                    </li>
                    <li>
                      <a href="bed_total.fu">침실 / 베드룸</a>
                    </li>
                    <li>
                      <a href="decofull.fu">홈데코 / 리빙</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 mb-xs--45">
              <div className="footer-widget">
                <h3 className="widget-title mb--35 mb-sm--20">Helps</h3>
                <div className="footer-widget">
                  <ul className="footer-menu">
                    {/* <!-- <li><a href="#">Introduction</a></li> -->
                                        <!-- <li><a href="#">Feedback</a></li> -->
                                        <li><a href="qnamain.fu">Q&A</a></li>
                                        <!-- <li><a href="#">Network Status</a></li> --> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widget-title mb--35 mb-sm--20">
                  Social Network
                </h3>
                <div className="footer-widget">
                  <ul className="footer-menu">
                    <li>
                      <a href="https://www.facebook.com/kaareklintstory/">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/explore/tags/%EC%B9%B4%EB%A0%88%ED%81%B4%EB%A6%B0%ED%8A%B8/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>{" "}
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <a href="#">Google +</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle ptb--40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="footer-widget">
                <div className="taglist">
                  (주)카레클린트&nbsp;&nbsp;|&nbsp;&nbsp;대표자: 김동철 박난주
                  박제선 신준석 조유록 최효은&nbsp;&nbsp;|&nbsp;&nbsp;사업자
                  등록번호
                  안내:[211-88-75657]&nbsp;&nbsp;|&nbsp;&nbsp;통신판매업 신고
                  2012-서울강남-03297&nbsp;&nbsp;&nbsp;&nbsp;[사업자정보확인]
                  <br />
                  대표번호: 1599-4797 A/S서비스센터: 1644-2908 서비스센터
                  운영시간:평일 10:00-17:00&nbsp;&nbsp;|&nbsp;&nbsp;주소: 135948
                  서울 강남구 청담동 3-11 개인정보관리책임자:김동철-신준석
                  <br />
                  |&nbsp;&nbsp;Contact <b>kaareklint@naver.com</b> for more
                  information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="row border-top ptb--20">
            <div className="col-12 text-center">
              <p className="copyright-text">
                Copyright &copy; 2016 <b>(주)카레클린트</b> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
