import LoadingComponent from "../../components/Loading";
import { useTranslation } from "react-i18next";

import NavBar from "../Navbar";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <h2> {t("Home")}</h2>
      <LoadingComponent text="" />
    </div>
  );
};

export default Home