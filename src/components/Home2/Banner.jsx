import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Banner = () => {
  const { t } = useTranslation("banner");
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 4500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
    };
  }, []);
  return (
    <div className="banner2-section mb-130">
      <Swiper {...slideSetting} className="swiper banner2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home/hero3.png)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      <span>{t("key-title-top")}</span>
                      <h1>{t("title1")}</h1>
                      <Link legacyBehavior href="/service-details">
                        <a className="primary-btn1 btn-hover">
                          {t("contact-us")}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>{t("subtitle1")}</h5>
                      <ul className="btn-group">
                        <li className="success-rate">{t("key-title1")}</li>
                        <li className="success-rate">{t("key-title2")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home/hero2.png)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      <span>{t("key-title-top2")}</span>
                      <h1>{t("title2")}</h1>
                      <Link legacyBehavior href="/service-details">
                        <a className="primary-btn1 btn-hover">
                          {t("contact-us")}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>{t("subtitle2")}</h5>
                      <ul className="btn-group">
                        <li className="success-rate">{t("key-title1")}</li>
                        <li className="success-rate">{t("key-title2")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home/hero1.png)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      <span>{t("key-title-top3")}</span>
                      <h1>{t("title3")}</h1>
                      <Link legacyBehavior href="/service-details">
                        <a className="primary-btn1 btn-hover">
                          {t("contact-us")}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>{t("subtitle3")}</h5>
                      <ul className="btn-group">
                        <li className="success-rate">{t("key-title1")}</li>
                        <li className="success-rate">{t("key-title2")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
