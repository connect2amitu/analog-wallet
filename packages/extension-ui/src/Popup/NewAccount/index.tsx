import { useTranslation } from "react-i18next";

import { useToast } from "../../components/toast/ToastProvider";
import Container from "../../components/common/Container";
import { Button } from "../../components";

const NewAccount = () => {
  const { t } = useTranslation();
  const { show } = useToast();

  return (
    <div>
      <Container>
        <h2>{t("Create an account")}</h2>
        <Button onClick={() => show("hello world")}>
          {t<string>("Show Toast")}
        </Button>
      </Container>
    </div>
  );
};

export default NewAccount