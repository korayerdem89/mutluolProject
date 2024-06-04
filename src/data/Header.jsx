import { useTranslation } from "next-i18next";
const Header = () => {
  const { language } = useTranslation().i18n;
  return [
    {
      id: "1",
      label: "home",
      link: "/",
    },
    {
      id: "services",
      label: "services",
      link: `${language !== language + "tr" ? "/" : "/"}services`,
    },
    {
      id: "3",
      label: "about-us",
      link: `${language !== language + "tr" ? "/" : "/"}about-us`,
    },
    {
      id: "3",
      label: "projects",
      link: `${language !== language + "tr" ? "/" : "/"}projects`,
    },
    {
      id: "4",
      label: "contact",
      link: `${language !== language + "tr" ? "/" : "/"}contact`,
    },
    {
      id: "5",
      label: "press",
      link: `${language !== "tr" ? language : "/"}press`,
    },
  ];
};
export default Header;
