import { useTranslation } from "react-i18next";

import { useToast } from "../../components/toast/ToastProvider";
import AppHeader from "../../components/common/AppHeader";
import Container from "../../components/common/Container";
import { Button } from "../../components";

const NewAccount = () => {
  const { t } = useTranslation();
  const { show } = useToast();

  return (
    <div>
      <AppHeader />
      <Container>
        <h2>{t("Create an account")}</h2>
        <Button onClick={() => show("hello world")} label={t<string>("Show Toast")} />
      </Container>
    </div>
  );
};

export default NewAccount