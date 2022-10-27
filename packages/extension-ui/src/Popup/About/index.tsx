import { useTranslation } from "react-i18next";

import NavBar from "../Navbar";

const About = () => {

  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <h2>{t("About")}</h2>
    </div>
  );
};

export default About