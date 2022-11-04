import { useTranslation } from "react-i18next";

import AppHeader from "../../components/common/AppHeader";
import Container from "../../components/common/Container";

const RestoreJson = () => {

  const { t } = useTranslation();

  return (
    <div>
      <AppHeader />
      <Container>
        <h2>{t("Restore from JSON")}</h2>
      </Container>
    </div>
  );
};

export default RestoreJson