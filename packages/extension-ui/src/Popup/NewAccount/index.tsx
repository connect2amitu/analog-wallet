import { useTranslation } from "react-i18next";

import { useToast } from "../../components/common/Toast/ToastProvider";
import AppHeader from "../../components/common/AppHeader";
import Container from "../../components/common/Container";

const NewAccount = () => {
  const { t } = useTranslation();
  const { show } = useToast();

  return (
    <div>
      <AppHeader />
      <button onClick={()=>show("hello world")}>show toast</button>
      <Container>
        <h2>{t("Create an account")}</h2>
      </Container>
    </div>
  );
};

export default NewAccount