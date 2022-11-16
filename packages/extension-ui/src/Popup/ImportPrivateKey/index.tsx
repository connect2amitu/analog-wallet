import { useTranslation } from "react-i18next";

import Container from "../../components/common/Container";

const ImportPrivateKey = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <h2>{t("Import Private Key")}</h2>
      </Container>
    </div>
  );
};

export default ImportPrivateKey