import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const ProjectSection = () => {
  const { t } = useTranslation("project");
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
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="project-section mb-130">
      <div className="container-fluid one">
        <div className="row g-4">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
            <div className="section-title1 one">
              <span>{t("key-title-top")}</span>
              <h2>{t("description")}</h2>
            </div>
            <Link legacyBehavior href="/portfolio-three-column-tab">
              <a className="explore-btn">
                {t("explore-text")}
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
            <Swiper {...slideSetting} className="swiper project-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        width={500}
                        height={268}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/home2/arsa.png"
                        alt=""
                      />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project1-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project1")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        width={500}
                        height={268}
                        src="/assets/img/home2/consultant.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project2-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project2")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image width={500} height={268} src="/assets/img/home2/finance.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project3-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project3")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        width={500}
                        height={268}
                        src="/assets/img/home2/real-estate.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project4-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project4")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image width={500} height={268} src="/assets/img/home2/ticari.png" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project5-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project5")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        width={500}
                        height={268}
                        src="/assets/img/home2/house.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="#">
                            <a>{t("project6-title")}</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="#">
                            <a>{t("project6")}</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="#">
                        <a className="explore-btn">
                          {t("explore-project")}
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
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
