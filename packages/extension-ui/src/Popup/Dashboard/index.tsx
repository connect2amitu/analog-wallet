import NavBar from "../Navbar";
import Button from "../../components/Button"
import { useTranslation } from "react-i18next";

const Dashboard = () => {

  const { t } = useTranslation();



  return (
    <div>
      <NavBar />
      <h2>Dashboard</h2>
      <p>{t("react-i18next")}</p>
      <Button label="Testing button" />
    </div>
  );
};

export default Dashboard