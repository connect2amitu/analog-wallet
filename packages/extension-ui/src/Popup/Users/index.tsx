import { useTranslation } from "react-i18next";

import NavBar from "../Navbar";

const Users = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <h2>{t("Users")}</h2>
    </div>
  );
};

export default Users