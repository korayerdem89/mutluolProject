import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Brands = () => {
  const { t } = useTranslation("brands");
  return (
    <div className="blog-section2 mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-30">
            <div className="section-title1 two">
              <span>{t("key-title-top")}</span>
              <h2>{t("description")}</h2>
            </div>
            <Link legacyBehavior href="/blog-standard">
              <a className="explore-btn two">
                {t("explore-more")}
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  />
                </svg>
                <span />
              </a>
            </Link>
          </div>
          <div className="col-lg-12">
            <div className="divider" />
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <Image
                      width={371}
                      height={290}
                      src="/assets/img/home2/brands/6.png"
                      alt="erdem-emre-sen-official"
                    />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{t("brand1-desc")}</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        {t("read-more")}
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
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <Image
                      width={371}
                      height={290}
                      src="/assets/img/home2/brands/2.png"
                      alt="ese-finance"
                    />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{t("brand2-desc")}</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        {t("read-more")}
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
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <Image
                      width={371}
                      height={290}
                      src="/assets/img/home2/brands/3.png"
                      alt="onlyyou-brands"
                    />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{t("brand3-desc")}</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        {t("read-more")}
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
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <Image
                      width={371}
                      height={290}
                      src="/assets/img/home2/brands/7.png"
                      alt="ese-real-estate"
                    />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{t("brand4-desc")}</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        {t("read-more")}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
