import React from "react";

const Main = () => {
  return (
    <div>
      <main className="main-content-wrapper">
        <section className="homepage-slider mb--75 mb-md--55">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div
                  className="element-carousel slick-right-bottom"
                  data-slick-options='{
                                "slidesToShow": 1, 
                                "arrows": true,
                                "prevArrow": {"buttonclassName": "slick-btn slick-prev", "iconclassName": "la la-arrow-left" },
                                "nextArrow": {"buttonclassName": "slick-btn slick-next", "iconclassName": "la la-arrow-right" }
                            }'
                  data-slick-responsive='[{"breakpoint": 768, "settings": {"arrows": false}}]'
                >
                  <div className="item">
                    <div
                      className="single-slide d-flex align-items-center bg-color"
                      data-bg-color="#ffffff"
                    >
                      <div className="row align-items-center no-gutters w-100">
                        <div className="col-xl-7 col-md-6 mb-sm--50">
                          <figure
                            data-animation="fadeInUp"
                            data-duration=".3s"
                            data-delay=".3s"
                            className="plr--15"
                          >
                            <img
                              src={require("../../assets/images/dining/detail/table/32_details_6.jpg")}
                              alt="Slider"
                              className="mx-auto"
                            />
                          </figure>
                        </div>
                        <div className="col-md-6 col-lg-5 offset-lg-1 offset-xl-0">
                          <div className="slider-content">
                            <div className="slider-content__text mb--40 mb-md--30">
                              <p
                                className="mb--15"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                EELEGANT WALNUT
                              </p>
                              <p
                                className="mb--20"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                과하지 않은 고급스러움
                              </p>
                              <h1
                                className="heading__primary lh-pt7"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                307 월넛테이블
                              </h1>
                            </div>
                            <div className="slider-content__btn">
                              <a
                                href="dining_table_details.fu?imageIndex=32&cateEn=table"
                                className="btn btn-outline btn-brw-2"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".6s"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="single-slide d-flex align-items-center bg-color"
                      data-bg-color="#ffffff"
                    >
                      <div className="row align-items-center no-gutters w-100">
                        <div className="col-xl-6 col-md-6 mb-sm--50 order-md-2">
                          <figure
                            data-animation="fadeInUp"
                            data-duration=".3s"
                            data-delay=".3s"
                            className="pl-15 pr--60"
                          >
                            <img
                              src="../../images/livingroom/216_detail1.jpg"
                              alt="Slider"
                              className="mx-auto"
                            />
                          </figure>
                        </div>
                        <div className="col-md-5 col-lg-5 offset-md-1 order-md-1">
                          <div className="slider-content">
                            <div className="slider-content__text border-color-2 mb--40 mb-md--30">
                              <p
                                className="mb--15"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                100 Styles
                              </p>
                              <p
                                className="mb--20"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                모두가 편안한, 오로지 휴식을 위한 소파
                              </p>
                              <h1
                                className="heading__primary lh-pt7"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".3s"
                              >
                                BRICK SOFA
                              </h1>
                            </div>
                            <div className="slider-content__btn">
                              <a
                                href="living_fabric_details.fu?imageIndex=216&cateEn=fabric"
                                className="btn btn-outline btn-brw-2 btn-brc-2"
                                data-animation="fadeInUp"
                                data-duration=".3s"
                                data-delay=".6s"
                              >
                                Shop Now
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
        </section>
        <section className="top-sale-area mb--75 mb-md--55">
          <div className="container">
            <div className="row mb--28 mb-md--18 mb-sm--33">
              <div className="col-md-3 text-md-left text-center">
                <h2>New Arrivals</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="element-carousel"
                  data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 3
                            }'
                  data-slick-responsive='[
                                {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                            ]'
                >
                  {/* <!-- index New Arrivals part -->
                                <%@include file="/WEB-INF/views/index_detail/newArrivals.jsp" %>
                                 */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-product-area mb--75 mb-md--55">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="feature-product bg-color"
                  data-bg-color="#ffffff"
                >
                  <div
                    className="feature-product__inner bg-color"
                    data-bg-color="#ffffff"
                  >
                    <div className="feature-product__info">
                      <p className="hastag">#Luxury Style</p>
                      <h2 className="feature-product__title">
                        <a href="deco_light.fu?cateEn=light">
                          Louis Poulsen Light
                        </a>
                      </h2>
                    </div>
                    <figure className="feature-product__image mb-sm--30">
                      <a href="deco_light_details.fu?imageIndex=420&cateEn=light">
                        <img
                          src="../../images/deco/detail/light/420_details_10.jpg"
                          alt="Feature Product"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-tab-area mb--30 mb-md--10">
          <div className="container">
            <div className="row mb--28 mb-md--18 mb-sm--33">
              <div className="col-md-3 text-md-left text-center">
                <h2>Best Products</h2>
              </div>
              <div className="col-md-9">
                <div className="tab-style-1">
                  <div
                    className="nav nav-tabs justify-content-md-end justify-content-center"
                    id="product-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="new-all-tab"
                      data-toggle="tab"
                      href="#living_total"
                      role="tab"
                      aria-controls="new-all"
                      aria-selected="true"
                    >
                      <span className="nav-text">거실/리빙룸</span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="new-wooden-tab"
                      data-toggle="tab"
                      href="#diningfull"
                      role="tab"
                      aria-controls="new-wooden"
                      aria-selected="false"
                    >
                      <span className="nav-text">주방/다이닝룸</span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="new-furnished-tab"
                      data-toggle="tab"
                      href="#bed_total"
                      role="tab"
                      aria-controls="new-furnished"
                      aria-selected="false"
                    >
                      <span className="nav-text">침실/베드룸</span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="new-table-tab"
                      data-toggle="tab"
                      href="#decofull"
                      role="tab"
                      aria-controls="new-table"
                      aria-selected="false"
                    >
                      <span className="nav-text">홈데코/리빙</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="product-tab-content">
                  {/* <!-- 거실/리빙룸 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/livingTab.jsp" %>
								
								<!-- 주방/다이닝룸 tab  -->
								<%@include file="/WEB-INF/views/index_detail/diningTab.jsp" %>
                                
                                <!-- 침실/베드룸 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/bedTab.jsp" %>
                                
                                <!-- 홈데코/리빙 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/decoTab.jsp" %> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="brand-logo-area mb--80 mb-md--60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="brand-log-wrapper bg-color ptb--75"
                  data-bg-color="#e9fefd"
                >
                  <div
                    className="element-carousel"
                    data-slick-options='{
                            "slidesToShow": 5,
                            "autoplay": true
                        }'
                    data-slick-responsive='[
                            {"breakpoint": 1200, "settings": {"slidesToShow": 4}},
                            {"breakpoint": 992, "settings": {"slidesToShow": 3}},
                            {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                            {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                        ]'
                  >
                    <div className="item">
                      <figure>
                        <img
                          src={require("../../assets/img/brand/brand-01.png")}
                          alt="Brand"
                          className="mx-auto"
                        />
                      </figure>
                    </div>
                    <div className="item">
                      <figure>
                        <img
                          src={require("../../assets/img/brand/brand-02.png")}
                          alt="Brand"
                          className="mx-auto"
                        />
                      </figure>
                    </div>
                    <div className="item">
                      <figure>
                        <img
                          src={require("../../assets/img/brand/brand-03.png")}
                          alt="Brand"
                          className="mx-auto"
                        />
                      </figure>
                    </div>
                    <div className="item">
                      <figure>
                        <img
                          src={require("../../assets/img/brand/brand-04.png")}
                          alt="Brand"
                          className="mx-auto"
                        />
                      </figure>
                    </div>
                    <div className="item">
                      <figure>
                        <img
                          src={require("../../assets/img/brand/brand-05.png")}
                          alt="Brand"
                          className="mx-auto"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="blog-area mb--70 mb-md--50">
          <div className="container">
            <div className="row mb--35 mb-md--23">
              <div className="col-12 text-center">
                <h2>News &amp; Updates</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="element-carousel"
                  data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 3,
                                "slidesToScroll": 1
                            }'
                  data-slick-responsive='[
                                {"breakpoint": 992, "settings": {"slidesToShow": 2}},
                                {"breakpoint": 768, "settings": {"slidesToShow": 1}}
                            ]'
                >
                  <div className="item">
                    <article className="blog">
                      <div className="blog__inner">
                        <div className="blog__media">
                          <figure className="image">
                            <img
                              src={require("../../assets/images/deco/월간카레클린트1월호.jpg")}
                              alt="Blog"
                              className="w-100"
                            />
                            <a
                              href="deco_monthly_details.fu?imageIndex=400&cateEn=monthly"
                              className="item-overlay"
                            ></a>
                          </figure>
                        </div>
                        <div className="blog__info">
                          <h2 className="blog__title">
                            <a href="deco_monthly_details.fu?imageIndex=400&cateEn=monthly">
                              월간카레클린트1월호
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="blog">
                      <div className="blog__inner">
                        <div className="blog__media">
                          <figure className="image">
                            <img
                              src={require("../../assets/images/deco/월간카레클린트2월호.jpg")}
                              alt="Blog"
                              className="w-100"
                            />
                            <a
                              href="deco_monthly_details.fu?imageIndex=401&cateEn=monthly"
                              className="item-overlay"
                            ></a>
                          </figure>
                        </div>
                        <div className="blog__info">
                          <h2 className="blog__title">
                            <a href="deco_monthly_details.fu?imageIndex=401&cateEn=monthly">
                              월간카레클린트2월호
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="blog">
                      <div className="blog__inner">
                        <div className="blog__media">
                          <figure className="image">
                            <img
                              src={require("../../assets/images/deco/월간카레클린트3월호.jpg")}
                              alt="Blog"
                              className="w-100"
                            />
                            <a
                              href="deco_monthly_details.fu?imageIndex=402&cateEn=monthly"
                              className="item-overlay"
                            ></a>
                          </figure>
                        </div>
                        <div className="blog__info">
                          <h2 className="blog__title">
                            <a href="deco_monthly_details.fu?imageIndex=402&cateEn=monthly">
                              월간카레클린트3월호
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
