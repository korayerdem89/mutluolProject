import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const PeopleSection = () => {
  const { t } = useTranslation("people");
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8,
        },
        1800: {
          slidesPerView: 9,
        },
        2000: {
          slidesPerView: 10,
        },
        2200: {
          slidesPerView: 11,
        },
        2400: {
          slidesPerView: 12,
        },
      },
    };
  }, []);
  return (
    <div className="people-section2 mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
            <div className="section-title1 two">
              <h6>{t("title")}</h6>
              <h2>{t("description")}</h2>
            </div>
            <Link legacyBehavior href="/our-people1">
              <a className="primary-btn1 btn-hover">
                {t("teamLink")}
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper peole-slider">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-01.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Hande Mutluol</a>
                            </Link>
                          </h5>
                          <h6>Broker Owner</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-02.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Kağan Çığşar</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-03.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Esra Özgenç</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-04.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Ertuğrul Peker</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-05.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Gül Başıbüyük</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-06.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Oğuz Kaynaş</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-07.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Sinem Kaynaş</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-08.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Şenol Güneş</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-09.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Yasemin Peker</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-10.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Aslı Aksoy</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-12.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Tuba Yeramyan</a>
                            </Link>
                          </h5>
                          <h6>Gayrimenkul Uzmanı</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <SwiperSlide className="swiper-slide">
                    <div className="people-card2 magnetic-item">
                      <div className="people-img">
                        <img src="assets/img/home2/people-13.png" alt="" />
                      </div>
                      <div className="people-content">
                        <div className="name-deg">
                          <h5>
                            <Link legacyBehavior href="/people-details">
                              <a>Burçak Şen</a>
                            </Link>
                          </h5>
                          <h6>Yabancı Satış Müdürü</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
