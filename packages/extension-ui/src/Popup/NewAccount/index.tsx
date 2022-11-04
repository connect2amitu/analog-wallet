import { useTranslation } from "react-i18next";
import AppHeader from "../../components/common/AppHeader";
import Container from "../../components/common/Container";

const NewAccount = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AppHeader />
      <Container>
        <h2>{t("Create an account")}</h2>
      </Container>
    </div>
  );
};

export default NewAccount