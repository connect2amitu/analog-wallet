import { useTranslation } from "react-i18next";

import NavBar from "../Navbar";
import Button from "../../components/Button"

const Dashboard = () => {

  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <h2>{t("Dashboard")}</h2>
      <Button label={t("Ok")} />
    </div>
  );
};

export default Dashboard