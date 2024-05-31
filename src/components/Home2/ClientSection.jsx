import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const ClientSection = () => {
  const { t } = useTranslation("client");
  return (
    <div className="client-section mb-100 mb-md-130">
      <div className="container-fluid one">
        <h2>{t("references")}</h2>
        <div className="col-lg-12">
          <div className="client-logo-wrap">
            <div className="marque-wrap">
              <Marquee>
                <div className="marquee_text2">
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/1.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/2.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/3.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/4.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/5.png"
                      alt="reference client"
                    />
                  </a>
                   <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/6.png"
                      alt="reference client"
                    />
                  </a>
                  {/*
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/7.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/8.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/9.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/10.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/11.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/12.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/13.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/14.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/15.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/16.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/17.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/18.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/19.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/20.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/21.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/22.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/23.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/24.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/25.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/26.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/3.png"
                      alt="reference client"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={170}
                      height={62.5}
                      style={{ objectFit: "contain" }}
                      src="/assets/img/home2/refs/4.png"
                      alt="reference client"
                    />
                  </a> */}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
