import React from "react";

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__inner fixed-header">
          <div className="header__main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="header__main-inner">
                    <div className="header__main-left">
                      <div className="logo">
                        <a href="home.fu" className="logo--normal">
                          <img
                            src={require("../../assets/img/logo/kaare.jpg")}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="header__main-center">
                      <nav className="main-navigation text-center d-none d-lg-block">
                        <ul className="mainmenu">
                          <li className="mainmenu__item menu-item-has-children megamenu-holder">
                            <a href="" className="mainmenu__link">
                              <span className="mm-text">제 품</span>
                            </a>
                            <ul className="megamenu">
                              <li>
                                <a
                                  className="megamenu-title"
                                  href="living_total.fu"
                                >
                                  <span className="mm-text">거실 / 리빙룸</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="living_sunb.fu?cateEn=sunb">
                                      <span className="mm-text">
                                        ★선브렐라 소파
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_fabric.fu?cateEn=fabric">
                                      <span className="mm-text">
                                        패브릭 소파
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_leather.fu?cateEn=leather">
                                      <span className="mm-text">가죽 소파</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_deus.fu?cateEn=deus">
                                      <span className="mm-text">
                                        데우스 소파
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_sideTable.fu?cateEn=sideTable">
                                      <span className="mm-text">
                                        사이드 테이블
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_TV.fu?cateEn=TV">
                                      <span className="mm-text">TV 장</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_shelf.fu?cateEn=shelf">
                                      <span className="mm-text">선반</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="living_bookcase.fu?cateEn=bookcase">
                                      <span className="mm-text">북 케이스</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  className="megamenu-title"
                                  href="diningfull.fu"
                                >
                                  <span className="mm-text">주방/다이닝룸</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="dining_sunbrella.fu?cateEn=sunbrella">
                                      <span className="mm-text">
                                        선브렐라 체어
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_clean.fu?cateEn=clean">
                                      <span className="mm-text">
                                        클린터치 테이블
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_rnl.fu?cateEn=rnl">
                                      <span className="mm-text">
                                        리놀륨 테이블
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_table.fu?cateEn=table">
                                      <span className="mm-text">
                                        테이블 / 식탁
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_chair.fu?cateEn=chair">
                                      <span className="mm-text">
                                        체어 / 의자
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_deco.fu?cateEn=deco">
                                      <span className="mm-text">장식장</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="dining_desk.fu?cateEn=desk">
                                      <span className="mm-text">
                                        책상 / 선반
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  className="megamenu-title"
                                  href="bed_total.fu"
                                >
                                  <span className="mm-text">침실 / 베드룸</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="bed_bed.fu?cateEn=BED">
                                      <span className="mm-text">침대</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="bed_ht.fu?cateEn=ht">
                                      <span className="mm-text">협탁</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="bed_dressingTable.fu?cateEn=dressingTable">
                                      <span className="mm-text">화장대</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="bed_chiff.fu?cateEn=chiff">
                                      <span className="mm-text">서랍장</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  className="megamenu-title"
                                  href="decofull.fu"
                                >
                                  <span className="mm-text">홈데코/리빙</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="deco_monthly.fu?cateEn=monthly">
                                      <span className="mm-text">
                                        월간 카레클린트
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="deco_light.fu?cateEn=light">
                                      <span className="mm-text">조명</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="deco_plasticch.fu?cateEn=plasticch">
                                      <span className="mm-text">
                                        PLASTIC 체어
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          {/* <!-- 지점안내  -->
                            <%@include file="/WEB-INF/views/location/LocationTab.jsp" %>
                            
                            
                            <!-- Page -->
                            <!--  */}
                          <li className="mainmenu__item menu-item-has-children">
                            <a href="#" className="mainmenu__link">
                              <span className="mm-text">Pages</span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="my-account.fu">
                                  <span className="mm-text">My Account</span>
                                </a>
                              </li>
                              <li>
                                <a href="checkout.fu">
                                  <span className="mm-text">Checkout</span>
                                </a>
                              </li>
                              <li>
                                <a href="cart.fu">
                                  <span className="mm-text">Cart</span>
                                </a>
                              </li>
                              <li>
                                <a href="compare.fu">
                                  <span className="mm-text">Compare</span>
                                </a>
                              </li>
                              <li>
                                <a href="order-tracking.fu">
                                  <span className="mm-text">Track Order</span>
                                </a>
                              </li>
                              <li>
                                <a href="wishlist.fu">
                                  <span className="mm-text">Wishlist</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* -->
                           */}
                          <li className="mainmenu__item menu-item-has-children">
                            <a href="#" className="mainmenu__link">
                              <span className="mm-text">커뮤니티</span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="qnamain.fu">
                                  <span className="mm-text">Q&A</span>
                                </a>
                              </li>
                              <li>
                                <a href="reviewmain.fu">
                                  <span className="mm-text">상품평</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mainmenu__item menu-item-has-children">
                            <a href="event_list.fu" className="mainmenu__link">
                              <span className="mm-text">Event</span>
                            </a>
                          </li>

                          <li className="mainmenu__item menu-item-has-children">
                            {/* <!--   <span className="mm-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> --> */}
                          </li>

                          <li className="mainmenu__item menu-item-has-children"></li>

                          {/* <c:choose>
                            <c:when test="${not empty sessionScope.email }">
                              <li className="mainmenu__item menu-item-has-children">
                                <a
                                  href="${pageContext.request.contextPath }/home.fu"
                                  className="mainmenu__link"
                                >
                                  <span className="mm-text" id="session_Names">
                                    ${sessionScope.email} 님
                                  </span>
                                </a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="<%=cp%>/mypage.fu">
                                      <span className="mm-text">마이페이지</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="<%=cp%>/deleteMember.fu">
                                      <span className="mm-text">회원탈퇴</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mainmenu__item menu-item-has-children">
                                <a
                                  href="${pageContext.request.contextPath }/logout.fu"
                                  className="mainmenu__link"
                                >
                                  <span className="mm-text">로그아웃</span>
                                </a>
                              </li>
                            </c:when>
                            <c:otherwise>
                              <li className="mainmenu__item menu-item-has-children">
                                <a href="login.fu" className="mainmenu__link">
                                  <span className="mm-text" id="session_login">
                                    로그인
                                  </span>
                                </a>
                              </li>
                              <li className="mainmenu__item menu-item-has-children">
                                <a href="register.fu" className="mainmenu__link">
                                  <span className="mm-text">회원가입</span>
                                </a>
                              </li>
                            </c:otherwise>
                          </c:choose> */}
                        </ul>
                      </nav>
                    </div>
                    <div className="header__main-right">
                      <div className="header-toolbar-wrap">
                        <div className="header-toolbar">
                          <div className="header-toolbar__item header-toolbar--search-btn">
                            <a
                              href="#searchForm"
                              className="header-toolbar__btn toolbar-btn"
                            >
                              <i className="la la-search"></i>
                            </a>
                          </div>{" "}
                          <div className="header-toolbar__item header-toolbar--minicart-btn">
                            <a
                              href="#miniCart"
                              className="header-toolbar__btn toolbar-btn"
                            >
                              <i className="la la-shopping-cart"></i>
                              <span>01</span>
                            </a>
                          </div>
                          <div className="header-toolbar__item d-block d-lg-none">
                            <a
                              href="#offcanvasMenu"
                              className="header-toolbar__btn toolbar-btn menu-btn"
                            >
                              <div className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
