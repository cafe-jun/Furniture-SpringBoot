<%@include file="/WEB-INF/views/header/fu_header2.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

        <!-- Main Content Wrapper Start -->
        <main class="main-content-wrapper">
            <!-- Slider area Start -->
            <section class="homepage-slider mb--75 mb-md--55">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="element-carousel slick-right-bottom"
                            data-slick-options='{
                                "slidesToShow": 1, 
                                "arrows": true,
                                "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-arrow-left" },
                                "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-arrow-right" }
                            }' 
                            data-slick-responsive='[{"breakpoint": 768, "settings": {"arrows": false}}]'>
                                
                                <!-- index-1 메인상단 슬라이드 이미지1 -->
                                <div class="item">
                                    <div class="single-slide d-flex align-items-center bg-color" data-bg-color="#ffffff">
                                        <div class="row align-items-center no-gutters w-100">
                                            <div class="col-xl-7 col-md-6 mb-sm--50">
                                                <figure data-animation="fadeInUp" data-duration=".3s" data-delay=".3s" class="plr--15">
                                                <!-- 307월넛테이블 -->
                                                    <img src="<%=cp %>/resources/images/dining/detail/table/32_details_6.jpg" alt="Slider O1 image" class="mx-auto">
                                                </figure>
                                            </div>
                                            <div class="col-md-6 col-lg-5 offset-lg-1 offset-xl-0">
                                                <div class="slider-content">
                                                    <div class="slider-content__text mb--40 mb-md--30">
                                                        <p class="mb--15" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">EELEGANT WALNUT</p>
                                                        <p class="mb--20" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">과하지 않은 고급스러움</p>
                                                        <h1 class="heading__primary lh-pt7" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">307 월넛테이블</h1>
                                                    </div>
                                                    <div class="slider-content__btn">
                                                        <a href="dining_table_details.fu?imageIndex=32&cateEn=table" class="btn btn-outline btn-brw-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- index-1 메인상단 슬라이드 이미지2 -->
                                <div class="item">
                                    <div class="single-slide d-flex align-items-center bg-color" data-bg-color="#ffffff">
                                        <div class="row align-items-center no-gutters w-100">
                                            <div class="col-xl-6 col-md-6 mb-sm--50 order-md-2">
                                                <figure data-animation="fadeInUp" data-duration=".3s" data-delay=".3s" class="pl-15 pr--60">
                                                    <img src="<%=cp %>/resources/images/livingroom/216_detail1.jpg" alt="Slider O1 image" class="mx-auto">
                                                </figure>
                                            </div>
                                            <div class="col-md-5 col-lg-5 offset-md-1 order-md-1">
                                                <div class="slider-content">
                                                    <div class="slider-content__text border-color-2 mb--40 mb-md--30">
                                                        <p class="mb--15" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">100 Styles</p>
                                                        <p class="mb--20" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">모두가 편안한, 오로지 휴식을 위한 소파</p>
                                                        <h1 class="heading__primary lh-pt7" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">BRICK SOFA</h1>
                                                    </div>
                                                    <div class="slider-content__btn">
                                                        <a href="living_fabric_details.fu?imageIndex=216&cateEn=fabric" class="btn btn-outline btn-brw-2 btn-brc-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
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
            <!-- Slider area End -->
            
            <!-- Top Sale Area Start -->
            <section class="top-sale-area mb--75 mb-md--55">
                <div class="container">
                	<div class="row mb--28 mb-md--18 mb-sm--33">
                        <div class="col-md-3 text-md-left text-center">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="element-carousel"
                            data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 3
                            }'
                            data-slick-responsive='[
                                {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                            ]'>
                                <!-- index New Arrivals part -->
                                <%@include file="/WEB-INF/views/index_detail/newArrivals.jsp" %>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Top Sale Area End -->

            <!-- Feature Product Area Start -->
            <section class="feature-product-area mb--75 mb-md--55">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="feature-product bg-color" data-bg-color="#ffffff">
                                <div class="feature-product__inner bg-color" data-bg-color="#ffffff">
                                    <div class="feature-product__info">
                                        <p class="hastag">#Luxury Style</p>
                                        <h2 class="feature-product__title"><a href="deco_light.fu?cateEn=light">Louis Poulsen Light</a></h2>
                                        
                                    </div>
                                    <figure class="feature-product__image mb-sm--30">
                                        <a href="deco_light_details.fu?imageIndex=420&cateEn=light">
                                            <img src="<%=cp %>/resources/images/deco/detail/light/420_details_10.jpg" alt="Feature Product">
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Feature Product Area End -->

            <!-- Product Tab Area Start -->
            <section class="product-tab-area mb--30 mb-md--10">
                <div class="container">
                    <div class="row mb--28 mb-md--18 mb-sm--33">
                        <div class="col-md-3 text-md-left text-center">
                            <h2>Best Products</h2>
                        </div>
                        <div class="col-md-9">
                            <div class="tab-style-1">
                                <div class="nav nav-tabs justify-content-md-end justify-content-center" id="product-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="new-all-tab" data-toggle="tab" href="#living_total" role="tab" aria-controls="new-all" aria-selected="true">
                                        <span class="nav-text">거실/리빙룸</span>
                                    </a>
                                    <a class="nav-item nav-link" id="new-wooden-tab" data-toggle="tab" href="#diningfull" role="tab" aria-controls="new-wooden" aria-selected="false">
                                        <span class="nav-text">주방/다이닝룸</span>
                                    </a>
                                    <a class="nav-item nav-link" id="new-furnished-tab" data-toggle="tab" href="#bed_total" role="tab" aria-controls="new-furnished" aria-selected="false">
                                        <span class="nav-text">침실/베드룸</span>
                                    </a>
                                    <a class="nav-item nav-link" id="new-table-tab" data-toggle="tab" href="#decofull" role="tab" aria-controls="new-table" aria-selected="false">
                                        <span class="nav-text">홈데코/리빙</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="product-tab-content">
                                
                                <!-- 거실/리빙룸 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/livingTab.jsp" %>
								
								<!-- 주방/다이닝룸 tab  -->
								<%@include file="/WEB-INF/views/index_detail/diningTab.jsp" %>
                                
                                <!-- 침실/베드룸 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/bedTab.jsp" %>
                                
                                <!-- 홈데코/리빙 Tab -->
                                <%@include file="/WEB-INF/views/index_detail/decoTab.jsp" %>

                                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Product Tab Area End -->
            
