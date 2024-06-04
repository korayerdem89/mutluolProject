import { useTranslation } from "next-i18next";

const Header = () => {
  const { language } = useTranslation().i18n;

  const menuData = [
    {
      id: "1",
      label: "home",
      link: "/",
    },
    {
      id: "services",
      label: "services",
      link: `${language !== "tr" ? "/" + language : ""}/services`,
    },
    {
      id: "3",
      label: "about-us",
      link: `${language !== "tr" ? "/" + language : ""}/about-us`,
    },
    {
      id: "3",
      label: "projects",
      link: `${language !== "tr" ? "/" + language : ""}/projects`,
    },
    {
      id: "4",
      label: "contact",
      link: `${language !== "tr" ? "/" + language : ""}/contact`,
    },
    {
      id: "5",
      label: "press",
      link: `${language !== "tr" ? "/" + language : ""}/press`,
    },
  ];

  return menuData;
};

export default Header;
