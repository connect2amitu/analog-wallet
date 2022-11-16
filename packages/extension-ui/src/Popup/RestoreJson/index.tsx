import { useTranslation } from "react-i18next";

import Container from "../../components/common/Container";

const RestoreJson = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <h2>{t("Restore from JSON")}</h2>
      </Container>
    </div>
  );
};

export default RestoreJson