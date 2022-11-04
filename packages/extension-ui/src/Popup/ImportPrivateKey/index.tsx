import { useTranslation } from "react-i18next";

import AppHeader from "../../components/common/AppHeader";
import Container from "../../components/common/Container";

const ImportPrivateKey = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AppHeader />
      <Container>
        <h2>{t("Import Private Key")}</h2>
      </Container>
    </div>
  );
};

export default ImportPrivateKey