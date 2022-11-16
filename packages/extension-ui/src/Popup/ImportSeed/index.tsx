import { useTranslation } from "react-i18next";

import Container from "../../components/common/Container";

const ImportSeed = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <h2>{t("Import account")}</h2>
      </Container>
    </div>
  );
};

export default ImportSeed