<!-- 
            Brand Logo Area Start
            <div class="brand-logo-area mb--80 mb-md--60">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                            <div class="brand-log-wrapper bg-color ptb--75" data-bg-color="#e9fefd">
                                <div class="element-carousel"
                                data-slick-options='{
                                    "slidesToShow": 5,
                                    "autoplay": true
                                }'
                                data-slick-responsive='[
                                    {"breakpoint": 1200, "settings": {"slidesToShow": 4}},
                                    {"breakpoint": 992, "settings": {"slidesToShow": 3}},
                                    {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                    {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                                ]'>
                                    <div class="item">
                                        <figure>
                                            <img src="/furnitureweb/resources/assets/img/brand/brand-01.png" alt="Brand" class="mx-auto">
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="/furnitureweb/resources/assets/img/brand/brand-02.png" alt="Brand" class="mx-auto">
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="/furnitureweb/resources/assets/img/brand/brand-03.png" alt="Brand" class="mx-auto">
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="/furnitureweb/resources/assets/img/brand/brand-04.png" alt="Brand" class="mx-auto">
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="/furnitureweb/resources/assets/img/brand/brand-05.png" alt="Brand" class="mx-auto">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            Brand Logo Area End
 -->            
            

            <!-- Best Sale Product Area Start -->
			<%@include file="/WEB-INF/views/index_detail/discount.jsp" %>
            <!-- Best Sale Product Area End -->

            <!-- Blog Area Start -->
            <section class="blog-area mb--70 mb-md--50">
                <div class="container">
                    <div class="row mb--35 mb-md--23">
                        <div class="col-12 text-center">
                            <h2>News &amp; Updates</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="element-carousel" data-slick-options='{
                                "spaceBetween": 30,
                                "slidesToShow": 3,
                                "slidesToScroll": 1
                            }'
                            data-slick-responsive='[
                                {"breakpoint": 992, "settings": {"slidesToShow": 2}},
                                {"breakpoint": 768, "settings": {"slidesToShow": 1}}
                            ]'>
                                <div class="item">
                                    <article class="blog">
                                        <div class="blog__inner">
                                            <div class="blog__media">
                                                <figure class="image">
                                                    <img src="<%=cp %>/resources/images/deco/월간카레클린트1월호.jpg" alt="Blog" class="w-100">
                                                    <a href="deco_monthly_details.fu?imageIndex=400&cateEn=monthly" class="item-overlay"></a>
                                                </figure>
                                            </div>
                                            <div class="blog__info">
                                                <h2 class="blog__title"><a href="deco_monthly_details.fu?imageIndex=400&cateEn=monthly">월간카레클린트1월호</a></h2>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="item">
                                    <article class="blog">
                                        <div class="blog__inner">
                                            <div class="blog__media">
                                                <figure class="image">
                                                    <img src="<%=cp %>/resources/images/deco/월간카레클린트2월호.jpg" alt="Blog" class="w-100">
                                                    <a href="deco_monthly_details.fu?imageIndex=401&cateEn=monthly" class="item-overlay"></a>
                                                </figure>
                                            </div>
                                            <div class="blog__info">
                                                <h2 class="blog__title"><a href="deco_monthly_details.fu?imageIndex=401&cateEn=monthly">월간카레클린트2월호</a></h2>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="item">
                                    <article class="blog">
                                        <div class="blog__inner">
                                            <div class="blog__media">
                                                <figure class="image">
                                                    <img src="<%=cp %>/resources/images/deco/월간카레클린트3월호.jpg" alt="Blog" class="w-100">
                                                    <a href="deco_monthly_details.fu?imageIndex=402&cateEn=monthly" class="item-overlay"></a>
                                                </figure>
                                            </div>
                                            <div class="blog__info">
                                                <h2 class="blog__title"><a href="deco_monthly_details.fu?imageIndex=402&cateEn=monthly">월간카레클린트3월호</a></h2>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Blog Area End -->
        </main>
        <!-- Main Content Wrapper End -->

<%@include file="/WEB-INF/views/footer/fu_footer.jsp"%>